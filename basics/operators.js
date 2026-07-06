// OPERATORS IN JAVASCRIPT

//DEFINITION
//Operators are special symbols used to perform operations on variables and values.

//EXAMPLE:
let a=10;
let b=5;

//1.Arithmatic Operators
console.log(a+b);    // 15 (Addition)
console.log(a - b);   // 5  (Subtraction)
console.log(a * b);   // 50 (Multiplication)
console.log(a / b);   // 2  (Division)
console.log(a % b);   // 0  (Modulus - Remainder)
console.log(a ** 2);  // 100 (Exponentiation)


//2.Assignment operators
let x= 10;

x+=5;       //x=x+5
console.log(x); // 15

x -= 3;   // x = x - 3
console.log(x); // 12

x *= 2;   // x = x * 2
console.log(x); // 24

x /= 4;   // x = x / 4
console.log(x); // 6

x %= 4;   // x = x % 4
console.log(x); // 2


//3.Comparison Operators
console.log(10 == "10");    // true (Only compares value)
console.log(10 === "10");   // false (Compares value and datatype)
console.log(10 != 5);       // true
console.log(10 !== "10");   // true
console.log(10 > 5);        // true
console.log(10 < 5);        // false
console.log(10 >= 10);      // true
console.log(10 <= 5);       // false


//4.Logical Reasoning
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age >= 18 || false);      // true
console.log(!hasLicense);             // false



// 5. Increment & Decrement Operators
let num = 5;

console.log(num++); // 5 (Post Increment)
console.log(num);   // 6

console.log(++num); // 7 (Pre Increment)

console.log(num--); // 7 (Post Decrement)
console.log(num);   // 6

console.log(--num); // 5 (Pre Decrement)



// 6. String Concatenation
let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName);
// John Doe
