//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

function checkSavedUser() {
    if (localStorage.getItem("username") !== null &&
        localStorage.getItem("password") !== null) {
        existing.style.display = "inline-block";
    } else {
        existing.style.display = "none";
    }
}

checkSavedUser();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert("Logged in as " + user);

    if (checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    checkSavedUser();
});

existing.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername !== null) {
        alert("Logged in as " + savedUsername);
    }
});