const table = document.getElementById("table");
const itemName = document.getElementById("name");
const desc = document.getElementById("desc");
const qty = document.getElementById("qty");
const price = document.getElementById("price");
const btn = document.getElementById("submit");

table.addEventListener("click", handleSubmit);
btn.addEventListener("click", submitFunction);

getItem();

function handleSubmit(event) {
  let num;
  if (event.target.classList.contains("one")) {
    num = 1;
  } else if (event.target.classList.contains("two")) {
    num = 2;
  } else if (event.target.classList.contains("three")) {
    num = 3;
  } else {
    return;
  }
  console.log("handle submit",num,event.target.classList[2]);
  updateApi(event.target.classList[2], num);
}

function saveItem(data) {
  axios
    .post(
      "https://crudcrud.com/api/6794bef57eba4d65b31223bfdac20fd2/management",
      data
    )
    .then(() => {
      getItem();
    })
    .catch((err) => {
      console.log(err);
    });
}

function getItem() {
  axios
    .get("https://crudcrud.com/api/6794bef57eba4d65b31223bfdac20fd2/management")
    .then((data) => {
      table.innerHTML = "";
      data.data.forEach((element) => {
        updateUi(element);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function submitFunction() {
  console.log("sub click");
  if (
    itemName.value == "" ||
    desc.value == "" ||
    qty.value == "" ||
    price.value == ""
  ) {
    alert("enter all fields");
    return;
  }

  const data = {
    itemName: itemName.value,
    desc: desc.value,
    qty: qty.value,
    price: price.value,
  };

  saveItem(data);
}

function updateUi(ele) {
  const tr = document.createElement("tr");
  const thN = document.createElement("td");
  const thD = document.createElement("td");
  const thQ = document.createElement("td");
  const thP = document.createElement("td");
  const thB = document.createElement("td");

  const btnDiv = document.createElement("div");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");

  btnDiv.appendChild(btn1);
  btnDiv.appendChild(btn2);
  btnDiv.appendChild(btn3);

  btn1.setAttribute("class", `btn one ${ele._id}`);
  btn2.setAttribute("class", `btn two ${ele._id}`);
  btn3.setAttribute("class", `btn three ${ele._id}`);

  btn1.innerHTML = "one";
  btn2.innerHTML = "two";
  btn3.innerHTML = "three";
  btnDiv.setAttribute("id", "btnDiv");

  thN.innerHTML = ele.itemName;
  thD.innerHTML = ele.desc;
  thQ.innerHTML = ele.qty;
  thP.innerHTML = ele.price;

  thB.appendChild(btnDiv);

  tr.appendChild(thN);
  tr.appendChild(thD);
  tr.appendChild(thQ);
  tr.appendChild(thP);
  tr.appendChild(thB);

  table.appendChild(tr);
}

function updateApi(id, val) {
  console.log("updateApi",id,val);
  axios
    .get(
      `https://crudcrud.com/api/6794bef57eba4d65b31223bfdac20fd2/management/${id}`
    )
    .then((data) => {
      console.log(data.data,data.qty - val, "updateApi");
      updateQty(data.data, id, data.data.qty - val);
    })
    .catch((err) => {
      console.log("updateApi", err);
    });
}

function updateQty(data, id, val) {
  const newData = {
    itemName: data.itemName,
    desc: data.desc,
    qty: val,
    price: data.price,
  };
  console.log(newData, "updateQty");
  axios
    .put(
      "https://crudcrud.com/api/6794bef57eba4d65b31223bfdac20fd2/management/" +
        id,
      newData
    )
    .then((data) => {
        getItem()
      console.log(data, "updateQty");
    })
    .catch((err) => {
      console.log("updateQty", err);
    });
}
