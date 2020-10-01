// LESSON 3: Isolate values with block scoped variables



// GLOBAL, FUNCTION, AND BLOCK SCOPED VARIABLES:
// Ex: e-commerce site that has a price for a product and a isSale variable to check whether that product is on
// sale or not.
var price = 20;
var isSale = true;

if (isSale) {
  var price = 20 - 2;
  console.log('sale price', price) // => outputs 18
}
console.log('price', price) // => outputs 18

// Both output 18 when using var b/c var lives in the global scope (also including FUNCTION SCOPE), meaning a
// var declared variable is accessible and configurable anywhere inside a function or if outside a funtion,
// globally in the program.
// Replace var w/ let or const b/c let and const are BLOCKED SCOPED. Meaning they only live in the block they
// are declared in (such as an if statement block in the above code example). Variables declared w/ let or const
// cannot be accessed anywhere outside of their block scope.

// Ex w/let:
var price = 20;
var isSale = true;

if (isSale) {
  let(or const) price = 20 - 2;
  console.log('sale price', price) // => outputs 18 just like above code
}
console.log('price', price) // => outputs 20 b/c let is block scoped and therefore let price variable inside of if
// statment cannot modify var price variable outside of if statement
