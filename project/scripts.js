//BEGIN BUTTON

let buttonBegin = document.getElementById("begin");

buttonBegin.addEventListener("click", function myBudget() {
  let personValue = document.getElementById("person");

  let person = "";

  personValue.innerHTML = person;

  let needs = 0;

  let savings = 0;

  let wants = 0;

  let nameInput = document.getElementById("name");

  let name = nameInput.value

  document.getElementById("person").innerHTML = `${name}'s Budget`;

  let budgetInput = document.getElementById("salary");

  budget = Number(budgetInput.value);

  needs = budget * 0.5;

  savings = budget * 0.2;

  wants = budget * 0.3;

  document.getElementById("needs").innerHTML = `💰${needs}`;

  document.getElementById("savings").innerHTML = `💰${savings}`;

  document.getElementById("wants").innerHTML = `💰${wants}`;

  let welcome = document.getElementById("welcome").innerHTML;
  document.getElementById(
    "welcome"
  ).innerHTML = `Hello ${name}! Here is your budget for this month.`;
  setTimeout(function () {
    document.getElementById("welcome").innerHTML = welcome;
  }, 5000);

  // Reveal Table to display budget
  let table1 = document.getElementById("table1");
  table1.classList.remove("hidden1");

  // Remove Intro Statement
  let intro = document.getElementById("intro");
  intro.classList.add("hidden1");

  // Remove Begin Button
  buttonBegin.classList.add("hidden1");

   //hide input values
  name = document.getElementById("name")
  name.classList.add("hidden1")

  budgetInput = document.getElementById("salary")
  budgetInput.classList.add("hidden1")

  // Reveal Needs Button
  let needsButton = document.getElementById("input");
  needsButton.classList.remove("hidden1");

  needsButton.addEventListener("click", function inputYourNeeds() {
    let food = prompt("How much do you spend on food monthly?");

    food = Number(food);

    let housing = prompt("How much do you spend on housing monthly?");

    housing = Number(housing);

    let expenses = prompt("How much do you spend on bills and loans monthly?");

    expenses = Number(expenses);

    let healthcare = prompt("How much do you spend on healthcare, monthly?");

    healthcare = Number(healthcare);

    let transportation = prompt("How much do you spend on transportation monthly?");

    transportation = Number(transportation);

    let essentials = prompt("How much do you spend on essentials monthly?");

    essentials = Number(essentials);

    needs = needs - (food + housing + expenses + healthcare + transportation + essentials);

    // Remove Needs Button
    needsButton.classList.add("hidden1");

    // Reveal Emergency Button
    let emergency = document.getElementById("emergency");
    emergency.classList.remove("hidden1");

    // Reveal Emergency Statement
    let conclusion = document.getElementById("conclusion");

    conclusion.classList.remove("hidden1");

    if (needs < 0) {
      wants = wants + needs;
      let needsMessage = document.getElementById("warning").innerHTML;
      document.getElementById(
        "warning"
      ).innerHTML = `You are 💰${needs} over budget. You will have to reduce the amount from your wants.`;
      setTimeout(function () {
        document.getElementById("warning").innerHTML = needsMessage;
      }, 5000);

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;
    } else {
      let needsMessage = document.getElementById("warning").innerHTML;
      document.getElementById("warning").innerHTML = `You're doing great!`;
      setTimeout(function () {
        document.getElementById("warning").innerHTML = needsMessage;
      }, 5000);

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;
    }
  });

  // Activate Emergency Button

  emergency.addEventListener("click", function emergencyFund() {
    let fundPrompt = prompt(
      "What amount will you add to your emergency funds?"
    );

    fundPrompt = Number(fundPrompt);

    let funds = Number(fundPrompt);

    //Clear initial paragraph about emergency funds
    conclusion.classList.add("hidden1");

    //Remove emergency button
    emergency.classList.add("hidden1");

    //Reveal the emergency fund table
    let emergencyTable = document.getElementById("table3");
    emergencyTable.classList.remove("hidden1");

    //Reveal Start Over Button
    let startOver = document.getElementById("startOver");
    startOver.classList.remove("hidden1");

    if (funds > savings) {
      let correction = prompt("Thats too much. Try a smaller amount.");

      correction = Number(correction);

      savings = savings - correction;

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;

      document.getElementById("funds").innerHTML = `💰${funds}`;

      document.getElementById("person").innerHTML = `${name}'s Final Monthly Budget`;
    } else {
      savings = savings - fundPrompt;

      document.getElementById("needs").innerHTML = `💰${needs}`;

      document.getElementById("savings").innerHTML = `💰${savings}`;

      document.getElementById("wants").innerHTML = `💰${wants}`;

      document.getElementById("funds").innerHTML = `💰${funds}`;

      document.getElementById("person").innerHTML = `${name}'s Final Monthly Budget`;
    }
  });

  startOver.addEventListener("click", function startOver() {
    person = "Budget";
    needs = 0;
    wants = 0;
    savings = 0;
    document.getElementById("person").innerHTML = person;

    document.getElementById("needs").innerHTML = `💰${needs}`;

    document.getElementById("savings").innerHTML = `💰${savings}`;

    document.getElementById("wants").innerHTML = `💰${wants}`;

    //Remove emergency table
    let emergencyTable = document.getElementById("table3");
    emergencyTable.classList.add("hidden1");

    //Remove Start Over Button
    let startOver = document.getElementById("startOver");
    startOver.classList.add("hidden1");

    //Reveal Begin button
    let buttonBegin = document.getElementById("begin");
    buttonBegin.classList.remove("hidden1");
  });
});
