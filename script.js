function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.innerText = "Login successful!";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid username or password";
    }
}
