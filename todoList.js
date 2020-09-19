var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length == 0) {
      console.log("Your todo list is empty! Please add some tasks :)")
    } else {
      console.log("My Todo List:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed == true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    //this.todos[todoText] = newValue;
    this.todos[position].todoText = todoText
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    /*if all false = all true
    if some true = all true
    if all true = all false*/
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //check number of tasks are completed
    for (var i = 0; i< totalTodos; i++) {
      if (this.todos[i].completed == true) {
        completedTodos++;
      }
    }
    //case 1: if everythings true, make everything false
    if (totalTodos == completedTodos) {
      for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
    //case 2: else, make everything true.
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoText");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoTextInput = document.getElementById("changeTodoText");
    var changeTodoPositionInput = document.getElementById("changeTodoPosition");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
  }
}