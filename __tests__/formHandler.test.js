import { validateEmailInput } from '../src/ui/formHandler.js';

document.body.innerHTML = `
  <input id="email" /><span class="error-msg"></span>
`;

test('valida email inválido', () => {
  const input = document.getElementById('email');
  input.value = 'email.com';

  const result = validateEmailInput(input);
  expect(result).toBe(false);
  expect(input.classList.contains('error')).toBe(true);
  expect(input.nextElementSibling.textContent).toBe('Email inválido');
});
