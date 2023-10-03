---
layout: post
title: Restricting Site Editing
date: 2021-11-15T15:26:21.788Z
thumbnail: /assets/restricting-site-editing.jpeg
slug: restricting-site-editing
---
# Restricting Full Site Editing
Building an enterprise site using WordPress’ Full Site Editing comes with some unusual caveats to the usual development process. Highest among them, is the user’s ability to make modifications to the theme templates using the editor, and overriding any changes you might make yourself and deploy through version control.

For context, in this case when talking about the Site Editor, Full Site Editing and related, I’m referring to content that is managed via the Site Editor, and not the individual page Block Editor. This includes page-templates, header and footers, synced patterns and similar ‘furniture’ of the site. 

Before reading this, you should have a good understanding of how post-types in WordPress work (including capabilities), what `theme.json` is, along with understanding the HTML markup that Gutenberg uses to store content and generally a fairly confident approach to WordPress development. 

## Why Restrict Site Editing
When building an enterprise level WordPress site having environment consistency and safe controls ensures that you can deliver a product of consistent, high quality. Allowing any user to be able to make site-wide changes allows for simple things like design conventions not to be followed, or usability issues, or lasting impacts in the way that all site-components are used.

With all those risks, you might ask why not disable the Site Editor completely. There’s a few good reasons, and the biggest is that navigation can only be configured through the site editor when building a block-theme. There’s lots of features in the site editor that you’d typically want to provide to the client, such as the ability to create block-patterns and reusable components.  Lastly, it’s likely that WP will continue to push new features and functionality into the Site Editor, and blanket-restricting the Site Editor is only likely to cause more issues later down the line. Instead of rejecting changes, let’s embrace them.

## Configuring `theme.json`
Before spending tons of time worrying about providing complex solutions, you should spend some time getting to know what’s configurable in `theme.json`. Tons of options exist to configure the site and bock editor and lots can be achieved with this one file alone. You can enable and disable most of the block customisation features, customising the block-editing experience so that most users have a the right amount interface to modify blocks. Taking time to really understand `theme.json` will also serve you well later! 

### Dynamic `theme.json` configuration
One issue with using a good `theme.json` config that it applies to all users equally. Perhaps we’d like some users user to be able to change the content, such as update the text or menu items, but we’d rather not let them change colours and alignment of these templates. 

Fortunately there’s the `wp_theme_json_data` filter which allows us to change the `theme.json` settings dynamically.
```php
add_filter(
    'wp_theme_json_data_theme',
    function ( WP_Theme_JSON_Data $theme_json ): WP_Theme_JSON_Data {
        $new_data = array(
            'version'  => 2,
            'settings' => [
                'color' => [
                    'text'       => false,
                    'background' => false,
                ],
            ],
        );

        return $theme_json->update_with( $new_data );
    }
);

```

You use the same structure from `theme.json` to limit the scope of your changes to certain block types, and of course you can calculate if the values should be true or false depending on whatever conditions you can determine. Ultimately you’ll likely find there’s still some limitations because of the lack of context, but more on that coming up later!

## Javascript Solutions
The site editor provides some mechanisms in order to modify the editing experience if you’re comfortable with custom JS solutions. Remember that these changes will be for the frontend only, and you may wish to pair these solutions with a backend solution if you need absolute protection where the site-editor may be accessible by those with less than good intentions. 

The solutions here assume that you have a build tool and that you’re loading the JS in the site editor. I also assume you have some basic knowledge of how the block editor works, and it would be handy to know at least a little bit about data stores in the block editor (Redux Stores). The examples below are mostly TypeScript, though there’s liberal use of `any` because WordPress. 

### Disabling Settings Areas
Adding filters via JS isn’t a common practice yet, but the `blockEditor.useSetting.before` filter is a handy place to be able to determine if a setting should be displayed or not. The best part about this filter is that it has access to basically any context it needs, so you can determine if a setting should be available based on basically any value you can determine. 

```javascript
/**
 * Disable text color controls on Heading blocks when placed inside of Media & Text blocks.
 */
addFilter(
    'blockEditor.useSetting.before',
    'example/useSetting.before',
    ( settingValue, settingName, clientId, blockName ) => {
        
        if ( blockName === 'core/heading' ) {
            const { getBlockParents, getBlockName } = select( 'core/block-editor' );
            const blockParents = getBlockParents( clientId, true );
            const inMediaText = blockParents.some( ( ancestorId ) => getBlockName( ancestorId ) === 'core/media-text' );
            if ( inMediaText && settingName === 'color.text' ) {

                return false;
            }
        }

        return settingValue;
    }
);

```

There is a limitation here however in that you can only control this for elements that can already be controlled via `theme.json` - so for hiding any interface elements that don’t support being hidden already via `theme.json` then keep on reading!

### Hiding Interface Elements
For some reason certain elements aren’t configurable or hide-able via `theme.json`, so also can’t be affected by the filter above. A little bit more custom JS can provide a solution that allows you to hide editor interface elements based selectors and the block selector will work somewhat like this.

