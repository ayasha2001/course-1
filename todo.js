const inputTag = document.getElementById("item")
const inputTag2 = document.getElementById("item2")
const myForm = document.getElementById("addForm");
const itemList = document.getElementById("items")
const search = document.getElementById("filter")

myForm.addEventListener('submit',addItem)
itemList.addEventListener('click',removeItem)
search.addEventListener('keyup',filterItem)

function addItem(e) {
    e.preventDefault()
    
    const liTag = document.createElement("li")
    liTag.setAttribute("class","list-group-item")
    liTag.innerText=`${inputTag.value}\n${inputTag2.value}`;
    
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

function filterItem(e){
    const string = e.target.value.toLowerCase()
    Array.from(itemList.children).forEach((item)=>{
        if(item.textContent.toLowerCase().slice(0, -2).indexOf(string)!=-1){
            item.style.display = "block";
            // item.style.color="red"
        }
        else{
            // console.log("else")
            item.style.display="none"
            item.style.color="black"
        }
    })

}


