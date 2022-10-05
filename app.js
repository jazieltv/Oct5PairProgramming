//Easy 1
//Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

function evenOrOdd(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }
      const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }

  console.log(evenOrOdd([4,6,12,7,9]))

  //Easy 2
var arr = new Array(12, 5, 8, 9, 13, 7, 16)
function findPrime(arr) {
    var prime = [];
    var count = 0;
    for(var i=0;i<arr.length;i++){
        var flag = 0;
        for(var j=2;j<=arr[i]/2;j++){
            if(arr[i]%j===0){
                flag = 1;
                break;
        }
    }    
if(flag===0){
    prime[count++] = arr[i];
}
    }
console.log('Prime numbers are: ' + prime);
}
findPrime(arr);

//medium
//Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel
const vowels = ["a", "e", "i", "o", "u"];
 var x = prompt("enter a letter")
if (vowels.indexOf(x.toLowerCase()) >= 0){
    console.log("This is a vowel")
} else {
    console.log("not a vowel")
}

//MEDIUM (2)
//Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 
function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}
  compare("jaziel", "azjeil");

//medium3
//Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 
// program to find the HCF or GCD of two integers

let gdc;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

for (let i = 1; i <= number1 && i <= number2; i++) {


    if( number1 % i == 0 && number2 % i == 0) {
        gdc = i;
    }
}


console.log(`GDC of ${number1} and ${number2} is ${gdc}.`);

//medium4

class Car {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = 0;
  }
  drive(distance) {
    console.log(`Old Mileage: ${this.mileage}`);
    this.mileage += distance;
    console.log(`New Mileage: ${this.mileage}`);
    return this;
  }
}

let Audi = new Car();
"Audi", "A3", 2006, "blue", 211234;

let driveToWork = 30;
let driveAroundTheWorld = 24000;
let runErrands = 30;

Audi.drive(driveToWork);
Audi.drive(driveAroundTheWorld);
Audi.drive(runErrands);

//hard


const regex = /^/[a-z]/$/igm;
const macthing = braces => regex.test(braces)
  ? macthing(braces.replace(regex, ''))
  : '' === braces

console.log(macthing("{]")) 
console.log(macthing("{}")) 

//hectors
brackets = (str) => {
    const brackets = ["{}", "[]", "()"];
    brackets.forEach((e) =>
      e === `${str.slice(0, 1)}${str.slice(-1)}` ? console.log(true) : console.log(false)
    );
  };
  
  brackets("{hello world}");
