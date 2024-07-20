const add = document.getElementById("add-btn");
const tasks = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");

add.addEventListener("click", function () {
  // reading the task data
  const tasktest = taskInput.value.trim();

  //   creating a new list item
  const li = document.createElement("li");
  if (tasktest === "") return;
  li.textContent = tasktest;

  //   adding a delete button
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("task-delete");
  del.addEventListener("click", function () {
    tasks.removeChild(li);
  });
  li.appendChild(del);

  tasks.appendChild(li);

  //
  taskInput.value = "";
});
