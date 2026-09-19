const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");
const clearCompletedButton = document.getElementById("clear-completed");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos
function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "active") {
      return !todo.completed;
    }

    if (currentFilter === "completed") {
      return todo.completed;
    }

    return true;
  });

  if (filteredTodos.length === 0) {
    const emptyMessage = document.createElement("p");

    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No tasks here.";

    todoList.appendChild(emptyMessage);
  }

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("div");

    todoItem.className = `todo-item ${
      todo.completed ? "completed" : ""
    }`;

    todoItem.innerHTML = `
      <div class="todo-left">

        <input
          type="checkbox"
          class="todo-checkbox"
          ${todo.completed ? "checked" : ""}
        />

        <span class="todo-title">
          ${escapeHtml(todo.title)}
        </span>

      </div>

      <div class="todo-actions">

        <button class="edit-btn">
          Edit
        </button>

        <button class="delete-btn">
          Delete
        </button>

      </div>
    `;

    const checkbox = todoItem.querySelector(".todo-checkbox");
    const editButton = todoItem.querySelector(".edit-btn");
    const deleteButton = todoItem.querySelector(".delete-btn");

    // Toggle completed
    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
    });

    // Edit todo
    editButton.addEventListener("click", () => {
      editTodo(todo.id);
    });

    // Delete todo
    deleteButton.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    todoList.appendChild(todoItem);
  });

  updateTaskCount();
}

// Add todo
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = todoInput.value.trim();

  if (!title) {
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  todos.unshift(newTodo);

  saveTodos();
  renderTodos();

  todoInput.value = "";
  todoInput.focus();
});

// Toggle todo
function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  saveTodos();
  renderTodos();
}

// Delete todo
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);

  saveTodos();
  renderTodos();
}

// Edit todo
function editTodo(id) {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return;
  }

  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const titleElement = item.querySelector(".todo-title");

    if (!titleElement) {
      return;
    }

    if (titleElement.textContent === todo.title) {
      const todoLeft = item.querySelector(".todo-left");
      const actions = item.querySelector(".todo-actions");

      const input = document.createElement("input");

      input.className = "edit-input";
      input.value = todo.title;
      input.autocomplete = "off";

      todoLeft.replaceChild(input, titleElement);

      actions.innerHTML = `
        <button class="save-btn">
          Save
        </button>

        <button class="delete-btn">
          Delete
        </button>
      `;

      const saveButton = actions.querySelector(".save-btn");
      const deleteButton = actions.querySelector(".delete-btn");

      input.focus();
      input.select();

      saveButton.addEventListener("click", () => {
        saveEdit(id, input.value);
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          saveEdit(id, input.value);
        }
      });

      deleteButton.addEventListener("click", () => {
        deleteTodo(id);
      });
    }
  });
}

// Save edited todo
function saveEdit(id, newTitle) {
  const title = newTitle.trim();

  if (!title) {
    return;
  }

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: title,
      };
    }

    return todo;
  });

  saveTodos();
  renderTodos();
}

// Clear completed
clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);

  saveTodos();
  renderTodos();
});

// Filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((button) => {
      button.classList.remove("active-filter");
    });

    button.classList.add("active-filter");

    renderTodos();
  });
});

// Update remaining task count
function updateTaskCount() {
  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  taskCount.textContent =
    `${remaining} ${remaining === 1 ? "task" : "tasks"} remaining`;
}

// Prevent HTML injection
function escapeHtml(text) {
  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}

// Initial render
renderTodos();