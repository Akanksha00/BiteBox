// Theme Toggle
let themeButton = document.getElementById("theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    let themeIcon = themeButton.querySelector(".theme-icon");
    let themeText = themeButton.querySelector(".theme-text");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.textContent = "☾";
        themeText.textContent = "NIGHT MODE";
        localStorage.setItem("biteboxTheme", "dark");
    } else {
        themeIcon.textContent = "☀";
        themeText.textContent = "DAY MODE";
        localStorage.setItem("biteboxTheme", "light");
    }
}

function loadTheme() {
    let savedTheme = localStorage.getItem("biteboxTheme");

    document.body.classList.add("theme-loading");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    let themeIcon = themeButton.querySelector(".theme-icon");
    let themeText = themeButton.querySelector(".theme-text");

    if (savedTheme === "dark") {
        if (themeIcon) {
            themeIcon.textContent = "☾";
        }
        if (themeText) {
            themeText.textContent = "NIGHT MODE";
        }
    } else {
        if (themeIcon) {
            themeIcon.textContent = "☀";
        }
        if (themeText) {
            themeText.textContent = "DAY MODE";
        }
    }

    setTimeout(function () {
        document.body.classList.remove("theme-loading");
    }, 50);
}

if (themeButton) {
    themeButton.addEventListener("click", function () {
        toggleTheme();
    });
}

loadTheme();

// Login Form Handling
let loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let rememberMe = document.getElementById("remember").checked;

        // Simple validation
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        // Email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Password validation (minimum 6 characters)
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        // Simulate login (in real app, this would be an API call)
        console.log("Login attempt:", {
            email: email,
            password: password,
            rememberMe: rememberMe
        });

        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);

        alert("Login successful! Redirecting to home page...");

        // Redirect to home page after successful login
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
}

// Social Login Buttons (placeholder functionality)
let socialButtons = document.querySelectorAll(".social-btn");

socialButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let provider = this.classList.contains("google") ? "Google" : "Facebook";
        alert(provider + " login would be implemented with OAuth integration");
    });
});

// Check if user is already logged in
function checkLoginStatus() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        console.log("User is already logged in");
        // You could redirect or show a message here
    }
}

checkLoginStatus();
