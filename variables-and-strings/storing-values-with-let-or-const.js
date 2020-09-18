// LESSON 2: Difference's and uses between let and const



// USING CONST OR LET:
const age = 23;
// In most cases const is best choice, b/c it allows you to do the least.
// Has 2 main restrictions that make your code more readable:
// 1. Must be initialized w/ a value like above code.
// 2. That value cannont be reassigned after declaration. Ex:
const greet = "hey";
greet = "yo"; // results in TypeError: Assignment to constant variable.
// const is good default choice b/c it can't be reassigned. Let's you and other dev's know that
// the variable shouldn't be changed and know that it is going to stay the same w/o worry.

// Program example:
const originalPrice = 50;
const percentOff = 20;
const salePrice = originalPrice * (percentOff / 100);

// rest of the program (maybe hundreds of lines of code)

return salePrice;
// Imagine this program but using let or var. Would be tougher to debug b/c those variables could be reassigned.
// No need to worry when using const b/c you know exactly what will be returned regardless of what code comes after.
// const works best w/ basic data types called primitives (numbers, strings, booleans).
// HOWEVER, there are vulnerabilites when dealing with non-primitive data types such as objects so be careful
// b/c let will have to be used in those situations.
