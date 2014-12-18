<!-- ::Tools -->
# Tools
Over time I built (and am still building) a few handy tools to make things easier for others and me.
Here is a collection of the things that people find quite useful:

## Collection of web components
[components.geekonaut.de](http://component.geekonaut.de) is a collection of web components of all kinds.

## Cloud9Hub
[Cloud9](http://c9.io) is a very useful cloud-based IDE running in your browser and [it's open source, too](https://github.com/ajaxorg/cloud9).

Unfortunately not everybody can or wants to have their source code on a third party server and the open source version of Cloud9 lacks multi-workspace support.

[Cloud9Hub](https://github.com/avgp/cloud9hub) gives you the possibility to run your own Cloud9 instances on your own infrastructure while providing an authentication and authorization mechanism and support for multiple workspaces.


## grunt-phonegap-build
A [Grunt](http://www.gruntjs.com) task to help you build a [Cordova](http://www.cordova.io) app on [build.phonegap.com](http://build.phonegap.com).

It allows to build your app by either using a public Github repository or by uploading a zip file easily from within your normal build steps.

## Parilis
[Parilis](https://github.com/avgp/parilis) is a JSON-RPC API testing tool written in Scala.

## Eternity
If you are a fan of Heroku-style deployment (like [Dokku](https://github.com/progrium/dokku) provides) and want to easily deploy Node.js applications, you could give [eternity](https://github.com/avgp/eternity) a try.

It uses Dokkus git-receive module and ties it to forever to deploy and manage multiple node.js applications on a single server.


## SuSi<sup>2</sup>
When you want to create a static website by using a global HTML layout and Markdown, SuSi<sup>2</sup> is for you.

I found all the available static site generators rather overpowered and complex - lots of dependencies and some are very tightly integrated with a particular build tool, like Gulp or Grunt.  

SuSi<sup>2</sup> (SuperSimpleSites) has none of that. It has a single dependency, [Marked](), to parse Markdown files and that's it.

This website is created by Susi, by the way.


## Geckoard Data Pushers
Set of script to push data from various sources to [Geckoard](http://www.geckoboard.com).

[Github repository](https://github.com/martin-naumann/geckoboard-data-pushers)


## All your licenses are belong to us
Small ruby script to figure out all (or "as many as possible") licenses of your projects' dependencies.

Works with Ruby gems and Node modules.

[Github repository](https://github.com/martin-naumann/all-your-licenses)


## Yeah Metrics
Push your code quality metrics to [keen.io](http://www.keen.io) using [the reporters](https://github.com/avgp/yeah-metrics-reporters) and visualize them as a simple dashboard.

[Github repository](https://github.com/avgp/yeah-metrics)


## flipAhead.js
Javascript library that allows page navigation by two finger swipe, 
similar and compatible with [Internet Explorer flip ahead browsing](http://msdn.microsoft.com/en-us/library/ie/jj883726.aspx).

[Github repository](https://github.com/avgp/flipAhead.js)

## Selenize (discontinued)
Web app for importing Git repositories and running Selenium tests via phpUnit on a dedicated server.
Uses lxc for isolation.

[Github repository](https://github.com/avgp/selenize)

## Vodca (discontinued)
VLC-based personal Video-on-demand solution.

[Github repository](https://github.com/avgp/vodca)
