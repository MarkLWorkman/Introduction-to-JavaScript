/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge;
age = 18;
if (age > 18) {
    votingAge = true;
}
else {
    votingAge = false;
}
console.log(votingAge);
//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let a=18;
let b=17;
if (a < b) {
  a--;
}
else {
  a++;
}
console.log(a);
//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let a = "1999";
console.log(Number(a));
//Task d: Write a function to multiply a*b 
function myFunct() {
    let a=1;
    let b=2;
    return a*b;
  }
  myFunct();
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function dogYears() {
    let years=31;
    let dogYears=7;
    return years*dogYears;
  }
  dogYears();
/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function feeder() {
  let age = 15;
  let weight = 100;
  if (age < 12) {
    if (age >= 2 && age < 5) {
      return weight * .10;
    } else if (age <= 4 && age < 8) {
      return weight * .05;
    } else {
      return weight * .04;
    }
  }
  if (age >= 12) {
    if (weight >= 1 && weight < 6) {
      return weight * .05;
    } else if (weight >= 6 && weight < 11) {
      return weight * .04;
    } else if ( weight >= 11 && weight < 16) {
      return weight * .03;
    } else {
      return weight * .02;
    }
  }
}
feeder(); 
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function RPS(){
  let choice = "Scissors";
  let comp = Math.round(Math.random() *3);
  if (comp === 1) {
    comp = "Rock";
  }
  else if (comp === 2) {
    comp = "Paper";
  }
  else {
    comp = "Scissors";
  }
  if (choice === "Rock") {
    if (comp === "Scissors") {
      return "You win!";
    } else if (comp === "Paper") {
      return "You lose!";
    } else {
      return "You tied";
    }
  }
  if (choice === "Paper") {
    if (comp === "Rock") {
      return "You win!";
    } else if (comp === "Scissors") {
      return "You lose!";
    } else {
      return "You tied";
    }
  }
  if (choice === "Scissors") {
    if (comp === "Paper") {
      return "You win!";
    } else if (comp === "Rock") {
      return "You lose!";
    } else {
      return "You tied";
    }
  }
}

RPS();
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function KM() {
  let km = 20;
  return km/1.609344
}
KM();
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
 function FC() {
   let feet = 30;
   return feet*30.48;
 } 
 FC();
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
let bottles;
for (i = 99; i >= 1; i = i - 1) 
{
    if (i == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(i+" "+bottles+" of soda on the wall.");
    if (i < 99) {
        console.log("");
        console.log(i+" "+bottles+" of soda on the wall.");
    }
    console.log(i+" "+bottles+" of soda.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (i == 1) {
        console.log("No more bottles of soda on the wall.");
    }
} 
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grade() {
    let a = 99;
    if (a >= 90 && a <= 99) {
      return "A";
    }
    else if (a >= 80 && a <= 89) {
      return "B";
    }
    else if (a >= 70 && a <= 79) {
      return "C";
    }
    else if (a >= 60 && a <= 69) {
      return "D";
    }
    else {
      return "F";
    }
  }
  grade();
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





