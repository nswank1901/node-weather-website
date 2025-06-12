const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=a7b02d7e9e87701949f7b21be210f180&query=${encodeURIComponent(
    address
  )}&limit=1`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (!body || !body.data || body.data.length === 0) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};



module.exports = geocode;
