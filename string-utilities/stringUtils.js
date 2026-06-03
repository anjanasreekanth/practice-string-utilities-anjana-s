/*Part 1: Initial Setup
1. Create a new project folder named string-utilities.
2. Inside the folder, create the following files:
○ stringUtils.js: This will be the custom module.
○ app.js: This will be the main file where the module is tested.
Part 2: Practicing String Utilities
1. Create the stringUtils.js Module:
○ Define and export the following functions:
■ capitalize(str): Converts the first letter of a string to
uppercase.
■ reverse(str): Reverses the characters in a string.
■ contains(str, substr): Checks if a substring exists within a
string and returns true or false.
2. Test the Module in app.js:
○ Import the stringUtils.js module into app.js.
○ Test each function with different string inputs and log the results to
the console.
3. Ensure Reusability:
○ Design the module functions to handle edge cases, such as empty
strings or undefined inputs.
*/

//defining the custom module with functions capitalize, reverse and contains

//converting first letter of giving string to uppercase
function capitalize(str) {
    //validating string to capitalize
    if (!str || typeof str !== "string" || str == "") {
        return "Enter valid input"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Reversing the string
function reverse(str) {
        //validating string to reverse
    if (!str || typeof str !== "string" || str == "") {
        return "Enter valid input"
    }
    return str.split('').reverse().join('');
}

//checking if the string contains the given substring.
function contains(str, subStr) {
            //validating string 
    if (!str || typeof str !== "string" || str == "") {
        return "Enter valid string"

    }
     if (!subStr || typeof subStr !== "string" || subStr == "" ) {
                return "Enter valid substring"
     }

return str.includes(subStr);
}
/*
console.log(contains("javascript","ript"));
console.log(contains("JAVASCRIPT","ript"));
console.log(contains("javascript","abcd"));
console.log(contains("javascript",21));
*/

//Exporting the modules for others to use
module.exports = {
    capitalize,reverse,contains
};