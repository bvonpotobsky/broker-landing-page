// Catch the DOM
const currency = document.querySelector('.currency');
const commissions = document.querySelector('.commissions');
const currencyButton = document.querySelector('.button--right');
const commissionsBtn = document.querySelector('.button--left');

currencyButton.addEventListener('click', () => {
  currency.style.display = 'none';
  commissions.style.display = 'block';
});

commissionsBtn.addEventListener('click', () => {
  commissions.style.display = 'none';
  currency.style.display = 'block';
});
