//--------------------------- ECMAScript 6 ---------------------------

// ** Default parameters **

//BEFORE es6
function  newFuction(name, age, country){
    var name = name || "Anthony";
    var age = age || 21;
    var country = country || "Costa Rica";
    console.log(name, age, country);
}

//AFTER es6"
function newFuctionES6(name = "Anthony", age = 21, country = "Costa Rica"){
    console.log(name, age, country);
}

//This one uses default parameters
newFuctionES6();

//This one recieves diferent parameters
newFuctionES6("Elon", 45, "USA");




// ** Concatenation **

let userName = "Anthony";
let phrase = "is learning ECMAScript 6";

//BEFORE es6
let oldConcat = userName + " " + phrase;
console.log(oldConcat);

//AFTER es6
//Using template literals
let newConcat = `${userName} ${phrase}`;
console.log(newConcat);




// **Multiple lines String **

//BEFORE es6
let oldLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris\n"
+ "posuere in, ullamcorper ut justo. Nullam id urna ut ex facilisis.";
console.log(oldLorem);

//AFTER es6
//Using template literals
let newLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris
posuere in, ullamcorper ut justo. Nullam id urna ut ex facilisis.`;
console.log(newLorem);




// ** Destrocturation **
