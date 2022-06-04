---
layout: post
title: I've migrated to Firebase
date: 2021-01-01T15:26:21.788Z
thumbnail: ../assets/firebase.png
slug: migration-to-firebase
---
I wrote a long while back that I build and deploy this site using netlifly - and I’ve always had really great experiences. 

My domains and nameservers  are registered with Google and I thought there may be some benefit in using Google’s hosting with their DNS. Since I’ve only ever really used AWS’s services or run servers on services like linode, I thought it would be a good chance to learn something new too. 

Part of the benefit of netlifly is that it’s predominantly a build pipeline tool, hosting is almost a secondary consideration - that made configuring netlifly to build my site a no-effort process. Moving to Google’s Firebase Hosting meant that I wouldn’t have the benefit of Netlifly’s build pipeline and would need to find an alternative solution. 

I didn’t start off thinking about an alternative build pipeline, initially I thought I’d just build on my local machine and deploy direct. My site is uncomplicated, but when going through Firebase’s setup, I was prompted to setup a GitHub workflow for building and deploying. So without even thinking I was down the rabbit hole of making my site build and deploy via GitHub actions. 

If you’ve ever worked on any similar deploy plans, GitHub actions will feel right at home. At my day job we use Azure deployment pipelines to deploy and manage our custom Wordpress build, so because this site is far from complicated a simple npm install and Jekyll build command and to push the site to Firebase. 

Revisiting the build pipeline reminds me why I like Jekyll and static site generators in general - in so many ways decoupling from a database makes maintaining and deploying a website an absolute breeze - a few commands and you’re done, very much unlike trying to manage a build script for a Wordpress site...
