/* Creating Arrays */
/*
let arr1 = ["Purple", "Green", "Yellow"];
console.log(arr1);

let arr2 = ["hi there", 5, true];
console.log(`This array is [${arr2}], ${arr2[0]} is a ${typeof arr2[0]}, ${arr2[1]} is a ${typeof arr2[1]},${arr2[2]} is a ${typeof arr2[2]}`);
*/

/* Practice 1 */
// Arrays
/*
let shoppArr = ["Milk", "Bread", "Apples"];
console.log(shoppArr);
console.log(shoppArr.length);
shoppArr[1] = "Bananas";
console.log(shoppArr);
shoppArr.push("Cornflakes", "Limes");
console.log(shoppArr);
shoppArr.splice(1,2, "Beer", "Wine");
console.log(shoppArr);
let shoppArr2 = ["soap", "laundry liquid", "wipes"]
console.log(shoppArr2);
shoppArr = shoppArr.concat(shoppArr2);
console.log(shoppArr);
*/

/* Objects */
// Exercise 1
/*
let arr = [0,1.2];
console.log(typeof arr);

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};
console.log(dog.dogName);
dog["dogName"] = "Brutus";
console.log(dog.dogName);

let variable = "breed";
console.log(dog[variable]);

dog[variable] = "labrador";
console.log(dog[variable]);
*/

// Objects and Arrays
let company = { companyName: "Health Candy",
            activities: ["food manufacturing", "improving kids health", "manufacturing toys"],
            addresses: [{
                street: "2nd street",
                number: "123",
                zipcode: "33116",
                city: "Miami",
                state: "Florida"
            },
            {
                street: "3rd street",
                number: "456",
                zipcode: "98765",
                city: "Houston",
                state: "Texas"
            }],
            yearOfEstablishment: "2021",
}

console.log(company.addresses[0].street);

company.addresses[0].street = "5th Street";
console.log(company.addresses[0].street);

