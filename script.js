const alert = document.querySelector(".alert");
const form = document.querySelector(".todo-form");
const todo = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = flase;
let editID = "";

// submit

form.addEventListener("submit",addItem);
function addItem(e) {
  e.preventDefault();
  const value = todo.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("todo-item");
    const attr = document.createAttribute("data-id")
    attr.value = id;
    element.setAttributeNode(attr):
    element.innerHTML
  } else if (value && editFlag) {
    displayAlert("Please enter item", "danger");
  } else {

  }
}

function displaceAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
}


setTimeout(function() {
  alert.textContent = "";
  alert.classList.remove(`alert-${action}`);
}, 1000);
