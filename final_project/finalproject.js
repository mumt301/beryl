// function to get the weather forecast from the weather API
function getCityForecast(city) {
  let wBaseURL = "https://api.weatherapi.com/v1/";
  let APIkey = "f2a21ad9a0524e2d90b35745210412";
  let days = "1";
  let aqi = "no";
  let alerts = "no";
  let wQueryURL = `${wBaseURL}forecast.json?key=${APIkey}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`;
  console.log(wQueryURL);

  /*
  Using fetch function to fetch the JSON data from the weather API, and printing it to the console.
  The function takes the path to the JSON file as an argument, and returns a promise that resolves with a response object.
  The response object does not contain the actual JSON response body, but is a representation of of the HTTP response.
  So, the .json method is used to extract with JSON response body from the response object.
  This returns a second promise that resolves with the result of parsing the response body text as JSON.
  */

  return (
    fetch(wQueryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (responseObj) {
        // responseObj = the JSON data from the weather API

        // selecting the desired JSON data & storing it in variables

        var locationName = responseObj["location"]["name"];

        var locationCountry = responseObj["location"]["country"];

        var forecastCondition =
          responseObj["forecast"]["forecastday"][0]["day"]["condition"]["text"];

        // calling getGeneralWeather function to get our pre-determined categorized weather condition
        var generalWeatherForecast = getGeneralWeather(forecastCondition);

        // storing/grouping data in an object
        var resp = {
          locationName: locationName,
          locationCountry: locationCountry,
          forecastCondition: forecastCondition,
          generalWeatherForecast: generalWeatherForecast,
        };
        console.log(resp);
        return resp;
      })

      // catch errors
      .catch(function (error) {
        console.log(error);
      })
  );
}

// function to map one of the 49 specific weather conditions to one of 6 general weather conditions
function getGeneralWeather(specificWeatherCondition) {
  let weatherConditions = {
    sunny: ["Sunny", "Clear"],
    cloudy: ["Partly cloudy", "Cloudy", "Overcast"],
    raining: [
      "Mist",
      "Patchy rain possible",
      "Patchy sleet possible",
      "Patchy freezing drizzle possible",
      "Patchy light drizzle",
      "Light drizzle",
      "Freezing drizzle",
      "Heavy freezing drizzle",
      "Patchy light rain",
      "Light rain",
      "Moderate rain at times",
      "Moderate rain",
      "Heavy rain at times",
      "Heavy rain",
      "Light freezing rain",
      "Moderate or heavy freezing rain",
      "Light sleet",
      "Moderate or heavy sleet",
      "Light rain shower",
      "Moderate or heavy rain shower",
      "Torrential rain shower",
      "Light sleet showers",
      "Moderate or heavy sleet showers",
    ],
    snowing: [
      "Patchy snow possible",
      "Blowing snow",
      "Blizzard",
      "Patchy light snow",
      "Ice pellets",
      "Light snow showers",
      "Moderate or heavy snow showers",
      "Light showers of ice pellets",
      "Moderate or heavy showers of ice pellets",
      "Light snow",
      "Patchy moderate snow",
      "Moderate snow",
      "Patchy heavy snow",
      "Heavy snow",
    ],
    foggy: ["Fog", "Freezing fog"],
    thunder: [
      "Thundery outbreaks possible",
      "Patchy light rain with thunder",
      "Moderate or heavy rain with thunder",
      "Patchy light snow with thunder",
      "Moderate or heavy snow with thunder",
    ],
  };
  for (var key in weatherConditions) {
    var value = weatherConditions[key];
    if (value.includes(specificWeatherCondition)) {
      return key;
    }
  }
}

// function to get album information from the last.fm API
function getAlbumInfo(album, artist, albumIndex) {
  let mBaseURL = "https://ws.audioscrobbler.com/2.0/";
  let APIkey = "ba887b00dd234cdfbf885496f213a175";
  let method = "album.getinfo";
  let format = "json";

  var albumEncoded = encodeURIComponent(album);
  var artistEncoded = encodeURIComponent(artist);

  let mQueryURL = `${mBaseURL}?method=${method}&album=${albumEncoded}&artist=${artistEncoded}&api_key=${APIkey}&format=${format}`;
  console.log("getAlbumInfo url:");
  console.log(mQueryURL);

  return fetch(mQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseObj) {
      //console.log("responseObj:");
      //console.log(responseObj);

      var albumURL = responseObj["album"]["url"];
      var resp = { albumURL: albumURL, albumIndex: albumIndex };
      return resp;
    })
    .catch((error) => {
      console.error(error);
    });
}

