import { isValidEmail } from '../validators/userValidator.js';

export function showError(input, message) {
  input.classList.add('error');
  const span = input.nextElementSibling;
  span.textContent = message;
}

export function validateEmailInput(input) {
  if (!isValidEmail(input.value)) {
    showError(input, 'Email inválido');
    return false;
  }
  return true;
}
