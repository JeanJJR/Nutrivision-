document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
    const loginButton = document.getElementById("login-btn");
    const registerButton = document.getElementById("register-btn");

    loginForm.style.display = "block";
    registerForm.style.display = "none";

    loginButton.addEventListener("click", function () {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerButton.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
});

