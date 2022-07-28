

export function isEmail(email: string) {
  return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}

export function isPassword(password: string) {
  return password.length >= 8;
}