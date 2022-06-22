// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
let name = "Hanz"
let homeWorld= " Krieg"
let rank = "Death Korps Commissar"
let faction = "The Death Korps of Krieg"

// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
let xenosKills= 10
let chaosKills= 5
let regimentsLed = 2

// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
let confirmedToursOfDuty = ["Vraks","Krieg", "Tarsis"]

// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
let acceptingMedal= false
if (acceptingMedal== true) {
    response= "Yes"
}
else {
    response = "No";
    reason= "Kriegsman give their life for the Emperor, we turn our backs on any commendations.";
}

// TODO: Print your story to the console.
// YOUR CODE GOES HERE

console.log("Primarch: good day " + name + " where are you from?" );
console.log(rank+ " " +name+  ": I am from" +homeWorld+ " and I am a member of " + faction);
console.log("Primarch: I see you have an excellent resume, a total of "+xenosKills+chaosKills+"kills, a leader of" +regimentsLed+ "and" +toursOfDuty.length+ "tours of duty.")
console.log(rank+ " "+name+": all for the Emperor")
console.log("Primarch: do you accept this award of bravery?")
console.log(rank+ " "+name+ ": "+ response + ", " +reason)