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
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    this.todos.forEach(function(item) {
      if (item.completed == true) {
        completedTodos++;
      }
    })


    this.todos.forEach(function(item) {
      if (totalTodos == completedTodos) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    })


    view.displayTodos();
  }
};

//allows for user input
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
  deleteTodo: function(position) {
    //var deleteTodoPositionInput = document.getElementById("deleteTodoPosition");
    todoList.deleteTodo(position);
    view.displayTodos();
    //deleteTodoPositionInput.value = "";
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

    todoList.todos.forEach(function(item, position) {
      var makeLi = document.createElement("li");
      var todoTextWithCompletion = "";
      
      if (item.completed == true) {
        todoTextWithCompletion = "(X) " + item.todoText;
      } else {
        todoTextWithCompletion = "( ) " + item.todoText;
      }

      makeLi.id = position;
      makeLi.textContent = todoTextWithCompletion;
      makeLi.appendChild(this.createDeleteButton());
      grabUl.appendChild(makeLi);
    }, this)
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    return deleteButton;
  },
  eventListeners: function() {
    var todosUl = document.querySelector("ul");

    todosUl.addEventListener("click", function(event) {
      var elementClicked = event.target;
      
      if(elementClicked.className == "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.eventListeners();
