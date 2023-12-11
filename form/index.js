const ul = document.getElementById("container");
ul.addEventListener("click", deleteEntry);
let flag = false;
let key = "";

getFormData();

function submitForm(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const datetime = document.getElementById("datetime").value;

  if (name == "" || email == "" || phone == "") {
    alert("enter all fields");
    return;
  }

  const user = {
    userName: name,
    userEmail: email,
    userPhone: phone,
    userDateTime: datetime,
  };
  if (flag) {
   updateFormData(key,user)
  } else {
    postFormData(user);
  }
}

function postFormData(user) {
  axios
    .post(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/saveFormData",
      user
    )
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("datetime").value = "";
      getFormData();
    })
    .catch((err) => {
      console.log("postFormData", err);
    });
}

function updateFormData(id,user) {
  axios
    .put(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/saveFormData/" +
        id
        ,user
    )
    .then(() => {
      getFormData();
      flag = false;
      key = "";
    })
    .catch((err) => {
      console.log("updateFormData", err);
    });
}

function getFormData() {
  axios
    .get(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/saveFormData"
    )
    .then((data) => {
      showDataInUi(data);
      console.log(data);
    })
    .catch((err) => {
      console.log("getFormData", err);
    });
}

function showDataInUi(details) {
   ul.innerHTML = ""
  details.data.forEach((element) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const btnContainer = document.createElement("div");

    const text = document.createTextNode(
      `${element.userName} - ${element.userEmail} - ${element.userPhone} - ${element._id}-`
    );
    delBtn.innerHTML = "delete";
    delBtn.setAttribute("class", "delete user");

    editBtn.innerHTML = "edit";
    editBtn.setAttribute("class", "edit user");

    btnContainer.appendChild(delBtn);
    btnContainer.appendChild(editBtn);

    li.setAttribute("class", "li-tag");
    li.appendChild(text);
    li.appendChild(btnContainer);

    ul.appendChild(li);
  });
}

function deleteApiCall(id) {
  axios
    .delete(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/saveFormData/" +
        id
    )
    .then(() => {
      getFormData();
    })
    .catch(() => {
      console.log("deleteApiCall", err);
    });
}

function deleteEntry(event) {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    const key = event.target.parentNode.parentNode.innerText
      .split("-")[3]
      .trim();
      console.log(key)

    deleteApiCall(key);
  } else if (event.target.classList.contains("edit")) {
    const entryArray = event.target.parentNode.parentNode.innerText.split("-");
    const id = event.target.parentNode.parentNode.innerText
      .split("-")[3]
      .trim();
    document.getElementById("name").value = entryArray[0].trim();
    document.getElementById("email").value = entryArray[1].trim();
    document.getElementById("phone").value = entryArray[2].trim();
    flag = true;
    key = id;
  }
}
