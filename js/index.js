let emailInput = document.getElementById('email-up');
let passwordInput = document.getElementById('password-up');
let nameInput = document.getElementById('name');
let emailInInput = document.getElementById('email-in');
let passwordInInput = document.getElementById('password-in');

let allAccounts
allAccounts = JSON.parse(localStorage.getItem('allAccounts')) || [];

function createAccount(){
if(  nameValidation()&& emailValidation() && emailDuplicated(emailInput.value) && passwordValidation()){ 
        let account
        account = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };  
    allAccounts.push(account);
    localStorage.setItem('allAccounts', JSON.stringify(allAccounts));
    loginPage();
}
  
}

function emailValidation(){
let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(emailReg.test(emailInput.value)){
document.getElementById("invalid-email").classList.add("d-none");
return true;
}
else{
document.getElementById("invalid-email").classList.remove("d-none");
return false;
}
}
function emailDuplicated(newEmail) {
  for (let i = 0; i < allAccounts.length; i++) {
    if (allAccounts[i].email === newEmail) {
      document.getElementById("duplicated-email").classList.remove("d-none");
      return false;
    }
  }
  document.getElementById("duplicated-email").classList.add("d-none");
  return true;
}


function nameValidation(){
let nameReg = /^[a-zA-Z\- ]{3,35}$/;
if(nameReg.test(nameInput.value)){
document.getElementById("invalid-name").classList.add("d-none");
return true;
}
else{
document.getElementById("invalid-name").classList.remove("d-none");
return false;
}
}

function passwordValidation(){
let passwordReg = /^[a-zA-Z0-9]{6,}$/;
if(passwordReg.test(passwordInput.value)){
document.getElementById("invalid-password").classList.add("d-none");
return true;
}
else{
document.getElementById("invalid-password").classList.remove("d-none");
return false;
}
}

function loginPage(){
    window.location.href ="../index.html"
}

////////////login page/////////////////
function login(){
    
    if(emailCheck(emailInInput.value, passwordInInput.value)){
         welcomePage()
    }
    else{
  document.getElementById("invalid").classList.remove("d-none");
    }
   
}

function emailCheck(email, password){
      for (let i = 0; i < allAccounts.length; i++) {
    if (allAccounts[i].email === email && allAccounts[i].password === password) {
              localStorage.setItem("user", JSON.stringify(allAccounts[i].name));
      return true;
    }
  }
  return false;
}


function welcomePage(){
        window.location.href = "https://norhangamaly.github.io/login-system/welcome/";
}

////////////welcomePage//////////////
function welcomeMess(){
let userName = JSON.parse(localStorage.getItem("user"));
document.getElementById("welcome-mess").innerHTML = `Welcome, ${userName}!`;
}

 

function logOut(){
    window.location.href ="../index.html"
}
document.getElementById('logout').addEventListener('click',function(){
    logOut()
})

