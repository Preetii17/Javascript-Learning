// TYPE CONVERSION IN JAVASCRIPT

//DEFINITION
// Type Conversion is the process of converting one datatype into another datatype.


// JavaScript supports:
// 1. Explicit Type Conversion (Manual)
// 2. Implicit Type Conversion (Automatic)

// 1. String to Number

let str = "1234";
console.log(Number(str));       //1234
console.log(parseInt(str));     //1234
console.log(parseFloat("12.5"));    //12.5

console.log(typeof Number(str));    //number


// 2. Number to String
let num = 100;

console.log(String(num));      // "100"
console.log(num.toString());   // "100"

console.log(typeof String(num)); // string


// 3. Boolean Conversion
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false

console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false

console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      //false


// 4. String Conversion
console.log(String(true));       // "true"
console.log(String(false));      // "false"
console.log(String(null));       // "null"
console.log(String(undefined));  // "undefined"


//5. Implicit Type Conversion 
// JavaScript automatically converts datatypes when needed.
console.log("5"+ 2);    //"52" (number becomes string)
console.log("5"- 2); // 3
console.log(true + 1); // 2


// 6. Unary Plus (+)
// Converts a string into a number.
let value = "20";
console.log(+value) //20
console.log(typeof +value); //number


// 7. Number() vs parseInt() vs parseFloat()
console.log(Number("25"));       // 25
console.log(parseInt("25px"));   // 25
console.log(parseFloat("25.8")); // 25.8

console.log(Number("25px"));     // NaN


// 8. NaN (Not a Number)
console.log(Number("abc")); //NaN
console.log(typeof NaN);    //number



// 9. Truthy and Falsy Value
// Falsy Values
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Truthy Values
console.log(Boolean(1));          // true
console.log(Boolean("JavaScript")); // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true



// SUMMARY
// String → Number
// Number("123")
// parseInt("123")
// parseFloat("12.5")

// Number → String
// String(100)
// num.toString()

// Boolean Conversion
// Boolean(value)

// Implicit Conversion
// "5" + 2  -> "52"
// "5" - 2  -> 3
// true + 1 -> 2


// NOTES

// Type Conversion (Explicit): Done manually using functions like Number(), String(), and Boolean().
// Type Coercion (Implicit): JavaScript automatically converts data types during operations.
// Number("123") → 123
// Number("abc") → NaN
// parseInt("25px") → 25
// Number("25px") → NaN
// typeof NaN is "number" (a common interview question).
// Empty string (""), 0, null, undefined, and NaN are falsy values.
// Non-empty strings, objects ({}), arrays ([]), and non-zero numbers are truthy values.