console.log("Hello form external javaScript");
var greeting = "Welcome to My Website!";
alert(greeting);

var question = "What is your favorite color?";
answer = prompt(question);
alert("Wow " + (answer) + " is my favorite color too!");

var greeting1 = "Okay, let's say you rented some movies for your kids; I'll present you the movie and then you give me the amount of days that you will rent the movies for your kids.";
alert(greeting1);
var movieLM = "Little Mermaid";
answer1 = prompt("How many days will you rent "+ movieLM);
var moviebB = "Brother Bear";
answer2 = prompt("How many days will you rent "+ moviebB);
var movieH = "Hercules";
answer3 = prompt("How many days will you rent "+ movieH);
var message = "Each movie will cost $3 per day";
alert(message);
var total = (answer1 *= 3) + (answer2 *= 3) + (answer3 *= 3);
alert("The total amount is $" + total);

var greeting2 = "Suppose you're working as a contractor for 3 companies: Google, Amazon, and Facebook. Each pays a different rate per hour. You have a total of 20 hrs to work this week and you cannot work more than 10 at one company. Use your hours wisely.";
alert(greeting2);
var google = "Google pays you $400 per hour, How many hours do you wish to work for Google (max = 10)";
answer1 = prompt(google);
var amazon = "Amazon pays you $380 per hour, How many hours do you wish to work for Amazon (max = 10)";
answer2 = prompt(amazon);
var facebook = "Facebook pays you $350 per hour, How many hours do you wish to work for Facebook (max = 10)";
answer3 = prompt(facebook)
var message1 = "Lets see how much you're gonna be paid this week";
alert(message1);
var total1 = Number(answer1 *= 400) + Number(answer2 *= 380) + Number(answer3 *= 350);
alert("The total amount you earned this week is $" + total1);

var classCapacity = 30;
var registeredStudents = 20;
var classDoesNOTConflict = confirm("Press ok if this class Does not conflict with your schedule.");
var canEnroll = (classCapacity > registeredStudents) && classDoesNOTConflict;
console.log("Student able to register for Class:" + canEnroll);

var offerNOTExpired = confirm("Press Ok if offer is not expired.");
var numberItems = prompt("How many items are you purchasing?");
var premiumMembership = true;
var offerApplied = (numberItems > 2 || premiumMembership) && offerNOTExpired;
console.log("Offer applied: " + offerApplied);


