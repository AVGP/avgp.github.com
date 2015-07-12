<!-- ::Projects -->

# Projects

This page lists a bunch of projects I've been doing or that I am still involved with:
* [Apps](#apps)
* [Tools](#tools)

# Apps

Some of the apps I built:

## h2g2three

A WebGL livecoding environment using Three.js.
[Try it out](http://avgp.github.io/h2g2three) or [check it out](https://github.com/avgp/h2g2three) on Github.

## SpotWeather

Local weather info with beautiful pictures from your location (matching the weather).

Using the [Flickr](http://www.flickr.com) and [OpenWeatherMap](http://openweathermap.org) APIs bundled as a beautiful fullscreen web app this
app has a few hundred downloads in the Firefox Marketplace.

[Give it a try](http://avgp.github.io/spotweather)
[Github repository](http://github.com/avgp/spotweather)
[Firefox Marketplace](https://marketplace.firefox.com/app/spotweather)

## TakeMeTo

Swiss public transport - quick &amp; easy.
Using [public transport data from OpenData.ch](http://transport.opendata.ch/) it allows to quickly find stations nearby or get connections starting from a nearby station.
In addition to the normal "from" / "to" connection search it also features connection and station bookmarks, so connections can be looked up offline.

[Github repository](https://github.com/avgp)
[Try the web repository](https://takemeto.5apps.com)
[Android version in the Play Store](https://play.google.com/store/apps/details?id=de.geekonaut.takemeto)
[Firefox Marketplace](https://marketplace.firefox.com/app/takemeto?src=search)

## Pollenkarte

Pollenkarte Zurich is an open data mobile web application, that uses available data to help people with pollen allergy in Zurich avoid areas with high risk of an allergic reaction.
Most of the functionality (except zooming on the map) is available offline as well.

[Github repository](https://github.com/avgp/kein-stress-mit-pollen)
[Try the web version](http://avgp.github.io/kein-stress-mit-pollen)
[Get the Android version from Play Store](https://play.google.com/store/apps/details?id=de.geekonaut.pollenkarte)

## FeedBeat

FeedBeat is a feed reader application for mobile devices - available as web app or Android app.
It shows your feeds, the latest articles and allows to filter articles by feed.

[Github repository](https://github.com/avgp/Feedbeat)
[See it in action](http://avgp.github.io/FeedBeat)
[Get the Android version from Play Store](https://play.google.com/store/apps/details?id=de.geekonaut.feedbeat)

## Zen Pad

Zen Pad is a simple code editor build with HTML 5, CSS and Javascript.
It runs as a chrome app as of now.

[Github repository](https://github.com/AVGP/zen-pad)
[Chrome Webstore](https://chrome.google.com/webstore/detail/zen-pad/gmlhlgiakpebmhfjhplgacpbacebghbd?hl=en)

## Zueri2Go

Zueri2Go is a mobile web app that helps you find interesting spots around you (Zurich only).
It shows you nearby playgrounds, vantage points, public restrooms, cafes and restaurants.

[Github repository](https://github.com/avgp/zueri2go)
[See it in action](http://avgp.github.io/Zueri2Go)

## Montagsmaler

Montagsmaler is a HTML5 clone of games like Draw Something.
It uses websockets and is touchscreen compatible.

[Github repository](https://github.com/avgp/Montagsmaler)

# Tools
Over time I built (and am still building) a few handy tools to make things easier for others and me.
Here is a collection of the things that people find quite useful:

## Collection of web components
[components.geekonaut.de](http://components.geekonaut.de) is a collection of web components of all kinds.

## SuSi<sup>2</sup>
When you want to create a static website by using a global HTML layout and Markdown, SuSi<sup>2</sup> is for you.

I found all the available static site generators rather overpowered and complex - lots of dependencies and some are very tightly integrated with a particular build tool, like Gulp or Grunt.

SuSi<sup>2</sup> (SuperSimpleSites) has none of that. It has a single dependency, [Marked](), to parse Markdown files and that's it.

This website is created by Susi, by the way.

## three-world
A [browserify](http://browserify.org)-ready wrapper around [Three.js](http://www.threejs.org) that minimizes the amount of boilerplate code needed to build WebGL applications.
[Github repository](https://github.com/avgp/three-world) [npm module](https://npmjs.org/package/three-world)

## heroku-deploy-archive

[This Heroku plugin](https://github.com/avgp/heroku-deploy-archive) allows to deploy any tarball or zip file to Heroku, as long as it contains a valid application.
You don't need git, just bundle your app as ZIP or TAR and push!

## forrest

Quickly and easily launch Docker containers and register them with etcd.
[Github](https://github.com/avgp/forrest)

## Cloud9Hub
[Cloud9](http://c9.io) is a very useful cloud-based IDE running in your browser and [it's open source, too](https://github.com/ajaxorg/cloud9).

Unfortunately not everybody can or wants to have their source code on a third party server and the open source version of Cloud9 lacks multi-workspace support.

[Cloud9Hub](https://github.com/avgp/cloud9hub) gives you the possibility to run your own Cloud9 instances on your own infrastructure while providing an authentication and authorization mechanism and support for multiple workspaces.

## baditicker-api

CORS-enabled HTTP API for the public pool water temperature OpenData data set from Zurich.
[On Github](http://github.com/avgp/baditicker-api) and [on Heroku](http://baditicker-api.herokuapp.com)

## grunt-phonegap-build
A [Grunt](http://www.gruntjs.com) task to help you build a [Cordova](http://www.cordova.io) app on [build.phonegap.com](http://build.phonegap.com).

It allows to build your app by either using a public Github repository or by uploading a zip file easily from within your normal build steps.

## Parilis
[Parilis](https://github.com/avgp/parilis) is a JSON-RPC API testing tool written in Scala.

## Eternity
If you are a fan of Heroku-style deployment (like [Dokku](https://github.com/progrium/dokku) provides) and want to easily deploy Node.js applications, you could give [eternity](https://github.com/avgp/eternity) a try.

It uses Dokkus git-receive module and ties it to forever to deploy and manage multiple node.js applications on a single server.

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

## Stackmin (discontinued)

Stackmin was a Cloud**stack** ad**min**istration tool.
It allowed you to list running VMs, start/stop/reboot them or deploy a new one.

[Github repository](https://github.com/martin-naumann/stackmin)
[Chrome Webstore](https://chrome.google.com/webstore/detail/stackmin/clmjbcbkfngncegopkcdpggpapdejcne?hl=en)

## Selenize (discontinued)
Web app for importing Git repositories and running Selenium tests via phpUnit on a dedicated server.
Uses lxc for isolation.

[Github repository](https://github.com/avgp/selenize)

## Vodca (discontinued)
VLC-based personal Video-on-demand solution.

[Github repository](https://github.com/avgp/vodca)
