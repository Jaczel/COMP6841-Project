var express = require('express');
var app = express();
var PORT = 8000;
messages = [
            {text:'Hi Kat', owner:'Joe'},
            {text:'Hi Joe', owner:'Kat'}
        ];

app.get('/messages', (req, res) => {
        res.send(messages);
})

app.listen(PORT);
