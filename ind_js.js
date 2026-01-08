function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    
    const existingUser = {
        username: "Admin",
        password: "12345@admin"
    };

    if (username === existingUser.username && password === existingUser.password) {
        window.location.href = "welcome.html";
    } else {
        message.innerText = "User not found. Redirecting to Sign Up...";
        setTimeout(() => {
            window.location.href = "signup.html";
        }, 1500);
    }
}
