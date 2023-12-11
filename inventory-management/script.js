const table = document.getElementById("table");
const itemName = document.getElementById("name");
const desc = document.getElementById("desc");
const qty = document.getElementById("qty");
const price = document.getElementById("price");
const btn = document.getElementById("submit");

table.addEventListener("click", handleSubmit);
btn.addEventListener("submit",submitFunction)

// getItem();

function handleSubmit(event) {
  let num;
  console.log(event.target.classlist)
  if (event.target.classlist.contain("one")) {
    num = 1;
  } else if (event.target.classlist.contain("two")) {
    num = 2;
  } else if (event.target.classlist.contain("three")) {
    num = 3;
  }
  else{
    return;
  }
  updateApi()
}

function saveItem(data) {
  axios
    .post(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/inventory",
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
    .get("https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/inventory")
    .then((data) => {
        console.log(data)
      updateUi(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function submitFunction() {
    console.log("sub click")
  if (
    itemName.innerHTML == "" ||
    desc.innerHTML == "" ||
    qty.innerHTML == "" ||
    price.innerHTML == ""
  ) {
    alert("enter all fields");
  }

  const data = {
    itemName: itemName.innerHTML,
    desc: desc.innerHTML,
    qty: qty.innerHTML,
    price: price.innerHTML,
  };

  console.log(data,"data")
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

function updateApi(id) {
  axios
    .get(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/inventory/" +
        id
    )
    .then((data) => {
      console.log(data, "updateApi");
      updateQty(id, val);
    })
    .catch((err) => {
      console.log("updateApi", err);
    });
}

function updateQty(id, val) {
  axios
    .put(
      "https://crudcrud.com/api/fe141b6891d0478d8c5ceed956e5d799/inventory/" +
        id,
      {
        qty: val,
      }
    )
    .then((data) => {
      console.log(data, "updateApi");
      updateQty(data.qty);
    })
    .catch((err) => {
      console.log("updateApi", err);
    });
}
