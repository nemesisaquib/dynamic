// Handle the SEO form submission
document.querySelector('#seo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the website URL input
    const websiteUrl = document.querySelector('#website-url').value;

    // Check if the URL is entered
    if (websiteUrl) {
        // Send the email using EmailJS with the new template ID
        emailjs.send('service_y085n8q', 'template_56um8vk', {
            website_url: websiteUrl  // Send the website URL to the email template
        }).then(function(response) {
            // Show success message
            showMessage('Website URL sent successfully!', 'success');
            resetForm();
        }, function(error) {
            // Show error message
            showMessage('Error sending URL. Please try again later.', 'error');
        });
    } else {
        // Show error message if the URL is empty
        showMessage('Please enter a valid website URL.', 'error');
    }
});

// Function to show success/error messages
function showMessage(message, type) {
    const messageBox = document.querySelector('#message-box');
    messageBox.textContent = message;
    messageBox.className = 'message-box ' + type;
    messageBox.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 5000);
}

// Reset the form fields
function resetForm() {
    document.querySelector('#website-url').value = '';  // Reset website URL input
}
