---
layout: post
title: Full Site Editing in WordPress
date: 2022-04-12T00:00:00.000Z
thumbnail: /images/uploads/fse.webp

---
[Gutenberg](https://wordpress.org/gutenberg]) and [Full Site Editing](https://developer.wordpress.org/block-editor/getting-started/full-site-editing/) are a pair of frameworks that WordPress are moving towards to allow the administrators of WordPress sites to have greater flexibility and customisation of their sites. Following the success of site-builder services such as Squarespace and Wix, and page-builder plugins such as WP-Bakery’s Visual Composer, these frameworks give the power of the ability to customise and edit a site in seemingly endless ways. However it’s not always as straight forward.

If you’re a web developer who’s been developing on WordPress for years, this might sound a little scary - suddenly our clients have immense power to make changes to their sites and ruin the pixel perfect designs that you’ve spent hours pouring over to make every detail perfect. You’ve iterated and iterated to reproduce your design using your best CSS and JavaScript skills, and backed it up with an admin interface that makes it simple to use for your client. Now they can do whatever they want?

And what about the poor client, do they really want to be configuring every little element of your site themselves? Most agency clients made the choice to hire an agency to do all this work for you, and the last thing you need to do is be supporting a client with all the minor details they need to control just to make the site looks good. 

Fortunately the new tools provide infrastructure so that WordPress can be  setup by the developer to allow the editing experience to be as complicated or simple as we want it to be. This could be locked down so that the client can only populate simple text and image fields in a nearly fixed layout template, or it could be a number of complex bespoke elements the client can configure the colour, style and size of which will allow them to effectively build the site themselves. 

### What’s Gutenberg and Full Site Editing
When thinking about Gutenberg Blocks and Full Site Editing It’s a good idea to split these into two features that interact with each other but are not dependant on each other. This makes it both easier to understand conceptually, and also easier to work with when you’re planning your next build.

#### Gutenberg Blocks
Essentially Gutenberg blocks can be any snippet of content, big or small. This could be as something simple as a single button that links off to another page, or as complex as nearly all of a page template in a single block. 

As web developers, we should listen to our clients needs and understand their technical abilities so we can adjust the blocks and functionality we build accordingly. Some clients will appreciate that they can put together any number of tiny-blocks to build the site themselves, like a client with a comprehensive lego set. Others will appreciate that they can insert a simple block from a short list and it has all the styles and layout they want. Fortunately you can create Gutenberg blocks to meet either need, or even both! There’s great tools to group and categorise blocks too, to make it easy to build an interface your client can navigate. The best part is that you have complete control of the look and feel of the editor experience too so you can provide the client with a true WYSIWYG experience, or you can even add extra helpful hints and tips inline in the editor and anything in-between. 

WordPress comes with a really wide set of blocks as standard, that include loads of things that you’d usually want to provide to your client, and much more. Whilst it’s possible you could take the time to develop a stylesheet that uses the markup that the standard blocks to give the site the style and theme you’d like, in practice this will be limited based on the HTML that the built in blocks generate which isn’t easily modified. If you’re an experienced theme developer it’s very likely you have your own way of working or even have a base stylesheet or framework you like to work from. It’s fairly simple to disable the built in blocks and replace these with your own blocks and that will allow you to customise the HTML markup that’s generated from each block, and adjust the customisability the client has. I’d recommend taking the time to build a set of blocks you’d like to provide to your client and disable all the WordPress blocks, since this will reduce your need to support blocks you have not developed, and the ability to customise the output to suit your way of working and exact client needs. 

#### Full Site Editing & Templates
Once you’ve taken the time to develop a bunch of blocks, if you don’t adopt Full Site Editing, you’ll still need to write a header and footer in a traditional method such as PHP, and then add an ability for this to be modified in a bespoke interface somewhere in the admin area. WordPress hasn’t always made this easy, with tools such as [the Customizer](https://wordpress.com/support/customizer/) being the recommended way, but it never really felt right. Lots of theme developers will add interfaces in the admin area to allow aspects of the header and footer to be modified, but none of these provide a rich visual experience which your users will become accustomed to if they’re using Gutenberg editing for their pages and posts. 

These limitations aren’t limited to the header and footer, but also include pages such as `archive`. `404` and `single` which often need custom templates and layouts that often need customisable content where there’s no obvious place to allow your client to make these modifications.

The framework for Full Site Editing makes this easy by providing a built in interface that is similar in feel to the Gutenberg editor, and even easier to setup than building Gutenberg blocks.  This is achieved using simple HTML files, with some special markup within to allow WordPress to dynamically include Gutenberg Blocks, which are editable in the same interface as the main post editing experience. 

### Getting Started
Sounds great right? Before we dive in, it’s important to note it’s a big departure from what you may be used to if you’ve been developing themes for WordPress using the PHP methods. You can also however include these features in sections of the site, and you don’t have to go all in and once. I’d recommend becoming familiar with Gutenberg before moving on to full site editing, though technically you can always do this the other way around if you’re feeling brave. Once you’ve learned the skills, in future it’ll be possible to build a site theme barely a few lines of PHP, and instead everything will be a mix of HTML, CSS and JS.

#### Gutenberg
You can enable/disable Gutenberg on a per-post-type basis, so you can enable it for `pages` but disable it for all other pages and posts and continue in the way you’re used to.  There’s tons of resources for how to build a Gutenberg block, so we’ll leave this as a separate exercise for now. You can use Gutenberg without making use of FSE, as long as you call `the_content();` in your PHP template it’ll work just as you expect. 

#### Full Site Editing
To start using Full Site Editing (FSE), you’ll need at least a `theme.json` file in your theme folder, which should conform to the [specifications that WordPress provides](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/)). You should also create a directory called `templates/` and within that you can create any `.html` file with the same naming convention you’d have for a typical WordPress site. So `404.php` becomes `templates/404.html` and `archive.php` becomes `templates/archive.html`. 

Within each of these templates, you can specify the markup needed to output the page using standard HTML. Don’t forget to mark a place for the post-content to output (`<!— wp:post-content /—>`,  more on that markup later!) if the page is a page that will typically include post content, such as `single.html` . When used in conjunction with Gutenberg, all the blocks that the client has specified will output within the the content area, though this is 100% compatible with non-Gutenberg post-content if you have a page that doesn’t support Gutenberg. 

This allows you to construct your templates using pure HTML and CSS, and if you’re using the built in Gutenberg blocks, they’re the only skills you’ll need. 

Experienced developers will be asking about code re-usability for things like headers and footers. If this was the end of the story we’d be adding the same markup over and over for headers and footers on each template. To get around this, there’s a handy *Template Parts* feature.

#### Template Parts
Template Parts are re-usable components that are similar to a full template, except they should be used to create smaller parts that you’d like to include in your main templates. This means they follow the exact same markup and conventions as the main `templates` files, but lives in the `template-parts` folder instead.

Much like templates, a template part will include Gutenberg blocks which are editable within the site editor, along with the ability to add and remove blocks from a given template part.

Also, template parts can be created purely in the editing interface. So for example, if a client loves to have the same 4 blocks on each of their blog posts, they could create it as a template part that has all the blocks they like, then include it in their blog posts. 

Confused?! Maybe it’s time to learn about how this works in practice!

### Example Of FSE
For the purposes of this example, I’m going to assume that you already have a designed and created number of Gutenberg Blocks you wish to use on your new site. We’re going to focus on how you can use Block Templates and Template Parts to achieve what might’ve been previously achieved by using PHP templates. 

#### File Structure 
Your folder structure should loosely consist of the following files and folders:
```
themes/theme_name/theme.json
themes/theme_name/templates/archive.html
themes/theme_name/templates/404.html
themes/theme_name/template-parts/header.html
themes/theme_name/template-parts/footer.html
```
These files will form the basis for a header and footer, along with a 404 and archive page which should behave as you’d expect within WordPress. 

#### Template Parts
So let’s look at some example code, starting with `header.html`:
```html
<!-- wp:group {"align":"full","layout":{"type":"flex","justifyContent":"space-between"}} -->
<div class="wp-block-group alignfull">
    <!-- wp:group {"layout":{"type":"flex"}} -->
    <div class="wp-block-group">
        <!-- wp:site-logo {"width":95} /-->
        <!-- wp:site-tagline {"fontSize":"extra-small"} /--></div>
    <!-- /wp:group -->
    
    <!-- wp:navigation {"overlayMenu":"mobile","layout":{"type":"flex","justifyContent":"right","orientation":"horizontal"}} -->
        <!-- wp:search {"label":"Search","showLabel":false,"buttonText":"Search","buttonPosition":"button-inside","buttonUseIcon":true} /-->
        <!-- wp:navigation-link {"label":"Home","url":"#"} /-->
        <!-- wp:navigation-link {"label":"About them.es","url":"#"} /-->
        <!-- wp:navigation-link {"label":"Blog","url":"#"} /-->
        <!-- wp:navigation-link {"label":"Contact","url":"#"} /-->
    <!-- /wp:navigation -->
</div>
<!-- /wp:group -->
```
Whoa! What a load of comments, and barely any HTML!! Let’s break this down a little bit. 

The comments you see are specifically formatted comments that define where which Gutenberg Block should be used within these templates and template parts. Loosely these blocks are structured in a similar structure to HTML or XML where you have an opening and closing tag, or a self-closing tag. An opening block would typically look like `<!— NAMESPACE:BLOCK-NAME { ATTRIBUTES } —>` with a closing being like `<!— /NAMESPACE:BLOCK-NAME —>`. Self closing blocks have the `/` at the end of the opening tag much like a `<html />` tag might, so become `<!— NAMESPACE:BLOCK-NAME /-->`.

Within the opening and closing tags of the block, you should include any markup that the block would generate based on the attributes provided. You can see in the example that a `wp:group`  block outputs a `<div class="wp-block-group">` to wrap it’s content in. This ensures that when the user might edit this page they can change any settings on the block as they see fit. If your block does not allow for content within it, then simply including a self-closing block tag will create the necessary output. If you fail to include the HTML markup the block will generate for blocks that include content within them, then when the editor is loaded you may see an error and the user may be prompted to try and ‘fix’ the block. The fix will work, but it’s probably best we avoid this by including the markup. 

As mentioned, by using FSE the templates you create make use of Gutenberg blocks you’ve made previously to construct the site block by block, so you should think carefully about creating blocks that represent anything you feel you might need. Any customisable areas would be specified within the block’s configuration, and in theory your end user can remove the block from the template part if they desire. They could even replace your block with a different block if they wanted. 

Based on this, you may realise that you need far more blocks than you initially planned, but as you develop more and more themes that support FSE you’ll get to learn how to plan this out effectively. 

### Templates and using Template Parts
If you have made a template part it can now be reused in the actual templates themselves, such as `archive.html`:
```html
<!— wp:template-part {"slug":"header","tagName":"header","className":"site-header"} /—>

<!— wp:group {"tagName":"main"} —>
<main class="wp-block-group">
    <!— wp:group {"layout":{"inherit":true},"align":"wide"} —>
    <div class="wp-block-group alignwide">
        <!— wp:query-title {"type":"archive","align":"wide"} /—>

        <!— wp:term-description {"type":"archive","align":"wide"} /—>
    </div>
    <!— /wp:group —>

    <!— wp:template-part {"slug":"query","layout":{"inherit":true}} /—>
</main>
<!— /wp:group —>

<!— wp:template-part {"slug":"footer","tagName":"footer","className":"site-footer"} /—>
```

Here you see the `<!— wp:template-part { … } /—>` tag which will import the template part by using it’s slug as the retrieval method. This quite simply allows you to construct templates using components much like you’d do using PHP based templates using includes or WordPress’ `get_template_part()` function. 

### Putting it all together
So with these new found super-powers we can construct any page-templates with as many reusable components as you need.  You can also allow your clients to modify any part of the site you see fit, and also restrict them from modifying parts you don’t want to. It’s as simple as creating a block with hard-coding HTML, much like if you’re building a template using PHP, and only allowing the specific fields to be modified.  It’s a clear departure from how you may be used to developing themes for WordPress, but the simplicity of the templating structure makes for a refreshingly effective solution to what historically was only accessible to more experienced developers. With the built-in blocks provided by WordPress, there’s a real sense that in reality anyone with basic HTML and CSS skills could put together a fairly decent, if simple, site that’s easy for a client to configure and customise however they like. And for advanced and complex sites, the framework allows developers to create a fully bespoke site with all the rich editing experiences that clients are starting expect. 