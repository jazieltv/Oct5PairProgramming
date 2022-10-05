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
  //Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
//   function isPrime(numbers)
//   {
//       if (numbers < 2)
//           return notPrime;
  
//       if (numbers == 2)
//           return prime;

//           let prime = [];
//           let notPrime = [];
  
//       var maxDiv = Math.sqrt(numbers);
  
//       for(var i = 2; i <= maxDiv; i++)
//       {
//           if (numbers % i == 0)
//           {
//             prime.push(numbers[i]);
//         } else {
//           notPrime.push(numbers[i]);
//           }
//       }
  
//       const returnObject = {
//         prime,
//         notPrime,
//       };
    
//       return returnObject;
//   }
//   console.log(isPrime([2,3,7,10,6,5]))
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
// const vowels = ["a", "e", "i", "o", "u"];
//  var x = prompt("enter a letter")
// if (vowels.indexOf(x.toLowerCase()) >= 0){
//     console.log("This is a vowel")
// } else {
//     console.log("not a vowel")
// }

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
//Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the 
//object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods 
//should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
let car = {make:"Audi", model:"A3", year:"2006", mileage:115217, color:"Blue",
driveToWork: function () {
    console.log('driveToWork'); newMileage: function() {
    return this.mileage + drive
}}
drive(distance) {
    console.log(`old mileage ${mileage}`);
    mileage = (this.mileage += distance);
    console.log(`new mileage ${mileage}`);
}
}
// const ToWork = 33;
// const AroundTheWorld = 24000;
// const runErrands = 30;

drive.ToWork()