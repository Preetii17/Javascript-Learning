// VARIABLES IN JAVASCRIPT

// DEFINITION
// Variables are containers used to store data in javascript.

// There are three ways to declare variables:
// 1. var   - Function scoped (older way)
// 2. let   - Block scoped (recommended for values that change)
// 3. const - Block scoped (used for values that should not change)

//SYNTAX
// var variableName = value;
// let variableName = value;
// const variableName = value;

//Examples

//1. var

var language="javascript";
console.log(language);  // output: javascript

//2. let

let name="Emma";
console.log(name);      // output: Emma

//3. const

const age=22;
console.log(age);       // output: 22


// Best Practice

//  Use const by default.
//  Use let if the value needs to change.
//  Avoid using var in modern JavaScript.
