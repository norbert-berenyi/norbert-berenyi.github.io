---
layout:     post
title:      M42N 02 - Receiving every piece of the puzzle
subtitle:   Now that I can write code in JavaScript, it is time to gather all the data we need.
date:       2016-06-11 00:30:00
author:     Norbert Berényi
---

I have been playing around both with the API wrapper and JavaScript. JavaScript is fun, the wrapper works as it should be. I have even updated the wiki, I hope correctly.

I have pulled in every data I needed, and just throw them into the `index.html`. I have no idea if I handled the callbacks correctly, take a look:

{% highlight javascript %}
function successCB(data) {

  // Logging to the console
  console.log("Success callback: " + data);

  // Parsing the received data
  var data = JSON.parse(data);

  // Checking if the received data is a movie array
  if (data.original_title){
    // Write out the data to the document
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("poster").src = "http://image.tmdb.org/t/p/w185" + data.poster_path;
    document.getElementById("overview").innerHTML = data.overview;

  // Checking if the received data is a image array
  } else if (data.backdrops) {
    var backdrops = data.backdrops;
    for (i = 0; i < 4; i++){
      // If we run out of images we use the first image (there are a lot of movies lack of content)
      if (backdrops[i]){
        document.getElementById("backdrop-bg-" + i).style.backgroundImage = "url(http://image.tmdb.org/t/p/original" + backdrops[i].file_path + ")";
      } else {
        console.log(backdrops[0].file_path);
      }
    }
  // Checking if the received data is a trailer array
  } else if(data.youtube) {
    document.getElementById("trailer").href = "https://www.youtube.com/watch?v=" + data.youtube[0].source;
  }
};

...

theMovieDb.movies.getById({"id":68726}, successCB, errorCB);
theMovieDb.movies.getImages({"id":68726}, successCB, errorCB);
theMovieDb.movies.getTrailers({"id":68726}, successCB, errorCB);
theMovieDb.movies.getCredits({"id":68726}, successCB, errorCB);
{% endhighlight %}

And the targetet HTML looks like this:

{% highlight html %}
<a id="trailer"><h2 id="title"></h2></a>
<img id="poster"/>
<p id="overview"></p>
<div id="backdrop-bg-0" style="width: 500px; height: 250px; background-size: cover"></div>
<div id="backdrop-bg-1" style="width: 500px; height: 250px; background-size: cover"></div>
<div id="backdrop-bg-2" style="width: 500px; height: 250px; background-size: cover"></div>
<div id="backdrop-bg-3" style="width: 500px; height: 250px; background-size: cover"></div>
{% endhighlight %}

The output looks like a mess:

![The actual page](/images/2015-06-11-receiveing-every-pieco-of-the-puzzle-01.jpg)

But I know everything is working, now the only thing is to put everything together, which is sounds easy, but I think I'll have a hard time doing it. You can check out the full code on [GitHub](https://github.com/norbert-berenyi/movie42night)!

I'm pretty sure I cant upload the theme I bought of themeforest to GitHub, so I think I will just go with basic bootstrap. I'll send a question to the theme creator.

If you have any idea/question please leave a comment below! See you next time!
