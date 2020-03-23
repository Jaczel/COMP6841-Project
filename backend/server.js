var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 8000;
var messages = [
                {text:'Hi Kat', owner:'Joe'},
                {text:'Hi Joe', owner:'Kat'}
            ];

// Body Parser Middleware. All we need to conver 'undefined' to JSON
app.use(bodyParser.json());

// Cors Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Create a new router
var api = express.Router();

// Get Route
api.get('/messages', (req, res) => {
    res.json(messages);
})

// Post Route
api.post('/message', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

// Now we're going to go through '/api/*'
app.use('/api', api);

app.listen(PORT);
