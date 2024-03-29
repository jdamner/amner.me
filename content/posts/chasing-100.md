---
layout: post
title: Chasing the perfect 100 pagespeed
slug: chasing-100
thumbnail: /assets/chasing-100.png
date: 2021-03-18T15:26:21.788Z
---
Pagespeed is a horrid metric about how fast your site loads. Regardless on how I feel though, it mattters - slow loading pages are ranked lower in search engines, but more importantly are more likely to bounce users. 

Chasing a 100% on Google’s pagespeed sometimes fees like an impossible dream. I’ve tried (and succeeded) but sometimes it’s just not meant to be. This site has the advantage of being built as a static site - what you’re getting is just a bunch of HTML files stored on a server somewhere. Adding in a database lookup and a template building engine and a bunch of PHP takes time, even if it’s only a few microseconds that counts. 

But honestly, most servers and server side languages, frameworks and the like do such a good job with caching and are generally quite efficient, worrying about what framework you’ve built your site in is pointless. I’ve seen Wordpress deliver a page with just 23KB. 

Key to great pagespeed is thinking about pagespeed right from the earliest opportunity - design! If the homepage has a video banner as its initial view, you’re never getting that perfect 100. The design of this site is quite sparse, and that’s partly because I like it that way, and partly a design that’s efficient. It’s fast loading, simple to maintain and doesn’t come with a ton of dependencies. But I’m still only scoring high 90s.