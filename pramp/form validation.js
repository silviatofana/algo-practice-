const form = document.querySelector('#signup-form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Add event listener to form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form input values
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  // Reset previous error messages
  resetErrors();

  // Check for missing fields
  if (firstNameValue === '' || lastNameValue === '' || emailValue === '' || passwordValue === '' || confirmPasswordValue === '') {
    showError('Please fill in all fields');
    return;
  }

  // Check for valid email address
  if (!isValidEmail(emailValue)) {
    showError('Please enter a valid email address');
    return;
  }

  // Check for valid password
  if (!isValidPassword(passwordValue)) {
    showError('Password must be at least 8 characters long and contain at least one letter and one number');
    return;
  }

  // Check if passwords match
  if (passwordValue !== confirmPasswordValue) {
    showError('Passwords do not match');
    return;
  }

  // If all validations pass, submit form
  form.submit();
});

// Function to validate email address using regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate password using regular expression
function isValidPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

// Function to display error message on form
function showError(message) {
  const errorElement = document.createElement('p');
  errorElement.className = 'error';
  errorElement.textContent = message;
  form.appendChild(errorElement);
}

// Function to reset error messages on form
function resetErrors() {
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(errorElement => errorElement.remove());
}
