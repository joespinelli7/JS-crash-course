// LESSON 4: Better strings with template literals



// TEMPLATE LITERAL EXAMPLE (concatenating strings):
let name = prompt("Enter your name"); // prompt box pops up and asks for users name
const message = "Hi " + name + ", how are you?";
alert(message);
// While the above code works, its not always intuitive to have + sign when working
// with strings.
// Instead use backticks and place variable inside ${} like so:
let name = prompt("Enter your name");
const message = `Hi ${name}. how are you?`; // ${} allows you to place a JS inside a string.
// Takes value and converts it into a data type string. Also called string interpolation.
alert(message);

// Can also perform calculations inside the interpolation and b/c you're using a template
// literal, it will convert the final calculation to a string.
const weight = 150;
const moonWeight = `You weight ${weight * 0.165}lbs on the moon.`;
console.log(moonWeight); // => outputs "You weight 24.75lbs lbs on the moon."



// LIMITATIONS OF NORMAL STRINGS:
'I'm a string' // this results in a "SyntaxError: Unexpected identifier"
// Or, same problem as single quotes above:
"I"m a string"
// Due to the face JS can't parse the string correctly.
// Line 26 fix:
"I'm a string"
// Line 27 fix:
'I"m a string'
// Cannot write strings in single or double quotes if using the same single or double quotes
// inside that same string.
// Use template literals (backticks) to alwats avoid running into these issues:
`I"m a string` or `I'm a string`;

// What if we want text to span multiple lines:
const threeLines = "This is a string that spans across three lines.";
// With single or double quotes you have to use "\n" (newline character):
const threeLines = "This is a string\n that spans across\n three lines.";
// Use backtick syntax to avoid having to specify "\n", instead just write it like that:
const threeLines = `
  This is a string
  that spans across
  three lines.`;
