let person = '';
let budget = 0;
let needs = 0;
let savings = 0;
let wants = 0;
let output = ''
let outputNeeds = ''
let outputWants = ''
let outputSavings = ''
let food = ""
let rent = ''
let bills = ''
let healthcare = ''
let transportation = ''
let essentials = ''
let funds = ''

// button variable
let beginButton = document.getElementById("begin-button")
let inputNeedsButton = document.getElementById('inputNeedsButton')
let emergencyButton = document.getElementById('emergencyFundsButton')
let startOverButton = document.getElementById('startOver')


// buttons 
beginButton.addEventListener("click", mybudget);
inputNeedsButton.addEventListener('click', inputNeeds);
emergencyButton.addEventListener("click", emergencyFunds);
startOverButton.addEventListener('click', startOver);



function mybudget() {
    person = prompt('Enter Name or ID:')
    budget = prompt('enter your monthly salary:')
    console.log(budget)
    needs = budget * 0.5
    savings = budget * 0.2
    wants = budget * 0.3


    outputNeeds += `Needs: $ ${needs}`
    outputSavings += `savings: $ ${savings}`
    outputWants += `wants: $ ${wants}`
    document.getElementById('part1').innerHTML = `hello ${person} here is your budget for this month: </br> Needs: $ ${needs} </br>savings: $ ${savings}</br>wants: $ ${wants}`
}
function inputNeeds() {
    food = prompt("How much do you spend on food?")
    rent = prompt("How much do you spend on rent?")
    bills = prompt('How much do you spend on bills?')
    healthcare = prompt('How much do you spend on healthcare?')
    transportation = prompt('How much do you spend on transportation')
    essentials = prompt('how much do you spend on other essentials?')
    needs = needs - food - rent - bills - healthcare - transportation - essentials
    document.getElementById('part2').innerHTML = `Remaining amount for need:${needs}`
    if (needs < 0) {
        document.getElementById('part2').innerHTML = `you are $${needs} over budget `
        needs = wants - needs

    } else {
        document.getElementById('part2').innerHTML = `Remaining amount for</br><strong> need:$${needs}</br> wants: $ ${wants}</br> savings: $ ${savings}</strong></br>YOU ARE DOING GREAT!! `
    }

}
function emergencyFunds() {
    document.getElementById('part3_B').innerHTML = ""
    funds = prompt('how much are you putting away in your emergency funds?');
    if (funds > savings) {
        funds = prompt('this is to much, please try a smaller amount.');
        savings = savings - funds
        document.getElementById('part3').innerHTML = `<strong>funds:$${funds}</br> Needs: $ ${needs} </br>savings: $ ${savings}</br>wants: $ ${wants}</strong>`
    } else {

        savings = savings - funds
        document.getElementById('part3').innerHTML = `<strong>funds:$${funds}</br> Needs: $ ${needs} </br>savings: $ ${savings}</br>wants: $ ${wants}</strong>`

    }
}

function startOver() {
    person = '';
    budget = 0;
    needs = 0;
    savings = 0;
    wants = 0;
    output = ''
    outputNeeds = ''
    outputWants = ''
    outputSavings = ''
    food = ""
    rent = ''
    bills = ''
    healthcare = ''
    transportation = ''
    essentials = ''
    funds = ''
    document.getElementById('part1').innerHTML =""
    document.getElementById('part2').innerHTML =""
    document.getElementById('part3_B').innerHTML ="It's important to put money towards your emergency funds.This will come from the savings portion"
    document.getElementById('part3').innerHTML =""

}
