
const express = require("express");
const path = require("path");
const app = express();
const router = require('./routes/index.js')
const PORT = 3000;
const session = require('express-session');
const flash = require('express-flash'); 
const exp = require("constants");

//middlewae untuk flash dan session
app.use(flash());
app.use(session({
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 2 //ini cookie diseeting selama 2 jam
    },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: false,
    secret: 'mypersonalweb'
  })
)

// setup hbs as template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'))

// perantara untuk ambil file static
app.use(express.static("src/asset"));
app.use(express.static("./src/uploads"));

// mengambil data dari form/body
 app.use(express.urlencoded({ extended: false }));

//  middleware untuk route
app.use(router);

app.listen(PORT, ()=>{
    console.log("server running on port 3000")
});



module.exports = app;






