/* First Part */

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1)
console.log(variableTypeTest2)

/* Second Part */
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

/* Third Part */
let nr1 = 2;
let nr2 = "2";
console.log("2 x 2 =",nr1*nr2);
console.log("2 + 2 =",nr1+Number(nr2));
