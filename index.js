const loginForm = document.getElementById("loginForm");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

error.style.display ="none";

submit.addEventListener("click", function(e){
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "admin" && password == "admin"){
        return window.location.href='./htmlCss-main/index.html';
    }else {
        error.style.display ="block";
    }
})
