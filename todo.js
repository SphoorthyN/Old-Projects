
setTimeout(function () {
var todos = [];
var input = prompt("What would you like to do?");
console.log(input);

    while (input !== "quit") {
        if (input === "list") {
            console.log(todos);
        }
        else if (input === "new") {
            var newTodo = prompt("enter a new todo");
            console.log(newTodo);
            // add to the todos
            todos.push(newTodo)
        }
        input = prompt("What would you like to do?");
        console.log(input);
    }

console.log("You quit the app!");
}, 250);
