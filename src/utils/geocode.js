const axios = require("axios");

const geoCode = async (address)=>{

try {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWtkb2dhbmhha2FubiIsImEiOiJja2ViYXBocDQwNnltMnJueHM4OGp1cHJtIn0.DLtb3H0TtNiL8VpDK2xVjw`
    const response = await axios.get(url);
    if(response.data === null){
        return {
            error: "Something went wrong"
        }
    }else{
        const long = response.data.features[0].center[0]
        const lat = response.data.features[0].center[1]

        return {
            long,
            lat
        }
    }
} catch (error) {
    console.log("error");
}




}

module.exports = geoCode;