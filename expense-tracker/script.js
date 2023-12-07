const amount = document.getElementById("amount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const submitBtn = document.getElementById("submit");
const listContainer = document.getElementById("list-group");
var arr = [];

loadItemsFromLocalStorage();

submitBtn.addEventListener("click", handleClick);
listContainer.addEventListener("click", handleEditDelete);

function loadItemsFromLocalStorage() {
  const storedItems = localStorage.getItem("expenseItems");
  if (storedItems) {
    arr = JSON.parse(storedItems);

    renderItems();
  }
}

function saveItemsToLocalStorage() {
  localStorage.setItem("expenseItems", JSON.stringify(arr));
}

function handleEditDelete(event) {
  event.preventDefault();

  if (event.target.classList.contains("delete")) {
    const indexToDelete = getIndex(event.target.parentNode.parentElement);
    arr.splice(indexToDelete, 1);
    renderItems();
    saveItemsToLocalStorage();
  } else if (event.target.classList.contains("edit")) {
    const indexToDelete = getIndex(event.target.parentNode.parentElement);
    let val = arr[indexToDelete].split("-");
    amount.value = val[0];
    description.value = val[1];
    category.value = val[2];
    arr.splice(indexToDelete, 1);
    renderItems()
  }
}

function getIndex(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

function renderItems() {
  listContainer.innerHTML = "";

  arr.forEach((itemText, index) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item d-flex justify-content-between");
    const btnDiv = document.createElement("div");
    const editBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-primary edit ms-2");
    delBtn.setAttribute("class", "btn btn-primary delete ms-2");
    const text = document.createTextNode(itemText);

    editBtn.innerHTML = "edit";
    delBtn.innerHTML = "delete";
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(delBtn);

    li.appendChild(text);
    li.appendChild(btnDiv);
    listContainer.appendChild(li);
  });
}

function handleClick(event) {
  event.preventDefault();
  const amountText = amount.value;
  const descriptionText = description.value;
  const categoryText = category.value;

  if (amountText == "" || descriptionText == "" || categoryText == "") {
    alert("Enter all the fields");
    return;
  }

  const newItemText = `${amountText}-${descriptionText}-${categoryText}`;
  amount.value = "";
  description.value = "";
  category.value = "";
  arr.push(newItemText);
  renderItems();
  saveItemsToLocalStorage();
}
