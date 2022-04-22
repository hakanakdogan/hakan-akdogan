const express = require("express");
const weather = require("./utils/weather");
const geocode = require("./utils/geocode");
const html = require("../../web-server/public/index.html");
const app = express();


app.use(express.static("/homepage",'public'));



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

app.get("/test_html", (req, res) => {
    res.send(html);
})

app.listen(port, () => {
    console.log(`${port} portunda çalıştı`)
});