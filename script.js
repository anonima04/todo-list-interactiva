// Base de datos de tareas en memoria
const tasks = [];

// Referencias a elementos del DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// (Funciones a implementar por el equipo)

// ... código existente ...

function renderTasks() {
    taskList.innerHTML = ""; // Limpiar la lista antes de volver a dibujarla
    for (const task of tasks) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }
}

// Simulación: Añade esto para probar que funciona
tasks.push("Tarea de prueba 1", "Tarea de prueba 2");
renderTasks();
