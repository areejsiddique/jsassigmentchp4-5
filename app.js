//practice exercise 4.1
//boolean value
let myVariable = true;

//  Output the value of the variable to the console.
console.log("Value of myVariable:", myVariable);

//  Check whether the variable is true and output a message if so.
if (myVariable) {
    console.log("myVariable is true!");
}

//  Add another if statement with ! to check whether the condition is not true.
if (!myVariable) {
    console.log("myVariable is not true!");
} else {
    console.log("myVariable is true with ! operator!");
}



//  Change the variable to the opposite and observe the changes.
myVariable = !myVariable;

// Repeating steps 2-4 with the updated variable.
console.log("Value of myVariable:", myVariable);

if (myVariable) {
    console.log("myVariable is true!");
}

if (!myVariable) {
    console.log("myVariable is not true!");
} else {
    console.log("myVariable is true with ! operator!");
}


//practice exercise 4.2

//  Create a prompt to ask the user's age
let userAge = prompt("What is your age?");

//  Convert the response from the prompt to a number
userAge = Number(userAge);

//  Declare a message variable for the console message
let message;

//  Check if the input age is equal to or greater than 21
if (userAge >= 21) {
    // Set the message variable to confirm entry to a venue and the ability to purchase alcohol
    message = "Welcome! You can enter the venue and purchase alcohol.";
}
//  Check if the input age is equal to or greater than 19
else if (userAge >= 19) {
    // Set the message variable to confirm entry to the venue but deny the purchase of alcohol
    message = "Welcome! You can enter the venue, but unfortunately, you cannot purchase alcohol.";
}
//  Provide a default else statement to set the message variable to deny entry if none are true
else {
    message = "Sorry, you are not allowed entry.";
}

//  Output the response message variable to the console
console.log(message);


//practice exercise 4.3

//  Create a Boolean value for an ID variable
let isIDValid = false; // Change to false to test different scenarios

//  Using a ternary operator, create a message variable to check ID validity
let messag = isIDValid ? "Welcome! You are allowed into the venue." : "Sorry, your ID is not valid. Entry denied.";

//  Output the response to the console
console.log(messag);




//practice exercise 4.4

//  Set a variable with a random value (0-5 for 6 possible results)
let randomValue = Math.floor(Math.random() * 6);

//  Create a prompt to get a string value input from the user
let userQuestion = prompt("Ask the Magic 8-Ball a question:");

//  Create 6 responses using the switch statement
let response;
switch (randomValue) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "Without a doubt.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "Outlook not so good.";
        break;
    default:
        response = "Error: Invalid random value.";
}

//  Create a variable to hold the end response
let finalResponse = `You asked: "${userQuestion}"\nThe Magic 8-Ball says: "${response}"`;

//  Output the user's original question and the randomly selected case response to the console
console.log(finalResponse);




//practice exercise 4.5

//  Create a variable called prize and use a prompt to ask the user to set the value
let prize = prompt("Set the prize value by selecting a number between 0 and 10:");

//  Convert the prompt response to a number data type
prize = Number(prize);

//  Create a variable for the output message
let outputMessage = "My Selection: ";

//  Using the switch statement, provide a response regarding the awarded prize
switch (prize) {
    case 0:
        outputMessage += "You win a small keychain!";
        break;
    case 1:
        outputMessage += "Congratulations! You get a free coffee!";
        break;
    case 2:
        outputMessage += "You've won a mystery book!";
        break;
    case 3:
    case 4:
        outputMessage += "Double win! You get a T-shirt and a pen!";
        break;
    case 5:
    case 6:
    case 7:
        outputMessage += "You win a gift card to your favorite store!";
        break;
    case 8:
    case 9:
        outputMessage += "Big win! You get a weekend getaway!";
        break;
    case 10:
        outputMessage += "Jackpot! You win a new car!";
        break;
    default:
        outputMessage += "Invalid selection. No prize for you!";
}


//  Output the message back to the user
console.log(outputMessage);







//CHAPTER PROJECT

//number game
let dynamicNumber = 10; // Change this to any dynamic number you like
let userNumber = prompt("Enter a number:");

if (userNumber > dynamicNumber) {
    console.log("Your number is greater than the dynamic number.");
} else if (userNumber < dynamicNumber) {
    console.log("Your number is less than the dynamic number.");
} else {
    console.log("Your number is equal to the dynamic number.");
}



//friend checker game

let userName = prompt("Enter a name:");
let friendName;

switch (userName) {
    case "Alice":
    case "Bob":
    case "Charlie":
    case "Ali":
        friendName = true;
        break;
    default:
        friendName = false;
}

if (friendName) {
    console.log("You are a friend!");
} else {
    console.log("I don't know you.");
}


//ROCK PAPER SECISSOR GAME
let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2
let computerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2

let resultMessage;

if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
} else if (
    (playerSelection === 0 && computerSelection === 2) ||
    (playerSelection === 1 && computerSelection === 0) ||
    (playerSelection === 2 && computerSelection === 1)
) {
    resultMessage = "You win!";
} else {
    resultMessage = "You lose!";
}

console.log(`Player chose: ${choices[playerSelection]}`);
console.log(`Computer chose: ${choices[computerSelection]}`);
console.log(resultMessage);




//practice exercise 5.1
// Create a variable for the max value
let maxValue = 5;

//  Generate a random number for the solution
let solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out for the final version

//  Create a variable to track whether the answer is correct
let isCorrect = false;

