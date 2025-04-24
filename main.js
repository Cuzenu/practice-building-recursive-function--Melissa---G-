
/*1. Write a function named reverseString that takes a string as input.
2. The function should: ○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character of the string with the result of the recursive call on the remaining part of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.

reverseString("hello"); // Outputs: "olleh"
reverseString("recursion"); // Outputs: "noisrucer"
reverseString("a"); // Outputs: "a"
reverseString(""); // Outputs: ""

*/

function reverseString(string) {
    // Base case: if the string has 0 or 1 character, return it as is
    if (string.length <= 1) {
        return string; 
    }
    // Recursive case: reverse the rest of the string and append the first character at the end
    return reverseString(string.slice(1)) + string[0];
}

// Test cases
console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: