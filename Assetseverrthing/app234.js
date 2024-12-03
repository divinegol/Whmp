 // Show main content and hide loading screen after 1 seconds
 window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

// Get the dots element
const dotsElement = document.getElementById("dots");
let dotCount = 1;

// Function to animate the dots
function animateDots() {
    // Add dots up to 4, then reset
    dotsElement.textContent = ".".repeat(dotCount);
    dotCount = (dotCount % 4) + 1;
}

// Interval to animate dots every 500ms
const dotInterval = setInterval(animateDots, 500);

// Simulate loading process (e.g., 5 seconds)
setTimeout(() => {
    // Hide loading screen and show main content
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // Stop the dots animation
    clearInterval(dotInterval);
}, 5000); // Adjust time as needed

function toggleSidebar() {
    const sidebar = document.getElementById('sidebarMenu');
    sidebar.classList.toggle('active');
}

// Select the logout button
const logoutButton = document.getElementById("logoutButton");

// Event listener for logout
logoutButton.addEventListener("click", function() {
    // Clear the user's data from localStorage (or sessionStorage)
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");

    // Redirect to the login page
    window.location.href = "login.html";
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Check session storage to see if the loading screen has already been shown
    if (sessionStorage.getItem("loadingShown")) {
        // If loading screen was shown, hide it immediately and show main content
        loadingScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    } else {
        // Show loading screen on initial load
        loadingScreen.classList.remove("hidden");
        mainContent.classList.add("hidden");

        // Simulate loading delay, then hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");

            // Set session storage so it won't show again this session
            sessionStorage.setItem("loadingShown", "true");
        }, 3000); // Adjust delay time as needed
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Check session storage to see if the loading screen has already been shown
    if (sessionStorage.getItem("loadingShown")) {
        // If loading screen was shown, hide it immediately and show main content
        loadingScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    } else {
        // Show loading screen on initial load
        loadingScreen.classList.remove("hidden");
        mainContent.classList.add("hidden");

        // Simulate loading delay, then hide loading screen
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");

            // Set session storage so it won't show again this session
            sessionStorage.setItem("loadingShown", "true");
        }, 3000); // Adjust delay time as needed
    }
});

function sendComment() {
    const comment = document.getElementById("commentInput").value;
    if (comment.trim() === "" || comment.length < 5) {
        alert("Please enter a comment of at least 5 characters.");
        return;
    }

    if (comment.length > 200) {
        alert("Comments should be under 200 characters.");
        return;
    }

    // Display the comment
    const commentContainer = document.getElementById("commentsDisplay");
    const newComment = document.createElement("p");
    newComment.textContent = comment;
    commentContainer.appendChild(newComment);

    // Clear the input
    document.getElementById("commentInput").value = "";
}

window.onscroll = function() {
    var button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let counter = 1;
setInterval(() => {
    document.getElementById('slide' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000); // Change slides every 3 seconds
