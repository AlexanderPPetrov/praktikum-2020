// var length = 16;
// var lastName = "Johnson";

// var cars = ["Saab", "Volvo", "BWM"];

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     address: {
//         street: "ul. Preslav",
//         number: 21,
//     },
//     pets: ["cat", "dog", "fish"],
// }

// var person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     address: {
//         street: "ul. Preslav",
//         number: 21,
//     },
//     pets: ["cat", "fish"],
// }

// function getPersonPets(person){
//     var petsString = '';
//     person.pets.forEach(function(pet){
//         petsString = petsString + " " + pet;
//     })
// }
// function checkPersonForDog(person){
//     let hasDog = false;
//     if(person.pets.indexOf("dog") !== -1){
//         hasDog = true;
//     }
//     return hasDog;
// }

// checkPersonForDog(person);
// console.log(hasDog)


// var dogCheckInterval = setInterval(function(){
//     var hasDog = checkPersonForDog(person2);
//     console.log('hasDog', hasDog);
// },3000);

//  clearInterval(dogCheckInterval);




const person = "Ivan";
const person2 = "Peter";
console.log(`${person} and ${person2} are friends`);

const sumTwoNumbers = (a, b = 3) => a + b;

const result = sumTwoNumbers(4);
console.log(result)

const testFunction = param => {
    console.log(param);
}

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const newArray = [...arr1, ...arr2];

const personMap  = {
    1: "Georgi",
    2: "Peter",
    3: "Stefan",
    4: "Stamat"
}

const namesArray = arr1.map(id => personMap[id])

const filteredNames = namesArray.filter(name => name !== "Stamat")

const namesObject = filteredNames.reduce((acc, current) => {
    const newRecord = {
        [current]: [1,2,3,4]
    }
    return {...acc, ...newRecord};
},{});

console.log(namesObject)

const testName = "Ivan";

const testObject = {
    testName,
}






