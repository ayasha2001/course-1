function submitForm(event){
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const phone = document.getElementById("phone").value;
   const datetime = document.getElementById("datetime").value;

   const user = {
     userName : name,
     userEmail : email,
     userPhone : phone,
     userDateTime:datetime
   }
   
   localStorage.setItem(email,JSON.stringify(user))
}
