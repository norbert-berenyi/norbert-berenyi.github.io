---
layout:     post
title:      Rewrite Movie42Night from scratch
subtitle:   I'm starting a series about rebuilding movie42night.com
date:       2015-06-08 14:30:00
author:     Norbert Berényi
---

I had very little time to do anything with [movie42night](http://movie42night.com/). Since I'm not the best JavaScript programmer, I'm planning to rewrite the website from scratch, using only `HTML5`, `CSS3` and `JavaScript`. It is a good way to practice, currently I'm in the phase looking for framework... :) So far [Angular.js](https://angularjs.org/) seems the best idea.

I'm also want to learn more about the whole Git system, so I will upload the site to GitHub. Feel free to help me if I do something completely wrong.

#### I will give you a introduction to how the site works now:

I'm using TMDB API to get the movie data. I have a easy method to generate a random movie Id, this function receives the Id and makes a request:
{% highlight php %}
public function getMovieById($movieID){
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL,
    self::API_URL . "movie/" . $movieID . "?api_key=" . $this->getApiKey() . "&language=" . $this->getLang());
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
	curl_setopt($ch, CURLOPT_HEADER, FALSE);

	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
	  "Accept: application/json"
	));

	$response = curl_exec($ch);
	curl_close($ch);

	$response = json_decode($response, true);
	return $response;
}
{% endhighlight %}

This is how the response look like:
{% highlight json %}
"adult": false,
 "backdrop_path": "/hNFMawyNDWZKKHU4GYCBz1krsRM.jpg",
 "belongs_to_collection": null,
 "budget": 63000000,
 "genres": [
   {
     "id": 18,
     "name": "Drama"
   }
 ],
 "homepage": "",
 "id": 550,
 "imdb_id": "tt0137523",
 "original_language": "en",
 "original_title": "Fight Club",
 "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
 "popularity": 2.50307202280779,
 "poster_path": "/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg",
 "production_companies": [
   {
     "name": "20th Century Fox",
     "id": 25
   },
   {
     "name": "Fox 2000 Pictures",
     "id": 711
   },
   {
     "name": "Regency Enterprises",
     "id": 508
   }
 ],
 "production_countries": [
   {
     "iso_3166_1": "DE",
     "name": "Germany"
   },
   {
     "iso_3166_1": "US",
     "name": "United States of America"
   }
 ],
 "release_date": "1999-10-14",
 "revenue": 100853753,
 "runtime": 139,
 "spoken_languages": [
   {
     "iso_639_1": "en",
     "name": "English"
   }
 ],
 "status": "Released",
 "tagline": "How much can you know about yourself if you've never been in a fight?",
 "title": "Fight Club",
 "video": false,
 "vote_average": 7.7,
 "vote_count": 3185
}
{% endhighlight %}

So basicly this is it. I receive every information, and put it together in a single HTML file. Since there is no user handling, nor database connection, I think I can get rid of PHP and use only JavaScript.

If you have any suggestion, please leave a comment below!
