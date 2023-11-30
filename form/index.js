const ul = document.getElementById("container")
ul.addEventListener("click",deleteEntry)

function submitForm(event){

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const datetime = document.getElementById("datetime").value;

   if(name=="" || email=="" || phone==""){
      alert("enter all fields")
      return;
   }

   const user = {
     userName : name,
     userEmail : email,
     userPhone : phone,
     userDateTime:datetime
   }

   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const editBtn = document.createElement("button");
   const btnContainer = document.createElement("div")

   const text = document.createTextNode(`${name} - ${email} - ${phone}`)
   delBtn.innerHTML="delete"
   delBtn.setAttribute("class","delete user")

   editBtn.innerHTML="edit"
   editBtn.setAttribute("class","edit user")
   
   btnContainer.appendChild(delBtn)
   btnContainer.appendChild(editBtn)

   li.setAttribute("class","li-tag");
   li.appendChild(text)
   li.appendChild(btnContainer)
   
   ul.appendChild(li)

   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("phone").value ="";
   document.getElementById("datetime").value="";

   localStorage.setItem(email,JSON.stringify(user))
}

function deleteEntry(event){
   event.preventDefault()
   if(event.target.classList.contains("delete")){
       const node = event.target.parentNode.parentNode;
       const key = event.target.parentNode.parentNode.innerText.split("-")[1].trim();
       
       localStorage.removeItem(key)
       ul.removeChild(node)
       
   }
   else if(event.target.classList.contains("edit")){
      const entryArray = event.target.parentNode.parentNode.innerText.split("-")
      const node = event.target.parentNode.parentNode;
      const key = entryArray[1].trim();
      console.log(entryArray)
      document.getElementById("name").value=entryArray[0].trim();
      document.getElementById("email").value=entryArray[1].trim();
      document.getElementById("phone").value =entryArray[2].trim();
      localStorage.removeItem(key)
      ul.removeChild(node)

   }
}