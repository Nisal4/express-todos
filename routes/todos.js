var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths start with /todos

// Get /todo
router.get('/', todosCtrl.index);

// Get /todos/new
router.get('/new', todosCtrl.new);

// Get /todos/:id
router.get('/:id', todosCtrl.show);

// POST /todos
router.post('/', todosCtrl.create);

// Delete /todos
router.delete('/:id', todosCtrl.delete);


module.exports = router;
