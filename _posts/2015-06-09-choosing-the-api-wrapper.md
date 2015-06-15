---
layout:     post
title:      M42N 01 - Choosing the API Wrapper
subtitle:   First of all we need to choose how to receive data in JavaScript.
date:       2015-06-09 12:00:00
author:     Norbert Berényi
---

I have found a very great JavaScript wrapper library for the TMDB API. It is [themoviedb-javascript-library](https://github.com/cavestri/themoviedb-javascript-library/) by [Franco Cavestri](https://github.com/cavestri).

After an hour I managed to make it work. (Again, I have never really worked with JavaScript.) I set up the two callback functions, `succesCB` and `errorCB`, they simply get the response as the parameter. If the response header contains the OK status witch is 200 the called method is succesCB, if not OK the called method is errorCB.

{% highlight javascript %}
// If the response returns with a succes this method is called.
function successCB(data) {

  // Logging to the console
  console.log("Success callback: " + data);

  // Parsing the received data
  var movie = JSON.parse(data);

  // Write out the data to the document
  document.getElementById("title").innerHTML = movie.original_title;
  document.getElementById("overview").innerHTML = movie.overview;
};

// If the response returns with an error this method is called.
function errorCB(data) {
    console.log("Error callback: " + data);
};

// Making the request. (Getting a movie by id.)
theMovieDb.movies.getById({"id":68726 }, successCB, errorCB);
{% endhighlight %}

This is the output:
>**Pacific Rim**

>When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroes—a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)—who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse.

I'm not 100% sure if I should output the data like this, but I found myself having a hard time understanding the variable scope, also opening a `<script>` tag every time I'm outputting something... any good ideas are welcomed!

This is the first step I guess, I am also [created a repository](https://github.com/norbert-berenyi/movie42night-js) for the site, so you can see the actual code there. I am new to GitHub, never had a repository, so I don't even know how to handle a pull request, keep that in mind. :)

The complete PHP written [Movie42Night](http://movie42night.com/) is still up and running so make sure you give it a visit! Until next time!
