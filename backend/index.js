var app = require('express')(); 
var session = require('express-session');
var bodyParser = require('body-parser');
var todos = require('./todosList.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret:'mysecrettoken'}));

app.use(function( req, res, next){
    if(!req.session.todosList){
        req.session.todosList = 
        { todos : [] };
    }
    next();
});

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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

app.post('/ajouter',function(req,res){
    todos.ajouterTodos(req,res);
}); 

app.get('/supprimer/:id', function(req, res){
        todos.supprimerTodos(req,res);
});

app.listen(3000, function() {
    console.log('Listening *: 3000');
});
