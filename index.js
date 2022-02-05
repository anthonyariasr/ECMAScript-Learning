//--------------------------- ECMAScript 6 ---------------------------

//_______________________________________________________________________________________________________

// ** Default parameters **

//BEFORE es6
//function  newFuction(name, age, country){
//    var name = name || "Anthony";
//    var age = age || 21;
//    var country = country || "Costa Rica";
//    console.log(name, age, country);
//}

//AFTER es6"
function newFuctionES6(name = "Anthony", age = 21, country = "Costa Rica"){
    console.log(name, age, country);
}

//This one uses default parameters
newFuctionES6();

//This one recieves diferent parameters
newFuctionES6("Elon", 45, "USA");


//_______________________________________________________________________________________________________

// ** Concatenation **

let userName = "Anthony";
let phrase = "is learning ECMAScript 6";

//BEFORE es6
//let oldConcat = userName + " " + phrase;
//console.log(oldConcat);

//AFTER es6
//Using template literals
let newConcat = `${userName} ${phrase}`;
console.log(newConcat);


//_______________________________________________________________________________________________________

// **Multiple lines String **

//BEFORE es6
//let oldLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris\n"
//+ "posuere in, ullamcorper ut justo. Nullam id urna ut ex facilisis.";
//console.log(oldLorem);

//AFTER es6
//Using template literals
let newLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
posuere in, ullamcorper ut justo. Nullam id urna ut ex facilisis.`;
console.log(newLorem);


//_______________________________________________________________________________________________________

// ** Destrocturation **

let person = {
    "pName": "Anthony",
    "age": 21,
    "country": "Costa Rica" 
}

//BEFORE es6
//console.log(person.name, person.age, person.country);

//AFTER es6
let {pName, age, country} = person;
console.log(pName, age, country);


//_______________________________________________________________________________________________________

// ** Spread Operator **

let team1 = ["Karla", "Juan", "Valeria"];
let team2 = ["Alex", "Natalia", "Miguel"];

//We combine both teams to create a bigger team
let teamFinal = [...team1, ...team2];
console.log(teamFinal);


//_______________________________________________________________________________________________________

// ** let, var and const **

// VAR - is mainly used to declare global variables
// LET - has a block scope, meaning that it can't be accesed from anywhere else
// CONST - has a function scope but it can't be reassigned


//_______________________________________________________________________________________________________

// ** Object Parameters **
let nameParameter = "Anthony";
let ageParameter = 21;

//BEFORE es6
objBefore = {name: nameParameter, age: ageParameter}

//AFTER es6
objAfter = {nameParameter, ageParameter}
console.log(objAfter)


//_______________________________________________________________________________________________________

// ** Arrow Functions **
const students = [
    {studentName : "Karla", studentAge : 21},
    {studentName : "Oscar", studentAge : 22}
] 

//BEFORE es6
//let listOfNames = students.map(function(item){
//    console.log(item.studentName);
//})

//AFTER es6
let listOfNames2 = students.map(item => console.log(item.studentName));

//another way to declare arrow functions
//const listOfNames3 = (name, age) => {
//    ...
//}