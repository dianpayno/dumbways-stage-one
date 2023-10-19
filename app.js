
const express = require("express");
const path = require("path");
const app = express();
const router = require('./routes/index.js')
const PORT = 3000;

// const { Sequelize, QueryTypes } = require("sequelize")
// const sequelize = new Sequelize(config.development)

// setup hbs as template egine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'))


// mengambil data dari form/body
 app.use(express.urlencoded({ extended: false }));

//  middleware untuk route
app.use(router);

// perantara untuk ambil file static
app.use(express.static("src/asset"));

app.listen(PORT, ()=>{
    console.log("server running on port 3000")
});










