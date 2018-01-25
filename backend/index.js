var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');
var todos = require('./todosList.js');
var cors = require('cors');

var corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret:'mysecrettoken',
  resave: false,
  saveUnitialized: true
}));

app.use(function( req, res, next){
    if(!req.session.todosList){
        req.session.todosList =
        { todos : [] };
    }
    next();
});

app.get('/afficher/:offset/:size', function(req,res){
    var todosList = todos.pagination(req,res);
    res.send(todosList);
});

app.get('/', function(req,res){
    res.send(req.session.todosList);
});

app.get('/getTodoById/:id', function(req,res) {
  var id = req.params.id;
  res.send(req.session.todosList.todos[id]);
})

app.post('/ajouter',function(req,res){
    todos.ajouterTodos(req,res);
    res.send('good!');
});

app.delete('/supprimer/:id', function(req, res){
        todos.supprimerTodos(req,res);
});

app.listen(3000, function() {
    console.log('Listening *: 3000');
});
