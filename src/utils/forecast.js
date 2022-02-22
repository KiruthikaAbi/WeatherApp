const request = require('request');

const forecast = function (data, cb) {
    request(`http://api.weatherstack.com/current?access_key=a21b5ee9d4faabc8d6a91ca74ef9a837&query=${data.latitude},${data.longitude}`, function (error, response, body) {
        if (error) {
            cb (error, undefined);
            return;
        }

        var result = JSON.parse(body);
        console.log("Result", result.current.weather_descriptions[0]);
        cb(undefined, result.current.weather_descriptions[0]);
    });
}

module.exports = forecast;