const salaryInput = document.getElementById("salary");
const otherIncomeInput = document.getElementById("other-income");
const rentInput = document.getElementById("rent");
const utilitiesInput = document.getElementById("utilities");
const foodInput = document.getElementById("food");
const totalIncomeSpan = document.getElementById("total-income");
const totalExpensesSpan = document.getElementById("total-expenses");
const savingsSpan = document.getElementById("savings");

function calculateBudget() {
  const salary = parseInt(salaryInput.value) || 0;
  const otherIncome = parseInt(otherIncomeInput.value) || 0;
  const rent = parseInt(rentInput.value) || 0;
  const utilities = parseInt(utilitiesInput.value) || 0;
  const food = parseInt(foodInput.value) || 0;
  const totalIncome = salary + otherIncome;
  const totalExpenses = rent + utilities + food;
  const savings = totalIncome - totalExpenses;

  totalIncomeSpan.textContent = totalIncome;
  totalExpensesSpan.textContent = totalExpenses;
  savingsSpan.textContent = savings;
}

salaryInput.addEventListener("input", calculateBudget);
otherIncomeInput.addEventListener("input", calculateBudget);
rentInput.addEventListener("input", calculateBudget);
utilitiesInput.addEventListener("input", calculateBudget);
foodInput.addEventListener("input", calculateBudget);
