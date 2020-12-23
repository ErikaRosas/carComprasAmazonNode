const express = require('express');
const morgan = require('morgan');
const app = express();

const path    = require('path');
/*
const logger  = require('morgan');
*/


// Settings
app.set("port",5000);
//app.set('port', process.env.PORT || 5000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs'); // establecer mi motor de plantilla


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));


// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404');
});

module.exports = app;