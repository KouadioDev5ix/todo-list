let taskLIst = [];
const AddTaskBtn = document.querySelector("#AddTaskBtn");
const taskInput = document.querySelector(".input");
const taskListItems = document.querySelector(".task-listItems");

/**
 * Get task store in local storage
 */

document.addEventListener("DOMContentLoaded", () => {
  const taskExistInLocalStorage = JSON.parse(localStorage.getItem("task"));
  if (taskExistInLocalStorage) {
    taskExistInLocalStorage.map((task) => taskLIst.push(task));
    taskStatus();
    renderTask();
  }
});

/**
 * Store task in local storage
 */

const storeTask = () => {
  localStorage.setItem("task", JSON.stringify(taskLIst));
};

/**
 * Progress bar
 */

const taskStatus = () => {
  const completedTask = taskLIst.filter((task) => task.completed).length;
  const totalTask = taskLIst.length;
  const progress = (completedTask / totalTask) * 100;
  const progressBar = document.querySelector("#progress");
  progressBar.style.width = `${progress}%`;
  document.querySelector(
    "#number"
  ).innerText = `${completedTask} / ${totalTask}`;

  if (taskLIst.length && completedTask === totalTask) {
    alert("Vous avez completé toutes les tâches");
  }
};

/**
 * Mark task as completed or not
 * @param {*} index
 */
const toggleTaskStatus = (index) => {
  taskLIst[index].completed = !taskLIst[index].completed;
  renderTask();
  taskStatus();
  storeTask();
};

/**
 * Delete a specific Task
 * @param {*} index
 */
const deleteTask = (index) => {
  taskLIst.splice(index, 1);
  renderTask();
  taskStatus();
  storeTask();
};

/**
 * Edit a task
 * @param {*} index
 */

const editTask = (index) => {
  taskInput.value = taskLIst[index].description;
  taskLIst.splice(index, 1);
  renderTask();
  taskStatus();
  storeTask();
};
/**
 * Update the task list in the DOM
 */
const renderTask = () => {
  taskListItems.innerHTML = "";
  taskLIst.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.className = "dynamicTask";
    listItem.innerHTML = `
      <div class="task ${task.completed ? "completed" : ""}">
        <input type="checkbox" ${
          task.completed ? "checked" : ""
        } class="toCheck"/>
        <p class="text">${task.description}</p>
      </div>
      <div class="icons">
        <img src="./CSS/Images/pen-2-svgrepo-com (1).svg" alt="" class="Edit" onClick="editTask(${index})" />
        <img src="./CSS/Images/archive-check-svgrepo-com.svg" alt="" class="Delete" onClick="deleteTask(${index})" />
      </div>
    `;
    listItem
      .querySelector(".toCheck")
      .addEventListener("change", () => toggleTaskStatus(index));
    taskListItems.appendChild(listItem);
  });
};

/**
 * Add a new task
 */
const addNewTask = () => {
  let task = taskInput.value.trim();
  if (task) {
    taskLIst.push({
      description: task,
      completed: false,
    });
    taskInput.value = "";
    taskStatus();
    renderTask();
    storeTask();
  }
};

/**
 * Add a task on submit
 */
AddTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addNewTask();
});

const user = {
  id: 1,
  name: "Kouadio",
  job: "Solfware developper",
};

localStorage.setItem("user", JSON.stringify(user));

const getUser = JSON.parse(localStorage.getItem("user"));
document.addEventListener("DOMContentLoaded", () => {});

console.log("SASADADAAAA", getUser);

"I am learning Web Dev"
  .split(" ")
  .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
  .join(" ");

const words = "I try web developement";

console.log(
  "word===>",
  words
    .split("")
    .map((w) => w[0].toUpperCase())
    .join("")
);
