const e = require("cors");

console.log('Todo')
// Commands
// new -- Add a todo
// list -- List all todos
//delete --  remove specific todo
//quit -- quit app
commands = ['new','list','delete','quit'];
let todos = [];
let inputcommand = prompt('What would you like to do');
while(inputcommand !== 'quit'){
    inputcommand = prompt('What would you like to do');
    if(inputcommand==='new'){
        
    }else if(inputcommand === 'list'){
    
    }
    else if(inputcommand === 'delete'){
    
    }else if(inputcommand === 'quit'){
    break;
    }
}
