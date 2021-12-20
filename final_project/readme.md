# My Final Project: Get Music Recommendations!
## _Usage_
This project completes a weather API call and a last.fm API call to suggest 15 different albums from various artists, depending on the weather forecast in a user-selected city, and user-selected genres/moods associated to 6 general weather forecasts.
The user inputs a desired city and a genre/mood that they associate with each general weather forecast: sunny, cloudy, foggy, raining, thunder, and snowing. By clicking on the "Get Recommendations" button, this makes a call to the weather API to get the current weather forecast in the inputted city (49 possible conditions), maps it to one of the 6 general weather forecast conditions, and based on the user-inputted genre/mood for that general weather forecast condition, a call is made to the last.fm API to get the top 15 albums from different artists associated with that genre/mood (using the genre/mood as a tag), and they are displayed in a matrix to the user.
## _Dependencies_
- weather API: https://www.weatherapi.com/
- last.fm API: https://www.last.fm/api
## _Supported browsers_
Tested in Chrome & Safari.
- Chrome version: 95.0.4638.69
- Safari version: 14.1.2
## _License_
No external licenses used.
