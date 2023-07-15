// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Program: Fibonacci Sequence
// Description: Generates the Fibonacci sequence up to a given number.

let limit: number = 20; // The number up to which the Fibonacci sequence will be generated
let fibonacci: number[] = [0, 1]; // Array to store the Fibonacci sequence

// Generate Fibonacci sequence
for (let i = 2; i <= limit; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci Sequence up to", limit, ":");
console.log(fibonacci);



// Program: Palindrome Check
// Description: Checks if a given string is a palindrome.

let word: string = "level"; // The string to check for palindrome

let reversed: string = word.split("").reverse().join(""); // Reverse the string

if (word === reversed) {
  console.log(word, "is a palindrome.");
} else {
  console.log(word, "is not a palindrome.");
}

