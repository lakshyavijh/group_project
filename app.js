const { config } = require('dotenv/types');
const express=require('express');
const mongoose= require('mongoose');
require('dotenv').config({path: '.env'})

const app=express();

app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port
app.listen(3000)
// const PORT=process.env.PORT||3000;
// app.listen(PORT,()=>{
//     console.log(`app is live at ${PORT}`);
// });
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
{ useUnifiedTopology: true },
()=> console.log('connnected to DB'));
