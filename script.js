// Base de datos de tareas en memoria
const tasks = [];

// Referencias a elementos del DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// (Funciones a implementar por el equipo)

// ... código existente ...

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push(taskText);
        taskInput.value = '';
        console.log(tasks); // Por ahora solo lo mostramos en consola
    }
}

// COMENTARIO
// COMENTARIO 2

addButton.addEventListener('click', addTask);
