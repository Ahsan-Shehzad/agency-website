/* Sending the URL-encoded string as payload using Fetch */

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();
    // Create new FormData object:
    const formData = new FormData(form);
    // Convert formData object to URL-encoded string:
    const payload = new URLSearchParams(formData);
    console.log(payload)
    // Post the payload using Fetch:

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeiM5OBaghphK9UP-tzROT2nk8CRKHGfsmEu-5g2exQlEAeQA/formResponse', {
    method: 'POST',
    body: payload,
    mode: 'no-cors',
    })
    Swal.fire(
        'Thank you!',
        'Your message has been delivered to our team of experts who will respond to you as soon as possible.',
        'success'
      )
})





