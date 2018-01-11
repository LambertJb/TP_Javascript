var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');
var todos = require('./todosList.js');
var cors = require('cors');

var corsOption = {
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200
  }

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret:'mysecrettoken'}));

app.use(function( req, res, next){
    if(!req.session.todosList){
        req.session.todosList =
        { todos : [] };
    }
    next();
});

app.get('/afficher/:premier/:nbParPage', function(req,res){
    var todosList = todos.pagination(req,res);
    res.send(todosList);
});

app.get('/', function(req,res){
    console.log(req.session.todosList.todos);
    res.send(req.session.todosList);
});

app.post('/ajouter',cors(corsOption),function(req,res){
    console.log(req.body);
    req.session.todosList.todos.push(req.body);
    console.log(req.session.todosList);
});

app.get('/supprimer/:id', function(req, res){
        todos.supprimerTodos(req,res);
});

app.listen(3000, function() {
    console.log('Listening *: 3000');
});
