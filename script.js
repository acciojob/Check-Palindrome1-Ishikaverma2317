function isPalindrome(s) {
  // Step 1: remove all non-alphanumeric characters and convert to lowercase
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Step 2: reverse the string
  let reversed = cleaned.split('').reverse().join('');

  // Step 3: check if same forward and backward
  return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("race a car"));   // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("raceCAR")); // true
