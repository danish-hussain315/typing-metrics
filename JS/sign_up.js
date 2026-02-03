const sign_ups = document.getElementById("sign-up");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const passc = document.getElementById("confirmed-password");
var emailLS = localStorage.getItem("username")

sign_ups.addEventListener("click", function () {

  if(emailLS === email.value){
    console.log("User Already exist");
  }else{
// 1. Empty field validation
  if (email.value === "" || pass.value === "" || passc.value === "") {
    
    
    alert("All fields are required");
    return;
  }

  // 2. Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Enter a valid email address");
    return;
  }

  // 3. Password length validation
  if (pass.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // 4. Password match validation
  if (pass.value !== passc.value) {
    alert("Passwords do not match");
    return;
  }

  // 5. Save to localStorage
  localStorage.setItem("username", email.value);
  localStorage.setItem("password", pass.value);

  alert("Signup successful ✅");
  window.location.href = "/components/index.html";
  }

  console.log(localStorage.getItem("username"));
  
});