// function to get the album suggestions from the last.fm API
function getAlbumSuggestions(tag) {
  let mBaseURL = "https://ws.audioscrobbler.com/2.0/";
  let APIkey = "ba887b00dd234cdfbf885496f213a175";
  let method = "tag.getTopAlbums";
  let format = "json";
  let mQueryURL = `${mBaseURL}?method=${method}&tag=${tag}&api_key=${APIkey}&format=${format}`;
  console.log(mQueryURL);

  return (
    fetch(mQueryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (responseObj) {
        // responseObj = the JSON data from the weather API

        console.log("responseObj:");
        console.log(responseObj);

        var figures = document.getElementsByTagName("figure");

        var albums = responseObj["albums"]["album"];
        console.log(albums);

        // store a list of the unique artists
        var selectedArtists = [];

        // store a list of unique artists objects with their album MBID, album name, and artist name
        var selectedArtistsObj = [];

        var albumArrayIndex = 0;
        var numberOfPopulatedAlbums = 0;

        while (numberOfPopulatedAlbums < 15) {
          var album = albums[albumArrayIndex];

          var albumArtist = album["artist"]["name"];
          console.log(albumArtist);

          // code to select for albums from different artists
          if (!selectedArtists.includes(albumArtist)) {
            selectedArtists.push(albumArtist);

            var albumName = album["name"];
            console.log(albumName);

            var artistMBID = album["artist"]["mbid"];
            console.log(artistMBID);

            var albumImageURL = album["image"][3]["#text"];
            console.log(albumImageURL);

            selectedArtistsObj.push({
              albumName: albumName,
              albumArtist: albumArtist,
            });

            var figure = figures[numberOfPopulatedAlbums];

            var a = figure.querySelector("a");
            var img = figure.querySelector("img");
            var figcaption = figure.querySelector("figcaption");

            img.src = albumImageURL;
            //figcaption.innerText = `${albumName} - ${albumArtist}`;

            numberOfPopulatedAlbums++;
          }

          albumArrayIndex++;
        }
        return selectedArtistsObj;
      })

      // catch errors
      .catch(function (error) {
        console.log(error);
      })
  );
}

// this function is called once the HTML file loads (window.onload = main)
function main() {
  document
    .getElementById("settings") // select the HTML form element
    .addEventListener("submit", function (e) {
      // the following code is run when the submit button is pressed

      console.warn("--------- submit button pressed -----------");

      //prevent the normal submission of the form
      e.preventDefault();

      var city = document.getElementById("city").value;
      console.log(city);

      var sunny = document.getElementById("sun").value;
      console.log(sunny);

      var cloudy = document.getElementById("cloudy").value;
      console.log(cloudy);

      var foggy = document.getElementById("fog").value;
      console.log(foggy);

      var raining = document.getElementById("rain").value;
      console.log(raining);

      var thunder = document.getElementById("thunder").value;
      console.log(thunder);

      var snowing = document.getElementById("snow").value;
      console.log(snowing);

      // store the form data in an object, called formData
      var formData = {
        city: city,
        sunny: sunny,
        cloudy: cloudy,
        foggy: foggy,
        raining: raining,
        thunder: thunder,
        snowing: snowing,
      };

      // define an empty array to store the empty inputs
      var missingInputs = [];

      for (var key in formData) {
        var value = formData[key];
        if (value == "") {
          missingInputs.push(key);
        }
      }
      console.warn("missingInputs:");
      console.warn(missingInputs);

      if (missingInputs.length > 0) {
        var missingInputsMessage = `Please write something in the following inputs:\n${missingInputs.join(
          "\n"
        )}`;
        alert(missingInputsMessage);
      } else {
        // call the getCityForecast function, and provide the inputted city value from the form
        getCityForecast(city)
          // call .then method because fetch returns a promise
          .then(function (data) {
            console.log("data:");
            console.log(data);
            var generalWeatherForecast = data["generalWeatherForecast"];
            console.log("generalWeatherForecast:");
            console.log(generalWeatherForecast);

            // Input sentence about the weather
            var currentWeather = document.getElementById("currentWeather");

            // Write a sentence about the forecast in the inputted city
            currentWeather.innerText = `The forecast in ${data["locationName"]}, ${data["locationCountry"]} is ${data["generalWeatherForecast"]}.`;

            // get the tag associated with the general weather condition
            var selectedTag = formData[generalWeatherForecast];
            console.log("selectedTag:");
            console.log(selectedTag);

            // with the selected tag, fetch the last.fm api
            getAlbumSuggestions(selectedTag).then(function (respObj) {
              console.log("respObj:");
              console.log(respObj);

              // loop over the album info so we can call the getAlbumInfo function for each item in the list to obtain the album URL
              for (var i = 0; i < respObj.length; i++) {
                var album = respObj[i];
                console.log("album:");
                console.log(album);

                var albumName = album["albumName"];
                // console.log("albumName:");
                // console.log(albumName);
                var albumArtist = album["albumArtist"];

                // call the getAlbumInfo function to obtain the URL of the album
                getAlbumInfo(albumName, albumArtist, i).then(function (
                  albumInfo
                ) {
                  console.warn("albumInfo:");
                  console.log(albumInfo);
                  var albumURL = albumInfo["albumURL"];
                  var albumIndex = albumInfo["albumIndex"];
                  //console.log(albumURL);

                  var albums = document.getElementsByClassName("album");
                  console.warn("albums:");
                  console.log(albums);

                  var aTag = albums[albumIndex];

                  console.warn("aTag1 :");
                  console.log(aTag);

                  aTag.href = albumURL;

                  console.warn("aTag2 :");
                  console.log(aTag);
                });
              }
            });
          });
      }
    });
}

window.onload = main;
