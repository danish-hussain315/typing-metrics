const sign_up = document.querySelector("#sign-up")
sign_up.addEventListener("click",function(){
  window.location.href = "/components/sign_up.html"
})
var emails = document.getElementById("emial")
var passwords = document.getElementById("password")
const logins = document.querySelector("#login")
logins.addEventListener("click", function(){
  if(emails.value === localStorage.getItem("username") && passwords.value === localStorage.getItem("password") ){
    window.location.href ="/components/Dashboard.html"
  }else{
    alert("either password of email is in correct.")
  }
  
  
})