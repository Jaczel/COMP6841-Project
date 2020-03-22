var express = require('express');
var app = express();
var PORT = 8000;
var messages = [
                {text:'Hi Kat', owner:'Joe'},
                {text:'Hi Joe', owner:'Kat'}
            ];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/messages', (req, res) => {
        res.send(messages);
})

app.listen(PORT);
