
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user"); //new addition
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());


app.get('/login',function(req,res){ 
    res.sendfile('login.html')
  })
  // app.get('/login',function(req,res){ 
  //   res.sendfile('LoginPageHTML.html')
  // })

  // app.get('/signup',function(req,res){ 
  //   res.sendfile('index.html')
  // })
  app.get('/signup',function(req,res){ 
    res.sendfile('signup.html')
  })

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
