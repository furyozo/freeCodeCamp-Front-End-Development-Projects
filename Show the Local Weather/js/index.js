var temperature = 0;
var tState = 'c';

// getting weather data from open weather API
$(document).ready(function() {
  var getIP = 'http://ip-api.com/json/';
  var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
  $.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
      APPID: 'a973f2f0213baf5a5f38064d2b3d2238'
    }).done(function(weather) {
      temperature;
      temperature = Math.round(weather.main.temp);
      document.getElementById('weather-city').innerHTML = weather.name + ", " + weather.sys.country;
      document.getElementById('weather-temperature').innerHTML = temperature + " °C";
      document.getElementById('weather-state').innerHTML = weather.weather[0].description;
      var icon = weather.weather[0].icon;
      document.getElementById('weather-icon').innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\"/>";
    })
  })

  $('#temperature-switch').on('click', function() {
    temperature,
    tState;
    if (tState === 'c') {
      temperature = Math.round(temperature * 9 / 5 + 32);
      document.getElementById('weather-temperature').innerHTML = temperature + " °F";
      tState = 'f';
    } else {
      temperature = Math.round((temperature - 32) * 5 / 9);
      document.getElementById('weather-temperature').innerHTML = temperature + " °C";
      tState = 'c';
    }
  });

});
