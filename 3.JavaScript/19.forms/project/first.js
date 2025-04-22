const form = document.querySelector('form');
const taxResult = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let income = document.getElementById('income').value;
  let taxAmount = calculateTax(parseFloat(income)); // 
  taxResult.textContent = `Your income is ${income} so you need to pay ${taxAmount.toFixed(2)} as tax`;
});

function calculateTax(income) { 
  let tax = 0;

  if (income <= 300000) {
    tax = 0;
  } else if (income <= 600000) {
    tax = (income - 300000) * 0.05;
  } else if (income <= 900000) {
    tax = 15000 + (income - 600000) * 0.1;
  } else if (income <= 1200000) {
    tax = 45000 + (income - 900000) * 0.15;
  } else if (income <= 1500000) {
    tax = 90000 + (income - 1200000) * 0.2;
  } else {
    tax = 150000 + (income - 1500000) * 0.3;
  }

  return tax;
}