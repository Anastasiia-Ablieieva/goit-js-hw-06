function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Знайти елементи
const body = document.querySelector("body");
const span = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

// Створити функцію 'кольору'
const addRandomColor = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
};

// Додати слухача подій
changeColorBtn.addEventListener("click", addRandomColor);
