var cities = ["Mumbai", "Delhi", "Pune", "Nashik", "Chennai", "Kolkata", "Jaipur"];

console.log("Original Array:");
console.log(cities);

var city1 = prompt("Enter first new city:");
var city2 = prompt("Enter second new city:");

cities.push(city1);
cities.push(city2);

console.log("After adding two cities:");
console.log(cities);

console.log("First five cities:");
console.log(cities.slice(0, 5));

cities.pop();

console.log("After removing last city:");
console.log(cities);

console.log("Mumbai exists:");
console.log(cities.includes("Mumbai"));

console.log("Index of Delhi:");
console.log(cities.indexOf("Delhi"));

console.log("Final Array:");
console.log(cities);