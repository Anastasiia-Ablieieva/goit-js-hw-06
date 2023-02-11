// Ініціалізувати змінну, що зберігатиме поточне значення лічильника
let counterValue = 0;

// Знайти елементи
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
let value = document.querySelector("#value");

// Створити функції додавання/віднімання для лічильника
const addition = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const subtraction = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

// Додати слухачів подій
minusButton.addEventListener("click", addition);
plusButton.addEventListener("click", subtraction);
