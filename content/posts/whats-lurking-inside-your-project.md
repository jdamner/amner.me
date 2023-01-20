---
layout: post
title: What's lurking inside your project
date: 2019-10-09T15:26:21.788Z
thumbnail: /assets/whats-lurking-inside-your-project.jpg
slug: whats-lurking-inside-your-project
---
A little while ago I read [an article on medium](https://medium.com/s/silicon-satire/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558) about a developer who decided to have a look inside his `node_modules` folder. 

If you’re unfamiliar, node modules is where [Node Package Manager NPM](https://npmjs.com) stores all the packages you’ve downloaded and installed for your javascript projects. Very common answer to questions on Stack Overflow is install package ‘x’ and be done with it. 

The article details in full the pitfalls of blindly installing packages to solve mundane problems, highlighting such absurdity as downloading an entire encyclopaedia to load the definition of a single word, or a module that makes your account favourite a tweet launching a sandwich. If some software I installed favourited a tweet without my knowledge, I would describe that as malware.

So there’s highlighting what’s wrong with installing packages, but am I not recommending hand coding everything from scratch. Take my argument to the extreme and every project should be written in full in assembly code, so let’s take a more realistic approach. 

Installing a number of packages is a great way to save yourself developing a whole bespoke system to solve a complicated problem. Installing an entire encyclopaedia to define a single word is madness. The more complex the problem, the more appealing a package that solves that problem becomes, and that’s great, but sometimes a complex problem can be worthwhile investing the time to solve yourself. Rolling your own solution means that you know exactly what’s going on, any bugs are yours to fix and there’s no more unnecessary code than what you put in there. 

Also thinking of the contents of the package or framework you’re using will help form that decision. Anyone viewing source of this page will see part of [Bootstrap](https://getbootstrap.com) is powering this site. I use Bootstrap for its CSS, and actually compile bootstrap into my own CSS file both to customise it and  select just the required modules and combine it to one file for easier serving. No extra JS or jQuery beyond what I’ve written myself, but I’m open to it if the trade off is worth it. This is a simple portfolio site, but for more complex projects, I’ll use a pre-built library if it helps save weeks of work. 
