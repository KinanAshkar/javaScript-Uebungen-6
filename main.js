//27 ( map, filter, reduce ):

// map:
let names = ["Hadi", "Ali", "Nancy", "Zain"];
const newArr = names.map((name, i) => `Hi ${name}, your num is ${i}`);
console.log(newArr);

// filter:
let numbers = [22, 33, 44, 55, 661, 2, 34, 3, 3, 5, 7, 5, 3];
let newResult = numbers.filter((num) => num == 3);
console.log(newResult);

// reduce:
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
let sumArray = num.reduce((acc,cur) => acc + cur);
console.log(sumArray);

//28
// map
// callback function inside map
let names = ["Ali", "Nancy", "Ahmad", "Zain"];
let newArr = names.map(function (name, i) {
  return `Hi ${name}, your order is ${i}`;
});
console.log(newArr);

// most used one
// Arrow function
let numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumArr = numbers.map((number) => `This is ${number}`);
console.log(newNumArr);

// callback function outside map
const names = ["Ali", "Nancy", "Ahmad", "Zain"];
const namesFunction = (name) => {
  return `Your name ${name}`;
};
const namesNewArr = names.map(namesFunction);
console.log(namesNewArr);

// filter
let filteredArr = names.filter((name) => name.length === 4);
console.log(filteredArr);

let nightPrices = [300, 44, 53, 65433, 665, 33, 10];
let filteredPrices = nightPrices.filter((price) => price >= 10 && price <= 100);
console.log(filteredPrices);

// reduce
let ages = [22, 33, 42, 5, 44, 2, 34, 56, 78, 10];
// accumulator = acc
// currentValue = cur
let reducedAges = ages.reduce((acc, cur) => acc + cur);
console.log(reducedAges / ages.length);

let easyArr = [1, 1, 1, 1];
let reducedEasyArr = easyArr.reduce((acc, cur) => acc + cur, 100);
console.log(reducedEasyArr);

// 29
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const newArray = arrayOfNumbers.map((number)=> number+1);
console.log(newArray);

// 30
/* Filter Evens
Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
Examples:
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6] */

const filterEvens = (arr)=> {
    return arr.filter((element)=> element%2== 0)
}
console.log(filterEvens([22,2,31,110,6,13]));
