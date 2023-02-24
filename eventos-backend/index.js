const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false');

app.listen(3001, ()=>{
    console.log('Server connected..');
})