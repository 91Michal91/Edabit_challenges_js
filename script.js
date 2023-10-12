// function stutter(word) {
//     return word[0] + word[1] + "... " + word[0] + word[1] + "... " + word + "?";
// }

// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]


// function toNumberArray(arr) {
// 	const arr1 =[];
// 	for (let element of arr) {
//   	element = parseFloat(element);
// 		arr1.push(element);


// }
// return arr1;

// }

// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?


// const str = '[head, tail] = [1, 2, 3, 4]';
// const str1 = str.slice(1);
// return str1;


// Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Examples
// greaterThanOne("1/2") ➞ false

// greaterThanOne("7/4") ➞ true

// greaterThanOne("10/10") ➞ false

// function greaterThanOne(frac) {
//     // Split the fraction into its numerator and denominator
//     const parts = frac.split('/');

//     // Ensure that there are exactly two parts (numerator and denominator)
//     if (parts.length !== 2) {
//         return false;
//     }

//     const numerator = parseFloat(parts[0]);
//     const denominator = parseFloat(parts[1]);

//     // Check if the fraction is greater than 1
//     if (numerator / denominator > 1) {
//         return true;


function validStrNumber(str) {
    // Use a regular expression to check if the string is a valid number
    // This regex allows numbers like .5, 0003, and handles positive/negative numbers as well.
    const regex = /^[-+]?\d*\.?\d+$/;

    return regex.test(str);
}

// Test cases
console.log(validStrNumber("3.2"));     // ➞ true
console.log(validStrNumber("324"));      // ➞ true
console.log(validStrNumber("54..4"));    // ➞ false
console.log(validStrNumber("number"));   // ➞ false
console.log(validStrNumber(".5"));       // ➞ true
console.log(validStrNumber("0003"));     // ➞ true
