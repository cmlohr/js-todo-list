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
clearBtn.addEventListener("click", clearItems);

function addItem(e) {
  e.preventDefault();
  const value = todo.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("todo-item");
    const attr = document.createAttribute("data-id")
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="edit-btn"></button>
            <i class="fas fa-edit"></i>
            <button type="button" class="delete-btn"></button>
            <i class="fas fa-trash"></i>
            </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    list.appendChild(element);
    displayALert("Item added", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault()
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
}

function clearItems() {
  const items = document.querySelectorAll(".todo-item");
  if (items.length > 0) {
    items.forEach(function(item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0) {
    containger.classList.remove("show-container");
  }
  displayAlert("Item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem() {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  todo.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}
function setBackToDefault() {
  todo.value = "";
  editFlag = flase;
  editID = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage(id, value) {

}

function removeFromLocalStorage(id) {

}
