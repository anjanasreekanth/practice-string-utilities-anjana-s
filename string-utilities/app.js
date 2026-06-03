//Test the Module in app.js:

//app.js importing the stringUtils class for the modules
const testUtils = require('./stringUtils');

//testing capitalize function
console.log("Testing capitalize")
console.log(testUtils.capitalize("laptop"));
console.log(testUtils.capitalize(563));
console.log(testUtils.capitalize(""));

//testing reverse function
console.log("\nTesting reverse")
console.log(testUtils.reverse("launchcode"));
console.log(testUtils.reverse(563));
console.log(testUtils.reverse(""));

//testing contains function
console.log("\nTesting contains substring in the string")
console.log(testUtils.contains("Launchcode","code"));
console.log(testUtils.contains("grasshopper","code"));
console.log(testUtils.contains("launchcode",563));
console.log(testUtils.contains("","code"));