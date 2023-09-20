# Working with Events and Forms in JavaScript

### The Budget Exercise

- In this exercise, you will create a budget calculator to help track monthly spending. This will use your HTML and JavaScript skills.


### Project Steps

1. Create the starting page, and link your HTML and JS files.
![Initial Landing Page](/project/images/image1.png "Initial Landing Page")

2. In the HTML file, create four buttons in order: "Begin", "Input Your Needs", "Emergency Fund", and "Start Over". You will also add two lines of text, as seen in the screenshot. You should add IDs to each line, as we will need to access them individually with our JavaScript. You also will need to create an empty paragraph after each button (with a corresponding ID). This is where the user’s answers to the information should be stored. 

``` html
<p id="part1"></p>
```

3. Work on the "Begin" button. In the JavaScript file, create five variables: `person`, `budget`, `needs`, `savings`, and `wants`. `person` should be set assigned the value of a blank string, “”. All other variables should be assign the value of the number 0.


4. Create a function for the "Begin" button. The function for the “Begin” button should have the following steps:
- We will create a function called `myBudget` and set it to run when the button ‘Begin’ is clicked.
- In the function myBudget:
- Prompt the user for their name or ID. Store the user input in the variable `person`.
- Prompt the user for their monthly salary. Store the user input in the variable `budget`. 
- In the function, `needs` should be updated to 50% of `budget`; `savings` should be updated to 20% of `budget`; and `wants` should be updated to 30% of `budget`.
- Display this information to the user.
![Begin Update](/project/images/image2.png "Begin Update")


3. Work on the “Input Your Needs” button. Create a function called `inputYourNeeds`. This function should be called when you click on the button “Input Your Needs”.
 
4. The function for the “Input Your Needs” button should have the following steps:
- Prompt the user on how much they spend on food. Subtract this from the `needs` variable.
- Prompt the user on how much they spend on housing. Subtract this from the `needs` variable.
- Prompt the user on how much they spend on bills and loans. Subtract this from the `needs` variable.
- Prompt the user on how much they spend on healthcare. Subtract this from the `needs` variable.
- Prompt the user on how much they spend on transportation. Subtract this from the `needs` variable.
- Prompt the user on how much they spend on other essentials. Subtract this from the `needs` variable. 
- Display how much is remaining in their `needs`.
 
5. If `needs` is less than zero (the user spent more on needs than they had in the budget), display how over budget they are and subtract it from the `wants` variable. If `needs` is over zero, you should display “You are doing great!”.
 
6. Print out the remaining needs, savings, and wants.
![Needs Update](/project/images/image3.png "Needs Update")


7. Work on the “Emergency Fund” button. Create a function called `emergencyFund`. 

8. This function should be called when you click on the button Emergency Fund.
- Once the user clicks the “Emergency Fund” button, the line of text about emergency funds should go away.
- Prompt the user on how much they will put towards their emergency fund and store the answer in a variable called `funds`. 
- If the user inputs more than they currently have in their `savings` budget, prompt the user again by saying “That’s too much. Try a smaller amount” and then subtract this from the `savings` variable. Else, just subtract the initial amount the user enters from the `savings` variable.
- Display their `needs`, `wants`, and `savings` in a similar table as the ones in the previous buttons.
 
 
9. Work on the “Start Over” button. When you click on the “Start Over” button, you should run a function called `startOver`.
- Set all global variables (`person`, `needs`, `wants`, `savings`, `budget`) back to their original states: 0 or the empty string.
- Clear all text that has been created. The screen should look like the original in Part I.

BONUS: Add Bootstrap or other CSS to make the program look a little bit nicer for your user.