We start by subscribing to changes in the store for the block editor and getting the currently selected block. If this is the block we wish to control, we can go on to hide any elements we need to using ‘vanilla’ javascript to achieve what we need.
```typescript
import { subscribe } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

subscribe( () => {
    const currentBlock = select( blockEditorStore ).getSelectedBlock();
    if ( currentBlock && currentBlock.name && currentBlock.name == 'core/button' ) {
        // hide the element
        document.querySelectorAll('selector').forEach( (element ) => { 
            element.classList.add('hidden') 
        }
    });
}, blockEditorStore );
```

Naturally you may need to tweak this to make the configuration a bit more modular. You’ll also find that lots of elements in the interface don’t have nice selectors, so a quick brush up on selectors such as `[aria-label=“value”]` might help. With this approach you can achieve the result of hiding certain interface elements quite quickly, and you continue to have the ability to use any data or context just like in the filter. 

### Using a permissions-model
So now we can hide an element one way or another, we might want to tie this to specific permissions that a user might have. This is a simple helper method to check if a user has a simple capability can be used to determine if a user can make a change.

```typescript
import { select } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export const hasCapability = ( capability: [ string, string, string? ] ): boolean|undefined => {
    return select( coreStore ).canUser( ...capability );
}
```

You’ll notice the input parameter for this function is an array of 3 strings. This actually determines how the capability is looked up using the WP REST API. Broadly, those 3 strings are going to be `action`, `resource` and `id`. The `action` will be one of: ‘create’, ‘read’, ‘update’, ‘delete’. The `resource ` will match to the REST API for the post-type you’re querying, and the `id` will query the capability on the specific post. So the URL is basically built with `wp-json/wp/v2/{resource}/{id}`. Underneath this the editor will make an `OPTIONS` request to see if the user has capability to make `POST` or `DELETE` or `PUT` requests and map that back to `create`, `read`, `update` and `delete`. 

Obviously this is limited to post-types that are exposed to the REST API - most of which are not likely to be the types of things you’re looking for so in reality you may need to make your own API call to another endpoint to work out the appropriate permissions of the user. I’ll leave that to an exercise for the reader, but needless to say with this capability it’s near endless to grant permissions for any data you wish to pass from the editor back to PHP to run the capability check. Bear in mind that this API call will be made pretty much any time the editor interface changes, so it’ll need to be cached/stored (I’d recommend using a WP data-store, they’re reasonably straightforward to get going with). 

## PHP Solutions
Defining a solution in PHP provides server-side validation and therefore is the only truly reliable way to ensure changes aren’t being made where they shouldn’t. Before starting looking through the backend solutions, it’s important to know how WP stores any changes that the user makes so you can control how the data is processed and stored.

### The Underlying Structure
A typical block-theme will provide a number of files in `wp-content/themes/{your-theme}/templates/` which use the Gutenberg-HTML syntax to define the layout and structure for each of the templates for the site. These replace the PHP equivalents such as `page.php` or `single-post.php` . 

The site editor allows a user to edit these templates in a drag-and-drop interface. If you’re like me, you’d assume the changes that are made to these templates would update the template files themselves. However the reality is that changes to templates are stored in the DB and, as with most things WP related, the data is stored in the database is stored as a post. If you have a look in `wp_posts` table, there’s a number of posts in there for the contents of your templates, navigation menus, any patterns, _and_ any styles setup as global styles. Each of these have a special post-type that’s used to determine how the site editor loads the data.

- The `wp_template` post-type is for all your templates, such as `archive-post` or `single`. The content of this post is the HTML markup of the template.
- The `wp_template_part` post-type is for template-parts, such as `header` and `footer`. The content of this post is the HTML markup of the template part.
- The `wp_block` post-type is for block patterns. This block also stores the HTML markup in the content.
- The `wp_navigation` is similar to a template part - stores a navigation menu instead however. As the with the other templates, it stores it’s content in HTML. 

Each of these post-types store their data in the same Gutenberg-HTML format - it’s worth taking time to understand this format as it’s not terribly difficult to read. 

> There’s also a post-type called `wp_global_styles` which stores any overwritten style information for the global site styles. This is one of the rare cases where JSON is used to store the data in the DB.

