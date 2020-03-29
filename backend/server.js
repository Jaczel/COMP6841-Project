var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = 8000;
var jwt = require('jsonwebtoken');
var SECRET = '123';
var messages = [
                {text:'Hi Kat', owner:'Joe'},
                {text:'Hi Joe', owner:'Kat'}
            ];

// Delete the users array when moving to Database storage
var users = [
    // Demo user
    {firstName: 'Joe', email: 'joe@joe.com', password: 'joe', id: 0}
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
var auth = express.Router();

// Get Route
api.get('/messages', (req, res) => {
    res.json(messages);
})


// Expecting a user parameter
api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);

    res.json(result);
})


// Post Route
api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
})

auth.post('/login', (req, res) => {
    // Change to database at some point
    var user = users.find(user => user.email == req.body.email);

    if(!user){
        sendAuthError(res);
    }

    if (user.password == req.body.password){
        sendToken(user, res);
    } else {
        sendAuthError(res);
    }
})

auth.post('/register', (req,res)=>{
    // When ready, move this to database 
    // system with encryption
    var index = users.push(req.body) - 1;
    var user = users[index];
    user.id = index;
    // Generate a token

    sendToken(user, res);
})

function sendToken(user, res) {
    var token_sign = jwt.sign(user.id, SECRET);
    //res.json(token);
    res.json({firstName: user.firstName, 
              token: token_sign});
}

function sendAuthError(res) {
    return res.json({success: false, message: 'email or password incorrect'});
}

// Now we're going to go through '/api/*'
app.use('/api', api);

// Auth router
app.use('/auth', auth);

app.listen(PORT);
