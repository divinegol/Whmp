document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "" || !emailPattern.test(email)) {
        alert("Please enter a valid name and email.");
        event.preventDefault();
    } else {
        document.getElementById('thank-you-message').style.display = 'block';
    }
});
