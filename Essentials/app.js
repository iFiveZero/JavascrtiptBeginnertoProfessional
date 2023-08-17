/* First Part */
/*
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1)
console.log(variableTypeTest2)
*/
/* Second Part */
/*
let str = "Hello";
let nr = 7;
let bigNr = 123456789n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknwon = null;

console.log("str type:", typeof(str));
console.log("nr type:", typeof(nr));
console.log("bigNr type:", typeof(bigNr));
console.log("bool type:", typeof(bool));
console.log("sym type:", typeof(sym));
console.log("undef type:", typeof(undef));
console.log("unknown type:", typeof(unknwon));
*/
/* Third Part */
/*
let nr1 = 2;
let nr2 = "2";
console.log("2 x 2 =",nr1*nr2);
console.log("2 + 2 =",nr1+Number(nr2));
*/

/* Operators */
/*
let name = prompt("What is your name?");
let age = prompt("How old are you?");
let isStudent = prompt("Can you code Javascript? (true/false)");

console.log("Hello, my name is " + name + ", I am " + age + " years old, and I can code Javascript: " + isStudent + ".");
*/

/* Subtraction */
/*
let nbr1 = 20;
let nbr2 = 4;
let str1 = "Hi";
let nbr3 = 3;
let result1 = nbr1 - nbr2;
let result2 = str1 - nbr3;
console.log(result1, result2);
*/

/* Multiplication */
/*
let nbr1 = 15;
let nbr2 = 10;
let str1 = "Hi";
let nbr3 = 3;
let result1 = nbr1 * nbr2;
let result2 = str1 * nbr3;
console.log(result1, result2);
*/

/* Multiplication */
/*
let nbr1 = 30;
let nbr2 = 5;
let result1 = nbr1 / nbr2;
console.log(result1);
*/


/* Exponentation */
/*
let nbr1 = 2;
let nbr2 = 3;
let result1 = nbr1 ** nbr2;
console.log(result1);
*/

/* Modulus */
/*
let nbr1 = 10;
let nbr2 = 3;
let result1 = nbr1 % nbr2;
console.log(`${nbr1} % ${nbr2} = ${result1}`);

let nbr3 = 8;
let nbr4 = 2;
let result2 = nbr3 % nbr4;
console.log(`${nbr3} % ${nbr4} = ${result2}`);

let nbr5 = 10;
let nbr6 = 3;
let result3 = nbr5 % nbr6;
console.log(`${nbr5} % ${nbr6} = ${result3}`);
*/

/* Unary Operators */
/*
let nbr1 = 4;
nbr1++;
console.log(nbr1);

let nbr2 = 4;
nbr2--;
console.log(nbr2);
*/

/* Prefix and PostFix Operators */
/*
let nbr1 = 4;
console.log(`Postfix ${nbr1++}`);
console.log(`With unary applied ${nbr1}`);

let nbr2 = 4;
console.log(`Prefix ${++nbr2}`);
console.log(`With unary applied ${nbr2}`);

/*
let nbr2 = 4;
nbr2--;
console.log(nbr2);
*/

/* Pythagurus Example */
/*
let a = prompt("Please enter the triangle base measurement");
let b = prompt("Please enter the triangle height measurement");

let c = Math.sqrt(a*a + b*b);
alert(`The Hyportunuse is ${c}`);
console.log(c);
*/

/* Assignment Operators */
/*
let a = 10; //prompt("Please enter a value for a");
let b = 12; //prompt("Please enter a value for b");
let c = 30; //prompt("Please enter a value for c");

b += a;
a /=c;
c = c % b;
console.log(`a = ${a}, b = ${b}, c = ${c}`)
*/

/* Comparison Operators */
let x = 5;
let y = "5";

console.log(x === y);