// DATA TYPES IN JAVASCRIPT

// DEFINITION
// A data type defines the kind of value that a variable can store.
// javascript is a dynamoically typed language which means you don't need to specify the data type while declaring a variable.

// CATEGORIES OF DATA TYPES
//1. Primitive data types
//2.Non-Premitive data types

// Primitive Data Types

// 1.String

let name="Emma";
console.log(name);
console.log(typeof name);       

//output: Emma
// string

// 2. Number
let age = 22;
console.log(age);
console.log(typeof age);

// output:
// 22
// number

// 3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Output:
// true
// boolean


// 4. Undefined
let city;
console.log(city);
console.log(typeof city);

// Output:
// undefined
// undefined

// 5. Null
let value = null;
console.log(value);
console.log(typeof value);

// Output:
// null
// object 


// 6. BigInt
let population = 1234567890123456780n;
console.log(population);
console.log(typeof population);

// Output:
// 1234567890123456780n
// bigint



// 7. Symbol
let id = Symbol("id");
console.log(id);
console.log(typeof id);

// Output:
// Symbol(id)
// symbol

// Non Primitive Data Types

// Object
let student = {
    name: "Emma",
    age: 22
};

console.log(student);
console.log(typeof student);

// Output:
// { name: 'Emma', age: 22 }
// object

// Array
let fruits = ["apple", "mango", "grapes"];

console.log(fruits);
console.log(typeof fruits);

// Output:
// [ 'apple', 'mango', 'grapes' ]
// object

// Function
function greet() {
    console.log("Hello!");
}
greet();
console.log(typeof greet);

// Output:
// Hello!
// function


// Important Notes
//  JavaScript has 7 primitive data types.
//  Objects, Arrays and Functions are reference (non-primitive) types.
//  Arrays are technically objects.
//  typeof null returns "object" because of a historical JavaScript bug.