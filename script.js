// This is an in-line comment

/*

This is a multi-line 
comment

*/

var myName;
var = a;
a = 7;
var = b;
b = a;

var myFirstName = "Alex";
var myLastName = "Bohon";


// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// case
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// let
let catName = "Oliver";
let catSound = "Meow!";

// Add Two Numbers with JavaScript
const sum = 10 + 10;

// Subtract One Number from Another with JavaScript
const difference = 45 - 23;

// Multiply Two Numbers with JavaScript
const product = 8 * 10;

const quotient = 66 / 33;

// Increment a Number with JavaScript
myVar++;

myVar--;

// Decimal numbers
const myDecimal = 3.5;

// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// divide
const quotient = 4.4 / 2.0; // Change this line

// Finding a Remainder in JavaScript
let remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// quoted

/** 
 * 
 * Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed

**/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end.";

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Only change code below this line
const myName = "Alex";
const myStr = "My name is " + myName + "and I am well!";

// Change code below this line
const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// еще 5

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// еще 3

// Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


// 1 Word Blanks 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "It was really " + myAdjective + " " + myNoun + " and we " + myVerb + " ourselves " + myAdverb + "."; // Change this line
// Only change code above this line

// 2 Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["string", 1];

// 3 Nest one Array within Another Array
// Only change code below this line
const myArray = [[1, 2], [3, 5]];

//4 Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];
console.log(myData);

//5 Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;

// Only change code below this line

//6 Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  console.log(myData);

//7 Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);

//8 Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

//9 Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//10 Shopping List

//11 Write Reusable JavaScript with Functions
function reusableFunction () {
    
}