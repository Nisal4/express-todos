const todos = [
    {id: 125223, todo: 'Feed Dogs', done: true},
    {id: 127904, todo: 'Learn Express', done: false},
    {id: 139608, todo: 'Buy Milk', done: false}
];
	
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  // All properties attached to req.params are strings
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = todos.findIndex(todo => todo.id === id);
  todos.splice(idx, 1);
}

function create(todo) {
  // Add the id
  todo.id = Date.now() % 1000000;
  // New todos wont be done
  todo.done = false;
  todos.push(todo);
};

function getOne(id) {
  // Url params are strings -> convert to number
  id = parseInt(id);
  // The Array.prototype.find iterator method is ideal for finding objects within an array
  return todos.find(todo => todo.id === id);
}

function getAll() {
  return todos;
}