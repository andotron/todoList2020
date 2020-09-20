var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    //this.todos[todoText] = newValue;
    this.todos[position].todoText = todoText
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
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
    view.displayTodos();
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoText");
    todoList.addTodo(addTodoTextInput.value);
    view.displayTodos();
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoTextInput = document.getElementById("changeTodoText");
    var changeTodoPositionInput = document.getElementById("changeTodoPosition");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    view.displayTodos();
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPosition");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    view.displayTodos();
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById("toggleCompletedPosition");
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    view.displayTodos();
    toggleCompletedPositionInput.value = "";
  }
}

//renders data for user
var view = {
  displayTodos: function() {
    var grabUl = document.querySelector("ul");
    grabUl.innerHTML = "";
    
    for (var i = 0; i < todoList.todos.length; i++) {
      var makeLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";

      if (todo.completed == true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }

      makeLi.textContent = todoTextWithCompletion;
      grabUl.appendChild(makeLi);
    }
  }
};