//  Use a while loop to iterate a prompt for user input
while (!isCorrect) {
    // Prompt the user to enter a number between 1 and the max value
    let userGuess = prompt(`Guess a number between 1 and ${maxValue}:`);
    userGuess = Number(userGuess); // Convert the prompt response to a number

    //  Check if the user's guess is correct or not
    if (userGuess === solution) {
        isCorrect = true;
        console.log("Congratulations! You guessed the correct number:", solution);
    } else {
        // Provide feedback and continue the loop
        if (userGuess > solution) {
            console.log("Too high! Try again.");
        } else {
            console.log("Too low! Try again.");
        }
    }
}








//practice exercise 5.2
//  Set the starting counter to 0
let counter = 0;

//  Create a variable for the step value
let step = 10;

//  Add a do while loop to increment the counter by the step amount
do {
    console.log("Counter:", counter);
    counter += step;
} while (counter < 100);

//  Continue to loop until the counter is equal to or more than 100



//practice exercise 5.3

//  Setup a blank array, myWork
let myWork = [];

// Use a for loop to create a list of 10 objects
for (let i = 1; i <= 10; i++) {
    //  Use a ternary operator to alternate the status value
    let status = i % 2 === 0 ? false : true;

    // Create a lesson using a temporary object variable
    let lesson = {
        name: `Lesson ${i}`,
        status: status,
    };

    //  Push the object to the myWork array
    myWork.push(lesson);
}

//  Output the array to the console
console.log(myWork);




//practice exercise 5.4

// Step 1: Create an empty array, myTable, to hold the table data
let myTable = [];

// Step 2: Set variable values for the number of rows and columns
let numRows = 3;
let numColumns = 4;

// Step 3: Set up a counter variable with an initial value of 0
let count = 0;

// Step 4: Create a for loop to construct each row of the table
for (let i = 0; i < numRows; i++) {
    // Create a new temporary array (tempTable) to hold each row of data
    let tempTable = [];

    // Step 5: Nest a second loop within the first to count the columns
    for (let j = 0; j < numColumns; j++) {
        // Increment the counter and add the value to the tempTable array
        counter++;
        tempTable.push(count);
    }

    // Push the tempTable array (representing a row) into the myTable array
    myTable.push(tempTable);
}

// Output the generated table to the console
console.log(myTable);






//practice exercise 5.5
// Create a grid array variable
let grid = [];

//  Set a value of 64 for the number of cells
let totalCells = 64;

//  Set a counter to 0
let cou = 0;

//  Create a global variable for the row array
let row = [];

//  Create a loop to populate the grid
for (let i = 0; i < totalCells + 1; i++) {
    //  Add an outer if statement to check if the counter is divisible by 8
    if (counter % 8 === 0) {
        // : Inside the outer if statement, add another if statement to check if the row is defined
        if (row !== undefined) {
            // Add the row to the main grid array
            grid.push(row);
        }

        // Clear the row array if the counter is divisible by 8
        row = [];
    }

    //  Increment the main counter by 1
    cou++;

    //: Push the value of the counter to the row array
    row.push(cou);

    //  Check if the value of the counter is equal to the total number of columns
    if (counter === 8) {
        // Add the current row to the grid
        grid.push(row);
    }
}
//  Output the grid to the console
console.log(grid);




//practice exercise 5.6

//  Create an empty array
let myArray = [];

//  Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}

//  Log the array into the console
console.log("Array:", myArray);

//  Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}

//  Use the for of loop to output the value into the console from the array
console.log("Using for of loop:");
for (let value of myArray) {
    console.log(value);
}


//practice exercise 5.7

// Step 1: Create a simple object with three items
let myObject = {
    name: "Areej",
    age: 21,
    city: "Karachi"
};

// Step 2: Using the for in loop, get the properties' names and values and output to the console
console.log("Object properties and values:");
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}

// Step 3: Create an array containing the same three items
let Array = ["Areej", 21, "Karachi"];

// Using the for loop to output the values from the array into the console
console.log("\nArray values:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//practice exercise 5.8
// Set up a string variable to use as output
let outputString = "";

//  Select a number to skip, and set that number as a variable

let skipNumber = 7;

//  Create a for loop that counts to 10

for (let i = 1; i <= 10; i++) {
    //  Add a condition to check if the value of the looped variable is equal to the number to be skipped
    
    if (i === skipNumber) {
      
        //  If the number is to be skipped, continue to the next number
        continue;
    }

    //  As you iterate through the values, append the new count value to the end of the main output variable
    outputString += i;
}

//  Output the main variable after the loop completes
console.log("Output with continue:", outputString);

//  Reuse the code, but change the continue to break and see the difference
outputString = "";

for (let i = 1; i <= 10; i++) {
    // Change continue to break
    if (i === skipNumber) {
        // Step 5: If the number is to be skipped, break out of the loop
        break;
    }

    //  As you iterate through the values, append the new count value to the end of the main output variable
    outputString += i;
}

// Output the main variable after the loop completes
console.log("Output with break:", outputString);



//chapter project
// Step 1: Set up a blank array to contain the final multiplication table
let multiplicationTable = [];

// Step 2: Set a value variable to specify how many values you want to multiply
let tableSize = 12;

// Step 3: Create an outer for loop to iterate through each row
for (let row = 1; row <= tableSize; row++) {
    // Create a temp array to store the row values
    let tempRow = [];

    // Step 4: Add an inner for loop for the column values
    for (let col = 1; col <= tableSize; col++) {
        // Step 5: Push the multiplied row and column values to the temp array
        tempRow.push(row * col);
    }

    // Add the temporary row data to the main array of the final table
    multiplicationTable.push(tempRow);
}

// Output the multiplication table to the console
console.log("Multiplication Table:");
for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i].join("\t"));
}



