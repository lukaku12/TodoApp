const addToDo = document.getElementById("addToDo");
const todo = document.getElementById("todo");
const container = document.getElementsByClassName("container")[0];

var save = '<i class="fas fa-check"></i>';
var deleteItem = '<i class="fas fa-trash"></i>';

addToDo.addEventListener("click", (event) => {
  event.preventDefault();
  var userTodos = [""];
  if (todo.value != "") {
    userTodos.forEach((e) => {
      var newDiv = document.createElement("div");
      newDiv.classList.add("toDo");
      container.appendChild(newDiv);
      e.newDiv = newDiv;

      var newh1 = document.createElement("h1");
      newh1.classList.add("userTodo");
      newDiv.appendChild(newh1);
      newh1.innerHTML = todo.value;
      e.newh1 = newh1.innerHTML;

      var buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");
      newDiv.appendChild(buttonsDiv);
      e.buttonsDiv = buttonsDiv;

      var buttonDone = document.createElement("button");
      var buttonDelete = document.createElement("button");
      buttonDone.innerHTML = save;
      e.buttonDone = buttonDone;
      buttonDelete.innerHTML = deleteItem;
      e.buttonDelete = buttonDelete;
      buttonsDiv.appendChild(buttonDone);
      buttonsDiv.appendChild(buttonDelete);
      buttonDelete.addEventListener("click", () => {
        newDiv.remove();
      });
      buttonDone.addEventListener("click", Start);

      function Start() {
        buttonDone.removeEventListener("click", Start);
        buttonDone.addEventListener("click", Stop);
        newDiv.classList.add("done");
      }

      function Stop() {
        buttonDone.removeEventListener("click", Stop);
        buttonDone.addEventListener("click", Start);
        newDiv.classList.remove("done");
      }
    });
    todo.value = "";
  } else {
    alert("Enter To Do please!");
  }
});
