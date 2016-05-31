var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d894acc28f662e400190b627c986910c&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      })
      .catch(function (err) {
        throw new Error(err.data.message);
      });
  }
};
