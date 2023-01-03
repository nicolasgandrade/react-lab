export function validateName(name: string): boolean {
  return name.length > 2;
}

export function validateEmail(email: string): boolean {
  email.trim();
  return email.length >= 5 && email.includes('@') && email.includes('.');
}

export function validatePassword(password: string): boolean {
  return password.length > 3;
}

export function validatePasswordConfirm(
  password: string,
  passwordConfirm: string
): boolean {
  return validatePassword(password) && password === passwordConfirm;
}
