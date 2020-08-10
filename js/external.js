// console.log("Hello form external javaScript");
// var greeting = "Welcome to My Website!";
// alert(greeting);
//
// var question = "What is your favorite color?";
// answer = prompt(question);
// alert("Wow " + (answer) + " is my favorite color too!");
//
// var greeting = "Okay, let's say you rented some movies for your kids; I'll present you the movie and then you give me the amount of days that you will rent the movies for your kids.";
// alert(greeting);
// var movieLM = "Little Mermaid";
// answer1 = prompt("How many days will you rent "+ movieLM);
// var moviebB = "Brother Bear";
// answer2 = prompt("How many days will you rent "+ moviebB);
// var movieH = "Hercules";
// answer3 = prompt("How many days will you rent "+ movieH);
// var message = "Each movie will cost $3 per day";
// alert(message);
// var total = (answer1 *= 3) + (answer2 *= 3) + (answer3 *= 3);
// alert("The total amount is $" + total);

var greeting = "Suppose you're working as a contractor for 3 companies: Google, Amazon, and Facebook. Each pays a different rate per hour. You have a total of 20 hrs to work this week and you cannot work more than 10 at one company. Use your hours wisely.";
alert(greeting);
var google = "Google pays you $400 per hour, How many hours do you wish to work for Google (max = 10)";
answer1 = prompt(google);
var amazon = "Amazon pays you $380 per hour, How many hours do you wish to work for Amazon (max = 10)";
answer2 = prompt(amazon);
var facebook = "Facebook pays you $350 per hour, How many hours do you wish to work for Facebook (max = 10)";
answer3 = prompt(facebook)
var message = "Lets see how much you're gonna be paid this week";
alert(message);
var total = Number(answer1 *= 400) + Number(answer2 *= 380) + Number(answer3 *= 350);
alert("The total amount you earned this week is $" + total);

