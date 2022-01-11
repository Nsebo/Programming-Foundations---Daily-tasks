//task 1

// console.log("Nsebo");
// console.log(7 + 8);

// current day of the week
// console.log("Monday");
// Console log 3 multiplied by 6
// console.log(3 * 6);
//Using the alert() method, alert your name
// alert("Nsebo");

//task 2
// var animal = "frog";
// console.log(animal);

// var delivered = true;
// console.log(delivered);

// var score = 12;
// console.log(score);

// var fullName = "John" + "Smith";
// console.log(fullName);

// var nameType = typeof fullName;
// console.log(nameType);

// class activities
// var pet = "cat";
// console.log(pet);

// var animal = "rab" + "bit";
// console.log(animal);

// var four = "4";
// console.log(four);

// var myFirstNumber = 4;
// var mySecondNumber = 4;
// var result = myFirstNumber + mySecondNumber;
// console.log(result);

// var lightIsOn = false;
// console.log(lightIsOn);

// var nseboIsGirl = 23;
// console.log(nseboIsGirl);

//class activities day 3
// var firstNo = 10;
// var secondNo = "10";
// console.log(firstNo === secondNo); //false

// var myNumber = 7;
// var myString = "dog";

// console.log(myNumber > 8);
// console.log(myNumber <= 8);
// console.log(myNumber === "dog");
// console.log(myNumber !== "cat");
// declare a logged in variable
// check if the user is logged in
// if the user is logged in i will show a nice message in the console
// else if the user is not logged in i will show a message too

// var isLoggedIn = true;

// if (isLoggedIn === true) {
// console.log("The user is logged in");
// } else {
//  console.log("The user is not logged in");
// }

// var inputIsValid = false;

// if (inputIsVaild === false); {
// console.log ("please fill in the email field");
// } else {
//console.log();
// }

// var myAge = 32;

// if (myAge > 34) {
// console.log("i am young");
// } else if (myAge === 32) {
// console.log("I am still very young");
// }

// var color = "red";
// switch (color) {
// case "red":
//  console.log("The chosen color is red");
// break;
// case "blue":
// console.log("The chosen color is blue");
// break;
// default:
// console.log("The color is not blue, red, green...");
// }

// task 3
// var age = 10;

// if (age >= 7) {
// console.log("Greater than or equal to 7");
// } else {
//console.log("less than 7");
// }

// var animal = "dog";

// if (animal === "parrot") {
// console.log("The animal has two legs");
// } else if (animal === "cat") {
//  console.log("The animal has four legs");
// } else if (animal != "parrot" || "cat") {
// console.log("The animal has an unknown amount of legs");
// }

//class activities day 4 loop

// count++ is the same as count = count + 1
// 1 >> 2
// 1 >> 2
// 1 >> 2
// for (var count = 1; count <= 20; count++) {
// console.log(count);
// }
// for (var i = 0; count <= 25; i++) {
// console.log(i);
// }

// for (var i = 5; i < 26; i++) {
// console.log(i);
// }

//array
// var cars = [
//  "BMW", // 0
// "MG", // 1
//   "Honda", // 2
// "",
//  21,
// ];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// var numberOfCars = cars.length;
// console.log(numberOfCars);

// var numberOfColors = ["red", "blue", "green", "yellow"];

// var profile = [{ name: "uzo" }, { surname: "oloh" }, { work: /// "student" }];

// log arrays not pratically

// var colors = ["red", "blue", "green", "yellow"];

// var numberOfColors = colors.length;

// for (var i = 0; i < numberOfColors; i++) {
//  console.log(colors[i]);
// }

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// var counter = 100;

// while (counter >= 10) {
// console.log("subtracting:, counter");
//}

// var myCard = 1624;

// if (myCard == 1001) {
// console.log("this is a theft not my pin");
// } else {
// console.log("leave me");
// }

// var animal1 = "monkey";
// var animal2 = "bear";
// var animal3 = "tiger";

// arrays

// var color = ["yellow", "blue", "white"];

// var numberOfColor = color.length;
// console.log("numberOfColor: ,numberOfColor");

// manipulating Arrays

// console.log(color.push("black"));
// color.pop();
//color.unshift("pink");
// color.shift();

// console.log(color);

//  arrays of objects
var planets = [
  "earth", //0
  "mars", // 1
  ["uzo", "oloh", "nsebo"], // 2
  ["bmw", "polo", "mg"], // 3
];

console.log(planets[0]);
console.log(planets[2][0]);
console.log(planets[2][2]);

// objects
var mobile = {
  name: "iphone",
  color: "black",
  ram: 20,
  storage: 500,
};

console.log(mobile.name);
console.log(mobile.storage);
console.log(mobile.ram);

console.log(mobile);

console.warn(mobile.storage);
console.info(mobile.storage);

var mobileShop = [
  {
    name: "iphone x5",
    color: "black",
  },
  {
    name: "nokia 3320",
    color: "red",
  },
];

// looping through an array of objects

for (var i = 0; i < mobileShop.length; i++) {
  var mobileName = mobileShop[i].name;
  console.log(mobileShop[i].name);
  console.log(mobileShop[i].color);
}
