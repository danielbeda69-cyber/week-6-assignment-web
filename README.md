````markdown
# SpendWise - Budget Tracker

## Project Description

SpendWise is a personal budgeting and expense tracking web application.

The application helps users manage their monthly budget, track expenses, calculate total spending, and view their remaining balance.

The project was originally created using HTML and CSS. JavaScript has now been added to make the application more interactive and capable of processing budgeting information.

---

## Features

SpendWise currently includes:

- Monthly budget tracking
- Expense tracking
- Total expense calculation
- Remaining balance calculation
- Weekly budget calculation
- Expense form
- Expense table
- Budget progress indicator
- Browser console output
- JavaScript user input
- Reusable JavaScript functions

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- GitHub

---

## JavaScript Concepts Implemented

This project applies the JavaScript concepts learned during the week.

### 1. Variables

Variables are used to store application information such as:

- Budget
- Expense names
- Expense amounts
- Budget status
- Expense data

Example:

```javascript
let budget = 50000;

let expenseName = "Lunch";

let expenseAmount = 500;
````

The project also uses `const` for values that should not be reassigned.

Example:

```javascript
const appName = "SpendWise";
```

---

### 2. Data Types

The project uses several JavaScript data types.

#### Strings

Strings are used for text such as expense names and categories.

```javascript
let expenseName = "Lunch";
```

#### Numbers

Numbers are used for budgets and expenses.

```javascript
let budget = 50000;
```

#### Booleans

Booleans are used to determine whether the budget has been exceeded.

```javascript
let budgetExceeded = false;
```

---

## User Input

SpendWise uses JavaScript's `prompt()` function to collect information from users.

For example:

```javascript
let userBudget = prompt(
    "Enter your monthly budget:"
);
```

The application also asks the user for an expense name and expense amount.

Because `prompt()` returns text, the project uses `Number()` to convert numeric input into numbers.

Example:

```javascript
budget = Number(userBudget);
```

This allows the values to be used in mathematical calculations.

---

## Budget Calculations

SpendWise performs several calculations.

### Total Expenses

The application adds the amounts of all recorded expenses.

```javascript
function calculateTotalExpenses(expenseList) {

    let total = 0;

    for (let expense of expenseList) {
        total = total + expense.amount;
    }

    return total;
}
```

### Remaining Balance

The remaining balance is calculated by subtracting total expenses from the budget.

```javascript
function calculateBalance(
    budgetAmount,
    totalExpenses
) {

    return budgetAmount - totalExpenses;
}
```

The calculation is:

```text
Budget - Total Expenses = Remaining Balance
```

### Weekly Budget

The monthly budget can also be divided into four weeks.

```javascript
function calculateWeeklyBudget(monthlyBudget) {

    return monthlyBudget / 4;
}
```

---

## Functions

Functions are used to organize the JavaScript code into reusable blocks.

The project includes functions such as:

* `calculateTotalExpenses()`
* `calculateBalance()`
* `calculateWeeklyBudget()`
* `formatMoney()`
* `updateDashboard()`
* `displayExpenses()`

Functions make the code easier to read, maintain, test, and reuse.

For example:

```javascript
function calculateBalance(
    budgetAmount,
    totalExpenses
) {

    return budgetAmount - totalExpenses;
}
```

The function can be reused with different budget and expense values.

---

## Parameters and Arguments

The project uses parameters and arguments when calling functions.

Example:

```javascript
function calculateBalance(
    budgetAmount,
    totalExpenses
) {

    return budgetAmount - totalExpenses;
}
```

Here:

* `budgetAmount` is a parameter.
* `totalExpenses` is a parameter.

When the function is called:

```javascript
calculateBalance(
    budget,
    totalExpenses
);
```

The variables `budget` and `totalExpenses` provide the actual values.

---

## Displaying Results

The project uses `console.log()` to display calculated results in the browser console.

Example:

```javascript
console.log(
    "Remaining Balance: " +
    formatMoney(remainingBalance)
);
```

The console displays information such as:

* Budget
* Total expenses
* Remaining balance
* Weekly budget
* Whether the budget has been exceeded

---

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run the Project

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Make sure all four project files are present.
4. Open `index.html` using Live Server.
5. Enter the requested information in the JavaScript prompts.
6. Open the browser developer tools.
7. Select the Console tab.
8. View the calculated results.
9. You can also add expenses using the expense form on the dashboard.

---

## Testing

The application should be tested by:

* Entering different budget values.
* Entering different expense amounts.
* Checking total expenses.
* Checking the remaining balance.
* Checking the weekly budget.
* Adding expenses through the form.
* Checking the browser console for results.
* Checking that the JavaScript file loads successfully.

---

## Learning Outcome

This project demonstrates the JavaScript foundation required to transform SpendWise from a static webpage into an application that can process data.

The project demonstrates:

* Variables
* Constants
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Parameters
* Arguments
* Return values
* Console output
* Basic webpage interaction

---

## Author

SpendWise was created as part of a Software Engineering learning project.

```
```
