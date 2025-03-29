let budget = 0;
let balance = 0;
let expenses = [];

function setBudget() {
    budget = parseFloat(document.getElementById("budget").value);
    balance = budget;
    document.getElementById("balance").innerText = balance;
}

function addExpense() {
    let expenseName = document.getElementById("expense").value || document.getElementById("new-expense").value;
    let amount = parseFloat(document.getElementById("amount").value) || parseFloat(document.getElementById("new-amount").value);
    let date = document.getElementById("date").value || new Date().toISOString().split('T')[0];

    if (!expenseName || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    expenses.push({ name: expenseName, amount: amount, date: date });
    balance -= amount;
    document.getElementById("balance").innerText = balance;
    updateTimeline();
}

function updateTimeline() {
    let list = document.getElementById("expense-list");
    list.innerHTML = "";
    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${exp.name}</strong> - ₹${exp.amount} on ${exp.date}`;
        list.appendChild(li);
    });
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelector(`#${section}-section`).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.nav-item[onclick="showSection('${section}')"]`).classList.add('active');
}
