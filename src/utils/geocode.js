const axios = require("axios");

const geoCode = async (address)=>{
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWtkb2dhbmhha2FubiIsImEiOiJja2ViYXBocDQwNnltMnJueHM4OGp1cHJtIn0.DLtb3H0TtNiL8VpDK2xVjw`
const response = await axios.get(url);
const long = response.data.features[0].center[0]
const lat = response.data.features[0].center[1]

return {
    long,
    lat
}

}

module.exports = geoCode;