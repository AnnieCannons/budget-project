 let person = "";
 let budget = 0;
 let needs = 0;
 let savings = 0;
 let wants = 0;
 

 
 let beginButton = document.getElementById("begin-button");
 beginButton.addEventListener("click", myBudget);

 let welcome = document.getElementById("welcome-message");
 welcomeButton.addEventListener("click", welcome)

function myBudget() {
    person = prompt ("What is your name");
    budget = prompt ("Whats your monthly salary?");
    needs = budget*.5;
    savings = budget*.2;
    wants = budget*.3;
    welcome.textContent = "Hello " + person + "! Here is your budget for the month: " + budget; 
    console.log("click");
    console.log(person);
};

let needsButton = document.getElementById("needs-button");
needsButton.addEventListener("click", inputYourNeeds);

function inputYourNeeds() {
    person = prompt ("how much do you spend each month on housing")
}


  

