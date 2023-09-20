//BEGIN BUTTON
let buttonStart = document.getElementById("start")
buttonStart.addEventListener("click", function startBudget() {

  // Set beginning elements
  let nameInput = document.getElementById("name");
  let buttonBegin = document.getElementById("begin");
  let budgetInput = document.getElementById("salary");
  let beginning = [nameInput, budgetInput, buttonBegin]
  for (let i = 0; i< 3; i++) {
  beginning[i].classList.remove("hidden1")
  }

  let person = ''

  let needs = 0;

  let savings = 0;

  let wants = 0;


// Remove begin button
let buttonStart = document.getElementById("start")
buttonStart.classList.add("hidden1")

// Remove intro
let intro = document.getElementById("intro")
intro.classList.add("hidden1")

// Activate submit button 

buttonBegin.addEventListener("click", function myBudget() {

let name = nameInput.value

person = `${name}'s Monthly Budget`;
  
budget = Number(budgetInput.value);

needs = budget * 0.5;

savings = budget * 0.2;

wants = budget * 0.3;

document.getElementById("person").innerHTML = person

document.getElementById("needs").innerHTML = `💰${needs}`;

document.getElementById("savings").innerHTML = `💰${savings}`;

document.getElementById("wants").innerHTML = `💰${wants}`;

// Welcome message 5 seconds
let welcome = document.getElementById("welcome")
welcome.classList.remove("hidden1")
  welcome = document.getElementById("welcome").innerHTML;
  document.getElementById("welcome").innerHTML = `Hello ${name}! Here is your budget for this month.`;
  setTimeout(function() {
    document.getElementById("welcome").innerHTML = welcome}, 5000);

  // Remove Intro Statement
  let intro = document.getElementById("intro");
  intro.classList.add("hidden1");

  // Remove beginning set up 
  for (let i = 0; i< 3; i++) {
    beginning[i].classList.add("hidden1")
    }

    // Set Needs Elements
  let submitNeeds = document.getElementById("submitNeed")
    let monthly = document.getElementById("monthly")
    let foodInput = document.getElementById("food")
    let housingInput = document.getElementById("housing")
    let expensesInput = document.getElementById("bills")
    let healthcareInput = document.getElementById("healthcare")
    let transportationInput = document.getElementById("transportation")
    let essentialsInput = document.getElementById("essentials")

    // Reveal needs elements

    let monthlySection = [foodInput, housingInput, expensesInput, healthcareInput, transportationInput, essentialsInput, monthly, submitNeeds]
    for (let i = 0; i< 8; i++) {
      monthlySection[i].classList.remove("hidden1")
    }
  
    document.querySelector("body").style.justifyContent = 'flex-start';

         //Active submit Button
    submitNeeds.addEventListener("click", function submitNeed() {

      let welcome = document.getElementById("welcome")
welcome.classList.add("hidden1")

    let food = Number(foodInput.value)
    document.getElementsByClassName("food").innerHTML = food

    let housing = Number(housingInput.value);
    document.getElementsByClassName("housing").innerHTML = housing

    let expenses = Number(expensesInput.value);
    document.getElementsByClassName("bills").innerHTML = expenses

    let healthcare = Number(healthcareInput.value);
    document.getElementsByClassName("healthcare").innerHTML = healthcare

    let transportation = Number(transportationInput.value);
    document.getElementsByClassName("transportation").innerHTML = transportation

    let  essentials = Number(essentialsInput.value);
    document.getElementsByClassName("essentials").innerHTML = essentials

    needs = needs - (food + housing + expenses + healthcare + transportation + essentials);

    if (needs < 0) {
      wants = wants + needs;
      let needsMessage = document.getElementById("warning")
      warning.classList.remove("hidden1")
      needsMessage = document.getElementById("warning").innerHTML
      document.getElementById("warning").innerHTML = `You are 💰${needs} over budget. You will have to reduce the amount from your wants.`;
      setTimeout(function() {document.getElementById("warning").innerHTML = needsMessage }, 5000)
    
      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;

        //Remove needs set up 
        for (let i = 0; i< 8; i++) {
          monthlySection[i].classList.add("hidden1")
        }
    
    } else {
      let needsMessage = document.getElementById("warning")
      warning.classList.remove("hidden")
      needsMessage = document.getElementById("warning").innerHTML
      document.getElementById("warning").innerHTML = `You're doing great!`;
      setTimeout(function() {
        document.getElementById("warning").innerHTML = needsMessage }, 5000);

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;

        //Remove needs set up 
        for (let i = 0; i< 8; i++) {
          monthlySection[i].classList.add("hidden1")
        }
    }

    document.getElementById("fields").style.height = '60vh'; 

      // Set emergency elements
      let emergencyButton = document.getElementById("emergency")
      let emergencyMessage = document.getElementById("conclusion")
      let emergencyInput = document.getElementById("emergencyInput")
  
      // Reveal emergency elements
      let emergencySection = [emergencyButton, emergencyMessage, emergencyInput]
      for (let i = 0; i< 3; i++) {
        emergencySection[i].classList.remove("hidden1")
      }


  // Activate Emergency Button

  emergency.addEventListener("click", function emergencyFund() {

    let needsMessage = document.getElementById("warning")
      needsMessage.classList.add("hidden")

    let funds = Number(emergencyInput.value);


    if (funds > savings) {
      let emergencyMessage = document.getElementById("conclusion")
      emergencyMessage.innerHTML = "Thats too much. Try a smaller amount.";
      emergencyInput.value = ''
    } else {

        // Reveal the emergency fund table
    let emergencyTable = document.getElementById("table3");
    emergencyTable.classList.remove("hidden1");
      savings = savings - funds;

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;

      document.getElementById("funds").innerHTML = `💰${funds}`;

      // Reveal final message 
    

document.getElementById("fields").style.height = '0px'; 

  // Reveal Table to display budget
  let table1 = document.getElementById("table1");
  table1.classList.remove("hidden1");

        // Remove emergency set up
    for (let i = 0; i< 3; i++) {
      emergencySection[i].classList.add("hidden1")
    }

    let copy = document.getElementById("copy");
    copy.classList.remove("hidden1")
    copy.addEventListener("click", function copyText() {
      /* Copy text into clipboard */
      navigator.clipboard.writeText
          (`Monthly Budget:\n
          Needs: 💰${needs}\n
          Savings: 💰${savings}\n 
          Wants: 💰${wants}\n
          Emergency Fund: 💰${funds}\n`);
  })

      //Reveal Start Over Button
      let startOver = document.getElementById("startOver");
      startOver.classList.remove("hidden1");}
  
  startOver.addEventListener("click", function refreshPage(){
    window.location.reload();
})

  });
})
})
})

