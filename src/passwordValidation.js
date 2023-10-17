export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  const ascending = '0123456789';
  const descending = '9876543210';
  
  if (typeof password !== "string") password = String(password);

  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (forbiddenPasswords.includes(password)) return false;

  for (const i = 0; i <= password.length - 3; i++) {
    const substring = password.substring(i, i + 3);
    if (ascending.includes(substring) || descending.includes(substring)) return false;
  }

  // Ensure that a password contains at least one lowercase letter, 
  //  one uppercase letter, one digit, and is exactly 10 characters long.
  const reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-Z\d]{10}$/;
  
  if (!reg1.test(password)) return false

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
