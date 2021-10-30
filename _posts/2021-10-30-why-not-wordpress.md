---
layout: post
title: Why don't I use WordPress for this site?
date: 2021-10-30T12:16:27.796Z
thumbnail: /images/uploads/wordpress.jpg
---

I've written before that I run this site using [Jekyll](http://jekyllrb.com), but I've never quite said why. 

I'm a WordPress developer and have tons of experience building and running WordPress sites, so it would be natural for me to create a site using WordPress for my own personal site. But it's so easy to become a one-trick pony in a world that's always moving, so trying new things is key to being a better developer. Even if you don't end up using your new skills directly, trying new things opens your mind to other ways of doing some of the common problems found in most programming frameworks. So for example, this site built using Jekyll exposed me to Ruby, which up until this point I had gracefully avoided. 

One thing I learned quickly working in Jekyll is how much I like templating languages to split the code from the view. WordPress is great in many ways, but there's only so many times you can enjoy writing `<?php echo wp_kses_post($var); ?>` before you come to realise that there's got to be a better way. Within WordPress now I like to make use of [Timber](https://github.com/timber/timber) because it splits the views away from the logic layer and tries to help WordPress get closer to a true MVC framework, and that's something that I may not have done if it wasn't for trying something new.

Also, as an experienced web developer I don't exactly need the supporting framework of WordPress to build a site. I could do it all with pure static HTML and be happy with the result and effort needed, so I like that Jekyll allows me to write blog posts (infrequently) and pages in markdown and I've setup for automated deployments as soon as I commit. It makes it trivial to add new content to the site, whilst still giving me complete control of each template in what's as close to raw HTML as it can be.

Lastly, static site generators mean that hosting your site is a doddle - no backend needed, just somewhere that's capabale of serving HTML files, so my sites live on a FireBase CDN, blazing fast and zero cost. 