require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const path=require('path');
const methodOverride= require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');


// db config link
const connectDB = require('./Server/config/db');

// express
const app= express();
const PORT = 5000 ||process.env.PORT;

//database connetion
connectDB();

// express middleware for parsing requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
// allows usage of http verbs such as put or delete in areas (html) client doesnt support
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    //cookie: { maxAge: new Date ( Date.now() + (3600000) ) }
  })
);

//Serve static files to express server
app.use(express.static(path.join(__dirname + '/Client')));

//Templating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//setting up || defining the  routes
app.use('/blog',require('./Server/routes/main'));
app.use('/', require('./Server/routes/main'));
app.use('/', require('./Server/routes/admin'));


app.listen(PORT, ()=>{
 console.log(`App is listening on port ${PORT}`);
});