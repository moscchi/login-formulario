const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('../routes/index');
const session = require('express-session');

const server = express();
server.use(cors("*"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../views'));
server.use(routes); 
server.use(express.static(path.join(__dirname,'../public'))); 

server.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}));



module.exports = server;
