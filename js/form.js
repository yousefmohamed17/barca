const inputuser = document.querySelector("#user");
const inputpass = document.querySelector("#pass");
const form = document.querySelector("form");
const eye = document.querySelector(".eye-icon");
const userError = document.querySelector(".userError");
const passError = document.querySelector(".passError");



eye.addEventListener("click", () => {
    if (inputpass.type === "password") {
        inputpass.type = "text";   
        eye.innerHTML = `<i class="fa-solid fa-eye"></i>`; 
    } else {
        inputpass.type = "password"; 
        eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`; 
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("user", inputuser.value);
    localStorage.setItem("pass", inputpass.value);
    sessionStorage.setItem("user", inputuser.value);
    sessionStorage.setItem("pass", inputpass.value);
});

if(inputuser.value == "" ) {
    inputuser.value = localStorage.getItem("user");
}
if(inputpass.value == "" ) {
    inputpass.value = localStorage.getItem("pass");
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputuser.value === "") {
        userError.textContent = " Please enter your username";
    } 
    if  (inputpass.value === "") {
        passError.textContent = "Please enter your password";
    }  
    });   

inputuser.addEventListener("input", () => {
    if (inputuser.value !== "") {
        userError.textContent = "";
    }
});

inputpass.addEventListener("input", () => {
    if (inputpass.value !== "") {
        passError.textContent = "";
    }
});

