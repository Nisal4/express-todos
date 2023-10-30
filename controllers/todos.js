const Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTodo,
    create
};

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Todo.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/todos');
}

function newTodo(req, res) {
    res.render('todos/new', {title: 'New Todo'});
}
	
function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos'
    });
}

function show(req, res) {
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details' 
    });
}