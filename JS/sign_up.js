const sign_up = document.getElementById("sign-up");
var email = document.getElementById("emial")
var pass = document.getElementById("password")
var passc = document.getElementById("confrimed-password")



sign_up.addEventListener("click", function(){
  if(pass.value === passc.value){
    localStorage.setItem("password" , pass.value)
    localStorage.setItem("username",email.value)
    console.log(pass.value + email.value);
    window.location.href = "/components/index.html"
    alert("Successfully")
  }else{
    
  }
  
})