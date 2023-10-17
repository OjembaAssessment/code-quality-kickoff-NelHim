/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"

  if(password === null || password === undefined) return 0

  // Match the sequence of the same character
  const reg1 = /(.)\1+/g;

  // Create an array of matches
  const matches = password.match(reg1); 
  let penaltyPoints = 0;
  if (matches) {
    
    // Calculate the penalty points based on how many characters matched
    matches.forEach(match => {
      penaltyPoints += match.length === 2 ? 1 : 2;
    });
  }
  return penaltyPoints;
} 
