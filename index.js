/**
 * @fileoverview Initialize and start the application using Express JS
 * @author Darshit Gangar
 */

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

// load configurations
const config = require('./server/config/config');

// load MyController
const MyController = require('./server/controller/myController');

const myController = new MyController();

const apiPort = config.port;
const app = express();
const upload = multer();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, text/plain and application/*
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());

// parse multipart/form-data
app.use(upload.none());

// route: root
app.get('/', (req, res) => res.send('Hello, World!'));

app.post('/', (req, res) => res.send(`Hello, ${req.body.username}!`));

// route: /value
app.get('/value', (req, res) => myController.getValue(req, res));

app.post('/value', (req, res) => myController.setValue(req, res));

// Start the web server for listening to api calls
app.listen(apiPort, () => {
    console.log(`listening on port ${apiPort}!`);
});
