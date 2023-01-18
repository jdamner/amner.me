---
layout: post
title: How I publish this site (part 2)
date: 2023-01-18T17:16:27.796Z
thumbnail: /assets/how-i-publish-this-site-2.webp
slug: how-i-publish-this-site-2
---
I wrote [before](/how-i-publish-this-site) about using Jekyll (then Gatsby) and Netlifly (then Firebase) to publish this site. 

I think you can spot a trend that I'm always changing things up. That's mostly for the want to learn new skills and try new technologies. So time for a new post about how I publish this site.

## Static Site Generation
I love static site generators for my site - it's such a simple site that I don't need a database or a CMS. I just need a way to write some markdown and have it turn into a website. I'm more than capable of just writing plain HTML & CSS to make it work, but a bit of magic and structure is nice. So at the moment I'm using [Next.js](https://nextjs.org) to generate static HTML pages, but to be honest it's barely different from Gatsby I was using before. As long as you're familiar with any Javascript framework, you'll be able to pick up Next.js in no time. The next-image component is pretty cool though. Compared to Gatsby it does 99% of what you need out of the box where Gatsby would've needed a gazillion plugins to do the same thing.

I also decided to change to using Typescript over Javascript for this redesign/update and I think it's great. I use strictly-typed PHP at the day job mostly, so it's nice to have JS in strict-type too. Much like PHP, it's also nice to have the option to drop-out if really really necessary, but I haven't needed to. The only thing I will say is a pain is if you're working with a bunch of dependencies/packages you can end up needing to import tons of types. Fortunately this site isn't that complex, and there's very few dependencies.

## Styling
I pretty much have always used bootstrap and SCSS to style my websites. Bootstrap since it's early days has been a great way to get a responsive site without writing _tons_ of CSS. I've used SCSS for a long time too, it's a great way to write CSS and keep it organised.

Anyways, for the latest in many many redesigns (I'm not really a designer, but I'm pro at turning a design into a working website!) I've used [Tailwind CSS](https://tailwindcss.com) this time, which is a similar framework to bootstrap, except it seems very heavily aimed at using classes to style elements over using SCSS. I wasn't sure at first, I think it's a bit ugly to have an element with 15 classes on it, but I have grown to like it. There's more features than bootstrap provides, and it seems a little bit more opinionated on style. Which is probably good for someone like me who isn't a designer at heart. 

## Hosting
I've stuck with Firebase for hosting. I'd probably only move away if it turned out that Google are more evil than I thought. For me it's free to host this static site and the infrastructrure is solid. And I've got it all tied to my pipelines so changing would be a pain. Something would have to be really wrong with Firebase for me to move away right now. 

My code lives on github too, so maybe one day I'd consider moving to GitHub pages... maybe. 

## Analytics
I've never really mentioned analytics before, but I use [getinsights.io](https://getinsights.io) for analytics. It's a service that promises a privacy-foucsed approach to analytics. To be honest, it doesn't provide me with much data, but I also don't send it much data. I pretty much send page-views and link-clicks to keep an eye on traffic. I exceed the free tier sometimes which is a pain, but moving to something less privacy focussed wouldn't be a sacrifice I'm willing to make. Privacy is important, and Google Analytics would capture far more than I need or want. If this was a business site maybe I'd consider it, but for a personal site I'm happy to pay in features for a bit more privacy.

## Testing
Automated testing is awesome. I need to write a full-on blog post about it. I use PHPUnit as my day-to-day testing tool but that's not really useful for this site since it's all Javascript (and a sprinkling of markdown). I was using Jest before this redesign/re-write, but I've moved to [Playwright](https://playwright.dev) for all my testing. Initially I was using Jest to check the generated markup didn't change and Playwright for screenshots to do visual regression testing. But then I realised I could just use Playwright for everything. It's a great tool, and I'm really happy with it. Also means I can run the tests on CI and auto-approve any changes that don't cause the tests to fail.

## CI/CD
As I've mentioned, the code for this is all on [Github](https://github.com/jdamner/amner.me). I use Github Actions to run the tests and deploy the site. The tests run automatically on all PRs and deploy the branches automatically. One of the excellent features of Firebase is that I can deploy a preview of the site for each PR. So I can see what the site will look like before I merge it. Dependabot is my best friend, and I've just enabled [CodeQL](https://codeql.github.com) to scan for security issues. In my day job we use Travis for CI and it's OK, but to be honest I prefer GitHub actions for code hosted on GitHub. Also used Azure Pipelines in the past, and they're fairly decent. Very much all the same, a config file in YAML and you're off.

## Conclusion
I'm pretty happy with how this site is working right now. I've got a nice workflow that I'm happy with. I'm not sure what I'll change next, but I'm sure I'll find something. At the moment though, things are as simple as writing up a markdown file and pushing it up. Not that that'll make me write more posts...