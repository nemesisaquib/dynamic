// Initialize EmailJS with your Public Key
emailjs.init("SUklcZutq5z5OCGgb");

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from reloading the page

            const params = {
                name: document.getElementById("full-name").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            };

            // Send email using EmailJS
            emailjs
                .send("service_y085n8q", "template_dkog6kh", params)
                .then(
                    function (response) {
                        // Reset form fields
                        contactForm.reset();

                        // Display success message
                        showMessage("Message sent successfully!", "success");
                        console.log("SUCCESS", response.status, response.text);
                    },
                    function (error) {
                        // Display error message
                        showMessage("Failed to send message. Please try again.", "error");
                        console.error("FAILED", error);
                    }
                );
        });
    } else {
        console.error("Contact form not found!");
    }
});

// Function to display success or error messages
function showMessage(message, type) {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.classList.add("message-box", type); // Add type class for styling
    document.body.appendChild(messageBox);

    // Auto-hide the message after 5 seconds
    setTimeout(function () {
        messageBox.remove();
    }, 5000);
}

















