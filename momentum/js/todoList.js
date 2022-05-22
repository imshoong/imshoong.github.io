const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todoList');

const TODOS_KEY = 'todos';

let todos = [];

const saveTodos = function () {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = function (event) {
	const li = event.target.parentElement;
	li.remove();
	todos = todos.filter((todo) => todo.id !== parseInt(li.id, 10));
	saveTodos();
};

const paintTodoList = function (newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const button = document.createElement('button');

	li.id = newTodo.id;
	span.innerText = newTodo.text;
	button.innerText = '✖️';
	button.addEventListener('click', deleteTodo);

	todoList.appendChild(li);
	li.appendChild(span);
	li.appendChild(button);
};

const handleTodoSubmit = function (event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = '';
	const newTodoObj = {
		id: Date.now(),
		text: newTodo
	};
	todos.push(newTodoObj);
	paintTodoList(newTodoObj);
	saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos);
	todos = parsedTodos;
	parsedTodos.forEach(paintTodoList);
}
