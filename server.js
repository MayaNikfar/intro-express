// Require modules
const express = require('express');
const path = require('path');
// Create the Express app
const app = express();
const todoDb = require('./data/todo-db');  

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
  
  
// Mount routes

app.get('/', function(req, res, next) {
  res.send('<h1>Hello Express</h1>');
});

// tell server about our routes and the functions
app.get('/home', function(req, res) {
    res.render('home'); //views/ is assumed
  });

  
// add databast route
app.get('/todos', function(req, res) {
  const todos = todoDb.getAll();
  res.render('todos/index', { todos});
});

// attach the server to a port
// Tell the app to listen on port 3456
app.listen(3456, function() {
  console.log('Listening on port 3456');
});