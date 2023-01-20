---
title: CI/CD & Testing
---
Testing is a massive part of modern software development. It's too easy to write bugs that can slip the net, especially considering that websites need to run on a variety of browsers and devices. I've been writing tests for years for PHP and JS. 

The tests for this site are run using Jest and Playwright and every time a change is made they check that the HTML markup generated is exactly the same as it was before the change, and that the visual output is the same too using Visual Regression Testing. 

In my day job, PHPUnit is the go-to solution for PHP testing but I also love tools that complete static analysis like PHPStan and SonarQube/SonarCloud.

If you're reading this, you probably already know what CI/CD is so let's not worry too much about defining it because it's been [done](https://www.redhat.com/en/topics/devops/what-is-ci-cd). I've used GitHub Actions, Azure DevOps, Travis and some roll-your-own scripts hosted on a private server.
