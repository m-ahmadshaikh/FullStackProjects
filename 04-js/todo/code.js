// const e = require('cors');

console.log('Todo');
// Commands
// new -- Add a todo
// list -- List all todos
//delete --  remove specific todo
//quit -- quit app
commands = ['new', 'list', 'delete', 'quit'];
let todos = [];
let inputcommand = prompt('What would you like to do');
while (inputcommand !== 'quit') {
  inputcommand = prompt('What would you like to do');
  if (inputcommand === 'new') {
    let todo = prompt('Enter the todo: ');
    todos.push(todo);
    console.log('Added the todo');
  } else if (inputcommand === 'list') {
    for (let [i, todo] of todos.entries()) {
      console.log(`${i}: ${todo.toUpperCase()}`);
    }
  } else if (inputcommand === 'delete') {
    let index = prompt('Enter the index of todo: ');
    console.log(`${todos.splice(index, 1)} removed`);
  } else if (inputcommand === 'quit') {
    break;
  }
}
