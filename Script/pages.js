const form = document.getElementById('contact-form');
const successMessage = document.getElementById('test-contact-success');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  if (fullName && email && subject && message.length >= 10) {
    successMessage.style.display = 'block';
  } else {
    if (!fullName) {
      document.getElementById('test-contact-error-name').textContent = 'Full name is required';
    }
    if (!email) {
      document.getElementById('test-contact-error-email').textContent = 'Email is required';
    }
    if (!subject) {
      document.getElementById('test-contact-error-subject').textContent = 'Subject is required';
    }
    if (message.length < 10) {
      document.getElementById('test-contact-error-message').textContent = 'Message must be at least 10 characters';
    }
  }
});