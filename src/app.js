const express = require("express");
const weather = require("./utils/weather");
const geocode = require("./utils/geocode");
var path = require('path');
const newPath = __dirname.replace('\src', "");
var public = path.join(newPath, 'public');

const app = express();


const port = process.env.PORT || 3000;

app.get("/test_text", (req, res) => {
    res.send("19360859016");
})

app.get("/test_html", (req, res) => {
    res.send(`
    <html lang="en">
    <body>
        <h1> Ad: Hakan</h1>
        <h1> Soyad: Akdoğan</h1>
    </body>
    </html>
    `);

    
})

app.get("/test_json", (req, res) => {
    res.send({
        "ogrenciNo":"19360859016",
        "ogrenciAd":"Hakan",
        "ogrenciSoyad":"Akdoğan"
    });
})

app.get("/test_geocode", async (req, res)=>{
    const geoData = await geocode("bursa");
    if(geoData.error){
        res.send("API Bağlantısında Bir Hata Oluştu");
    }else{
        res.send(geoData);
    }
    
})


app.get("/test_weather", async(req, res)=>{
    const geoData = await geocode("bursa");
    if(geoData.error){
        res.send("API Bağlantısında Bir Hata Oluştu");
    }else{
        const long = geoData.long;
        const lat = geoData.lat;

        const weatherData = await weather(lat, long);
        if(weatherData.error){
            res.send("API Bağlantısında Bir Hata Oluştu");
        }else{
            res.send(weatherData);
        }
        
    }

    
    

})


app.get("/", (req, res)=>{
    res.sendFile(path.join(public, '/index.html'));
})



app.listen(port, () => {
    console.log(`${port} portunda çalıştı`)
});