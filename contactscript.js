// Select the form
const form = document.querySelector("form");

// Listen for submission
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    // Grab input values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Optional: Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return;
    }

    // If everything is fine, show success
    alert(`Thanks, ${name}! Your message has been sent successfully.`);

    // Clear the form
    form.reset();
});
