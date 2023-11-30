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
   const btn = document.createElement("button");
   const text = document.createTextNode(`${name} - ${email} - ${phone}`)
   btn.innerHTML="delete"
   btn.setAttribute("class","delete user")
   li.setAttribute("class","li-tag");
   li.appendChild(text)
   li.appendChild(btn)

   ul.appendChild(li)

   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("phone").value ="";
   document.getElementById("datetime").value="";

   localStorage.setItem(email,JSON.stringify(user))
}

function deleteEntry(event){
   event.preventDefault()
   if(event.target.classList.contains("delete")!=-1){
       const node = event.target.parentNode;
       const key = event.target.parentNode.innerText.split("-")[1].trim();
       localStorage.removeItem(key)
       ul.removeChild(node)
       console.log(key)
       console.log(node)
   }
}