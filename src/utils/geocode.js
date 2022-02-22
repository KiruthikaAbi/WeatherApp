const request = require('request');

const geocode = function (city,cb) {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoia2lydXRoaWthdGFtaWxhcnV2aSIsImEiOiJja3pyNXgyMHQwZDRmMnVwYWNnOW54OTJtIn0.mcpY_pqAKTs14hMUrhGVuQ`, function (error, response, body) {
        console.error('error:', error);

        var result = JSON.parse(body);
        var data = {
            latitude: result.features[0].center[1],
            longitude: result.features[0].center[0]
        }

        cb(data);
    });
}

module.exports = geocode;