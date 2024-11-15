document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Sreeraj@123" && password === "12345678") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login Credentials");
    }
});
