export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  for (let item of forbiddenPasswords){
    if (item === password) return false
  }

  let arr = password.split('');

  let ascending = '0123456789';
  let descending = '9876543210';

  for (let i = 0; i <= password.length - 3; i++) {
    let substring = password.substring(i, i + 3);
    if (ascending.includes(substring) || descending.includes(substring)) return false;
}

  // // Ascending
  // for (let i = 1; i < arr.length-1; i++){
  //   if((typeof Number((arr[i]) === 'number') && Number(arr[i]) + 1 === Number(arr[i+1])) || (Number(arr[i])-1 === Number(arr[i-1]) )) return false
  // }

  // // Descending
  // for (let j = 1; j < arr.length; j++){
  //   if(Number(arr[j])-1 === Number(arr[j-1])) return false
  // }


  if (typeof password !== "string") password = String(password);
  let reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-Z\d]{10}$/;
  if (!reg1.test(password)) return false

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
