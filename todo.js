const inputTag = document.getElementById("item")
const myForm = document.getElementById("addForm");
const itemList = document.getElementById("items")

myForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)

function addItem(e) {
    e.preventDefault()
    
    const liTag = document.createElement("li")
    liTag.setAttribute("class","list-group-item")
    liTag.innerHTML=inputTag.value
    
    const delBtn = document.createElement("button")
    const editBtn = document.createElement("button")
    
    delBtn.setAttribute("class","btn btn-danger btn-sm float-right delete")
    editBtn.setAttribute("class","btn btn-warning btn-sm float-right edit")

    delBtn.innerHTML="X"
    editBtn.innerHTML="E"

    liTag.appendChild(delBtn)
    liTag.appendChild(editBtn)

    const ulTag = document.getElementById("items")
    ulTag.appendChild(liTag)
}

function removeItem(e){
    e.preventDefault()

    if(e.target.classList.contains('delete')){

        const node = e.target.parentNode
        itemList.removeChild(node)

    }
}


