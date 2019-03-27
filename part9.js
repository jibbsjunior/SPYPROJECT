// prompt questions to users
var firstName = prompt("Hello and Welcome. Please enter your first name");
var lastName = prompt("Enter your last name please: ");
var age = prompt("what is your age: ");
var heigth = prompt("What is your height: ");
var petName = prompt("What is your Pet Name: ");
alert("thanks so much for the information")

// Conditions to check
var nameCond = null;
var ageCond = null;
var heigthCond = null;
var petNameCond = null;

// Logic


// Name Condition
if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
    nameCond = false;
}

// Age Condition
if (age >20 && age <30) {
    ageCond = true;
} else {
    ageCond = false;
}

// Height Condition
if (heigth>=180) {
    heigthCond = true;
} else {
    heigthCond = false;
}

// Pet Name Condition
if (petName[petName.length-1] === "y") {
    petNameCond = true;
} else {
    petNameCond = false;
}

// Check All Codition
if (nameCond && ageCond && heigthCond && petNameCond) {
    console.log("Welcome spy!!!");
} else {
    console.log("Nothing is here for you!!!");
}