### Restricting Access
Now we know what’s going on under the hood, we can start to do some things to restrict access and enforce permissions. Because templates are just post-types under the hood, we can utilise that every post-type has a [capability mapping](https://developer.wordpress.org/reference/functions/register_post_type/#capabilities). The capability mapping determines what permission levels a user must have in order to do certain things (read, edit delete, create). 

At time of writing, there are some known issues with the Site Editor that mean that sometimes the interface to make changes still appears, and only when going to save is an error presented (or not in some cases). These issues may be resolved in future iterations of the Site Editor, but we should be aware of these limitations and ensure any users of the Site Editor are aware.

#### Preventing new templates being created
If you want to restrict a user from being able to create a new template you can modify the `create_posts` capability for the template post type.

```php
add_filter(
    'wp_template_type_post_type_args', // Filter the `wp_template` post-type registration args
    function ( array $args ): array {
        $args['capabilities'] = array_merge(
            [ 'create_posts' => 'do_not_allow' ], // override the `create_posts` capability
            $args['capabilities']
        );
        return $args;
    }
);
```

Now, when a user goes to create a new template in the Site Editor, they’ll be presented with an appropriate error message: 

> Sorry, you are not allowed to do that.

It’d be nicer if the **add** button disappeared, but overall this provides a good experience. Naturally you can use all the usual methods to dynamically provide this permission, such as only allowing templates to be created by a certain user type or on a certain environment. 

In this context, this prevents a user providing a page-template for any reason, so they cannot create a whole-page template that could override any default templates that fallback (ie fallback from `archive-{post-type}` to `archive`. Broadly, disabling the ability to create templates for end-users seems sensible approach, and instead templates can be designed and managed through version control and the typical development process. 

#### Preventing existing templates being edited
So having understood how to stop templates being created, you might think that in order to prevent your existing templates being modified you’d need to add the do-not-allow value to`edit_others_posts` in the capability mapping. And if you’re thinking that, [you’re](https://github.com/WordPress/gutenberg/issues/37126) [not](%5Bhttps%3A//core.trac.wordpress.org/ticket/54516) [alone](https://github.com/WordPress/gutenberg/issues/51886), but at time of writing that’s just not the case.

Going forward, I expect that changes will be made to respect the post-type capabilities permissions, but for now this is a known issue. To prevent existing templates being modified, there’s a few choices. I personally recommend block locking and the JS solutions, but if you fancy a trip into the deepest darkest parts of WP, there’s more options. 

### Modifying the REST API to prevent unauthorised changes.
Under the hood, all changes made to templates are made via the standard REST API. This means we can hook into the WP API controllers and modify responses and permissions to have the desired affect. This _may_ not provide an excellent user interface, but it will protect the site from un-permitted changes. 

First, we need to change the REST controller class that the post-type uses. We can add an action to modify the class used for the controller like so:

```php
add_action( 
    'registered_post_type_wp_template', // for the `wp_template` post type
    function ( string $post_type, WP_Post_Type $post_type_object ) {
        $post_type_object->rest_controller = null;
        $post_type_object->rest_controller_class = 'Example_Template_Controller';
    }, 
    10, 
    2 
);
```

Next, we’ll need to define the REST controller and override any methods that we need to. 
```php
class Example_Template_Controller extends WP_REST_Templates_Controller {
    public function update_item_permissions_check( $request ) {
        return false;
    }
}
```

So this will return a `false` for any request that comes in to update an item. This doesn’t prevent a user from loading up the interface that allows them to prepare changes to make to the templates, but it does cause an error message when the user presses save. 

> Saving failed.

Not an ideal interface, so you should explore what ways we can add notices to the interface to indicate that the user won’t be able to save their work. There’s a good amount of resource online about how to add elements to the Site Editor, but I’ve not really spent the time to investigate that as the experience here isn’t ideal. 

Replacing the `WP_REST_Templates_Controller` gives more access to modify the API responses when the site editor is being used, so you should look at the source for this to see how you can modify the responses to have the exact control you’re looking for. This won’t help the interface, but it will prevent un-permitted changes. 

A new controller is a powerful way to manage the Site Editor, but you should also be careful to test these changes thoroughly. Working in these types of areas of WP can have unintended consequences. The permissions for Site Editor aren’t completed in Gutenberg yet because it’s very complicated to build a system that handle every edge case for permissions. 

### The `wp_insert_post_data` filter
As we’ve said that all the custom data stored ultimately is a post, all the usual WP hooks are available to be utilised. A pretty significant thing you can do is hook into the `wp_insert_post_data ` filter to modify any data before it’s saved. Broadly you could use this to block any changes if the post-type is one of the target post-types, or all sorts of things like adding locks automatically. The filter is really well documented and if you’ve got this far I’m sure you can work out the best way to use this filter to prevent modifications to your templates and styles.  

## Limitations
There’s _lots_ of limitations due to the lack of underlying support in Gutenberg for a robust permissions model. [See](https://github.com/WordPress/gutenberg/issues/37126) [these](%5Bhttps%3A//core.trac.wordpress.org/ticket/54516) [tickets](https://github.com/WordPress/gutenberg/issues/51886). My main issue with the permissions model is about not having a simple way to prevent style and layout changes whilst allowing the user to still modify content. Given the diversity of different blocks I understand the hesitation to implement something, but for Full Site Editing to be a truly manageable solution for enterprise customers progress must be made. 

## The `edit_theme_options` capability
There’s _tons_ online about how the `edit_theme_options` capability can be used to restrict changes in the Site Editor. Whilst I’m sure there’s some good ways to use it, in my experience I’ve not really been able to use that capability to much affect. You may find that using that capability works for your intended goal so give it a go. 

## Further Reading
There’s a good article on [wordpress.org](https://developer.wordpress.org/block-editor/how-to-guides/curating-the-editor-experience/) about this very subject which also lists some of the approaches above.
