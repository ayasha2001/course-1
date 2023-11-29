const header = document.querySelector("title")
header.innerText="list adder"

const headertitle=document.getElementById("header-title");
headertitle.innerHTML="new name"

const addItem = document.getElementsByClassName("title");
addItem[0].style.color="green"
addItem[0].style.fontWeight="bold"

const listItems = document.getElementsByClassName("list-group-item")
listItems[1].style.backgroundColor="green"

for(var i=0;i<listItems.length;i++){
    listItems[i].style.fontWeight="bold"
}

// const li = document.getElementsByTagName("li")
// li[4].style.fontWeight="bold"
// li[4].style.backgroundColor="red"

const li = document.querySelector(".list-group-item:nth-child(2)")
li.style.backgroundColor="green"

const li2 = document.querySelector(".list-group-item:nth-child(3)")
li2.style.display="none"

const li3 = document.querySelector("li:nth-child(odd)")
li3.style.color="green"