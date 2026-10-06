```javascript
// ==========================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ==========================================


// ==========================================
// 1. APPLICATION VARIABLES
// ==========================================

const appName = "SpendWise";

let budget = 50000;

let expenseName = "Lunch";

let expenseAmount = 500;

let budgetExceeded = false;


// Store expenses
let expenses = [
    {
        name: "Lunch",
        amount: 500,
        category: "Food",
        date: "2026-09-29"
    },
    {
        name: "Transport",
        amount: 300,
        category: "Transport",
        date: "2026-09-29"
    }
];


// ==========================================
// 2. FUNCTIONS
// ==========================================


// Calculate total expenses
function calculateTotalExpenses(expenseList) {

    let total = 0;

    for (let expense of expenseList) {
        total = total + expense.amount;
    }

    return total;
}


// Calculate remaining balance
function calculateBalance(budgetAmount, totalExpenses) {

    return budgetAmount - totalExpenses;
}


// Calculate weekly budget
function calculateWeeklyBudget(monthlyBudget) {

    return monthlyBudget / 4;
}


// Format money
function formatMoney(amount) {

    return "KSh " + amount.toLocaleString();
}


// ==========================================
// 3. DISPLAY DATA ON THE PAGE
// ==========================================

function updateDashboard() {

    let totalExpenses = calculateTotalExpenses(expenses);

    let remainingBalance = calculateBalance(
        budget,
        totalExpenses
    );

    let weeklyBudget = calculateWeeklyBudget(
        budget
    );


    // Check if budget is exceeded
    budgetExceeded = remainingBalance < 0;


    // Update summary cards
    document.getElementById("budgetDisplay").textContent =
        formatMoney(budget);

    document.getElementById("expenseDisplay").textContent =
        formatMoney(totalExpenses);

    document.getElementById("balanceDisplay").textContent =
        formatMoney(remainingBalance);

    document.getElementById("weeklyDisplay").textContent =
        formatMoney(weeklyBudget);


    // Update budget overview
    document.getElementById("overviewBudget").textContent =
        formatMoney(budget);

    document.getElementById("overviewSpent").textContent =
        formatMoney(totalExpenses);

    document.getElementById("overviewRemaining").textContent =
        formatMoney(remainingBalance);


    // Calculate spending percentage
    let spendingPercentage = 0;

    if (budget > 0) {

        spendingPercentage =
            (totalExpenses / budget) * 100;

    }

    if (spendingPercentage > 100) {
        spendingPercentage = 100;
    }


    document.getElementById("progressText").textContent =
        Math.round(spendingPercentage) + "%";

    document.getElementById("progressFill").style.width =
        spendingPercentage + "%";


    // Display results in console
    console.log("=================================");
    console.log("         " + appName);
    console.log("=================================");

    console.log("Budget: " + formatMoney(budget));

    console.log(
        "Total Expenses: " +
        formatMoney(totalExpenses)
    );

    console.log(
        "Remaining Balance: " +
        formatMoney(remainingBalance)
    );

    console.log(
        "Weekly Budget: " +
        formatMoney(weeklyBudget)
    );

    console.log(
        "Budget Exceeded: " +
        budgetExceeded
    );

    console.log("=================================");
}


// ==========================================
// 4. USER INPUT USING PROMPT()
// ==========================================

let userBudget = prompt(
    "Enter your monthly budget:"
);


// Only update the budget when the user
// provides a valid value
if (
    userBudget !== null &&
    userBudget !== "" &&
    !isNaN(Number(userBudget))
) {

    budget = Number(userBudget);

}


// Ask for an expense
let userExpenseName = prompt(
    "Enter an expense name:"
);


// Ask for expense amount
let userExpenseAmount = prompt(
    "Enter the expense amount:"
);


// Process the expense
if (
    userExpenseName !== null &&
    userExpenseName !== "" &&
    userExpenseAmount !== null &&
    userExpenseAmount !== "" &&
    !isNaN(Number(userExpenseAmount))
) {

    let newExpense = {

        name: userExpenseName,

        amount: Number(userExpenseAmount),

        category: "Other",

        date: new Date().toISOString().split("T")[0]

    };


    expenses.push(newExpense);

}


// ==========================================
// 5. UPDATE DASHBOARD
// ==========================================

updateDashboard();


// ==========================================
// 6. DISPLAY EXPENSES IN THE TABLE
// ==========================================

function displayExpenses() {

    let tableBody =
        document.getElementById("expenseTableBody");


    tableBody.innerHTML = "";


    for (let expense of expenses) {

        let row = document.createElement("tr");


        row.innerHTML = `
            <td>${expense.name}</td>

            <td>
                <span class="category-badge">
                    ${expense.category}
                </span>
            </td>

            <td>${expense.date}</td>

            <td>${formatMoney(expense.amount)}</td>
        `;


        tableBody.appendChild(row);

    }

}


// Display the expenses
displayExpenses();


// ==========================================
// 7. EXPENSE FORM
// ==========================================

const expenseForm =
    document.getElementById("expenseForm");


expenseForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Get form values
        let name =
            document.getElementById("expenseName").value;


        let amount =
            Number(
                document.getElementById("expenseAmount").value
            );


        let category =
            document.getElementById("category").value;


        let date =
            document.getElementById("expenseDate").value;


        // Validate the amount
        if (amount <= 0) {

            console.log(
                "Please enter a valid expense amount."
            );

            return;

        }


        // Create new expense
        let newExpense = {

            name: name,

            amount: amount,

            category: category,

            date: date

        };


        // Add expense to array
        expenses.push(newExpense);


        // Update dashboard
        updateDashboard();


        // Update table
        displayExpenses();


        // Clear form
        expenseForm.reset();


        // Show success message
        console.log(
            "Expense added successfully!"
        );

        console.log(
            "Expense Name: " + name
        );

        console.log(
            "Expense Amount: " +
            formatMoney(amount)
        );

        console.log(
            "Category: " + category
        );

    }
);


// ==========================================
// 8. INITIAL CONSOLE MESSAGE
// ==========================================

console.log(
    "Welcome to " + appName + "!"
);

console.log(
    "JavaScript loaded successfully."
);
```
