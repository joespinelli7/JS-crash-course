// LESSON: Global objects as well as replacing var with let and const



// GLOBAL OBJECTS:
// variables declared like so:
message = "hello world";
// are added to the Global object, Global object is something that can be accessed anywhere
// in the application.
// However, is dangerous b/c it can run into problems w/ declaring variables such as:
alert = "error message";
alert('different message');
// alert = "" would override the alert() global object function and create a TypeError.

// The Global object is also different depending on the env. JS is run:
// In browser, global object is "window". In node js server, global object is global

// Brand new feature in JS:
globalThis(); // to refer to global object across any env. so no confusion or errors

// Can use 'strict mode' to throw errors for your code:
"use strict"; // place on 1st line of code
// Good info to know but ALWAYS USE LET OR CONST, never type a variable with no declaration and
// you won't have to worry about the global object issues.



// HOISTING:
console.log(message);
var message = "hello";
console.log(message);
// above code will log out to "undefined" and then "hello" b/c var is subject to hoisting.
// the first console.log() see's "var message;"" (just the declaration but no value) while the 2nd
// console.log() receives the value "hello" b/c it has been assigned at that point.
// How the JS engine reads the above lines of code (29-31):
var message; // variable declaration is hoisted
console.log(message); // "undefined" b/c message doesn't have a value assigned yet
message = "hello";
console.log(message); // "hello"

// Use let and const to avoid hoisting. They're declared and assigned on the same line of code.
// Therefore will throw helpful errors ReferenceError's that wouldn't show up if using var.
