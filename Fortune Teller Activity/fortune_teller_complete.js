// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE

let fortuneNumber = 0
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE


if (fortuneNumber >= 0 && fortuneNumber <=3){
    console.log(" your fortune levels suck. you have a low fortune");
}
else if(fortuneNumber >3 && fortuneNumber <= 7){
    console.log(" your fortune levels are average");
}
else if (fortuneNumber >7 && fortuneNumber <=10){
    console.log(" your fortune levels are high! congrats! :)")
}
else {
    console.log(" fortune out of range, cannot be read correctly ")
}