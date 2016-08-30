var axios = require('axios');

const API_URL = 'http://salty-caverns-63765.herokuapp.com';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${API_URL}/forecast/${encodedLocation}`;

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
