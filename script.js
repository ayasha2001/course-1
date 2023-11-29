// const header = document.querySelector("title")
// header.innerText="list adder"

// const headertitle=document.getElementById("header-title");
// headertitle.innerHTML="new name"

// const addItem = document.getElementsByClassName("title");
// addItem[0].style.color="green"
// addItem[0].style.fontWeight="bold"

// const listItems = document.getElementsByClassName("list-group-item")
// listItems[1].style.backgroundColor="green"

// for(var i=0;i<listItems.length;i++){
//     listItems[i].style.fontWeight="bold"
// }

// const li = document.getElementsByTagName("li")
// li[4].style.fontWeight="bold"
// li[4].style.backgroundColor="red"

// const li = document.querySelector(".list-group-item:nth-child(2)")
// li.style.backgroundColor="green"

// const li2 = document.querySelector(".list-group-item:nth-child(3)")
// li2.style.display="none"

// const li3 = document.querySelector("li:nth-child(odd)")
// li3.style.color="green"

const li = document.getElementById("items")
console.log(li.parentElement)
console.log(li.lastElementChild)//this returns visible content only
console.log(li.lastChild)//this returns line breaks as well
console.log(li.firstChild)//this returns line breaks as well
console.log(li.firstElementChild)//this returns visible content including the tag

const h2 = document.getElementsByClassName("title")[1]
console.log(h2.parentElement)
console.log(h2.nextElementSibling)
console.log(h2.nextSibling)
console.log(h2.previousSibling)
console.log(h2.previousElementSibling)


//given task

const h1Tag = document.createElement("h1")
h1Tag.setAttribute("id","containerDiv")

const liTag = document.createElement("li")
liTag.innerHTML="Hello world"
liTag.setAttribute("class","list-group-item")

const text = document.createTextNode("hello world")
h1Tag.appendChild(text)

const divTag = document.getElementsByClassName("container")[0]
const headerTag = document.getElementById("header-title")
const li1 = document.getElementsByTagName("li")[0]
const ulTag = document.getElementById("items")

ulTag.insertBefore(liTag,li1)
divTag.insertBefore(h1Tag,headerTag)

