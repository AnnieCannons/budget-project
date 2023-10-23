let person = "";
let budget = 0;
let savings = 0;
let needs = 0;
let wants = 0;

let beginButton = document.getElementById("begin-button");
beginButton.addEventListener("click", myBudget);
//budget/start paragraphs
let budgetInfoElement = document.getElementById("budget-info");
let printNeeds = document.getElementById("needs");
let printSavings = document.getElementById("savings");
let printWants = document.getElementById("wants");
//needs paragraphs
let updatedNeedsInfo = document.getElementById("needs-info-needs");
let updatedSavingsInfo = document.getElementById("needs-info-savings");
let updatedWantsInfo = document.getElementById("needs-info-wants");
let printOverBudget = document.getElementById("needs-info");
let printWithinBudget = document.getElementById("needs-info");
//emergency fund paragraphs
let emergencyTableNeeds = document.getElementById("emergency-fund-needs");
let emergencyTableSavings = document.getElementById("emergency-fund-savings");
let emergencyTableWants = document.getElementById("emergency-fund-wants");
let emergencyTableEmergency = document.getElementById("emergency-fund-emergency")



function myBudget() {
    person = prompt("Enter your name");
    budget = prompt("Enter your monthly income");
    needs = 0.5 * budget;
    savings = 0.2 * budget;
    wants = 0.3 * budget;
   
    budgetInfoElement.textContent = `Hello ${person}! Here is your budget for this month:`;
    printNeeds.textContent = `Needs: ${needs}`;
    printSavings.textContent = `Savings: ${savings}`;
    printWants.textContent = `Wants: ${wants}`;
};


let food = 0;
let housing = 0;
let bills = 0;
let healthcare = 0;
let transportation = 0;
let otherEssentials = 0;

inputNeedsButton = document.getElementById("needs-button");
inputNeedsButton.addEventListener("click", inputYourNeeds);

function inputYourNeeds() {
    food = prompt("Enter total monthly food costs");
    housing = prompt("Enter total monthly housing costs");
    bills = prompt("Enter total monthly bill costs");
    healthcare = prompt("Enter total monthly healthcare costs");
    transportation = prompt("Enter total monthly transportation costs");
    otherEssentials = prompt("Enter total monthly costs for other essentials");
    needs = needs - food - housing - bills - healthcare - transportation - otherEssentials;
    if (needs < 0) {
     
       
        printOverBudget.textContent = `You are over your needs budget by ${needs}. You will need to subtract from your wants budget for the month.`;
        wants = needs + wants  ;
        updatedNeedsInfo.textContent = `Needs: ${needs}`;
        updatedSavingsInfo.textContent = `Savings: ${savings}`;
       updatedWantsInfo.textContent = `Wants: ${wants}`;
    } else {
        printWithinBudget.textContent = `You are doing great!`;
        updatedNeedsInfo.textContent = `Needs: ${needs}`;
        updatedSavingsInfo.textContent = `Savings: ${savings}`;
        updatedWantsInfo.textContent = `Wants: ${wants}`;
    };
};

let emergencyButton = document.getElementById("emergency-button");
emergencyButton.addEventListener("click", emergencyFund);

function emergencyFund() {
   let funds = prompt("Enter a monthly amount you would like to put towards your Emergency Fund.");
   if (funds > savings) {
    funds = prompt("That’s too much. Try a smaller amount");
    savings = savings - funds;
   } else {
    savings = savings - funds;
   }
   emergencyTableNeeds.textContent = `Needs: ${needs}`;
   emergencyTableSavings.textContent = `Savings: ${savings}`;
   emergencyTableWants.textContent = `Wants: ${wants}`;
   emergencyTableEmergency.textContent = `Emergency: ${funds}`;
};

let startOverButton = document.getElementById("start-over-button");
startOverButton.addEventListener("click", startOver);

    function startOver() {
    person = "";
    budget = 0;
    savings = 0;
    needs = 0;
    wants = 0;

    budgetInfoElement.textContent = ""
    printNeeds.textContent = ""
    printSavings.textContent = ""
    printWants.textContent = ""

    updatedNeedsInfo.textContent = ""
    updatedSavingsInfo.textContent = ""
    updatedWantsInfo.textContent = ""
    printOverBudget.textContent = ""
    printWithinBudget.textContent = ""

    emergencyTableNeeds.textContent = ""
    emergencyTableSavings.textContent = ""
    emergencyTableWants.textContent =
    emergencyTableEmergency.textContent = ""

};