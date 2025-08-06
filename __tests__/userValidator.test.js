import { isValidEmail, isStrongPassword } from '../src/validators/userValidator';

test('valid email', () => {
  expect(isValidEmail('test@email.com')).toBe(true);
});

test('invalid email', () => {
  expect(isValidEmail('email.com')).toBe(false);
});

test('strong password', () => {
  expect(isStrongPassword('abc12345')).toBe(true);
});

test('weak password', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
