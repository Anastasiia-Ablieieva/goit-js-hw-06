const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Знайти список
const ingredientsList = document.querySelector("#ingredients");

// Створити масив для елементів списку
const ingredientsListArray = [];

// Перебрати всі елементи
ingredients.forEach((ingredient) => {
  // Створити окремий елемент списку в розмітці
  const listItem = document.createElement("li");

  // Додати текстовий вміст елементу
  listItem.textContent = ingredient;

  // Додати елементу клас
  listItem.classList.add("item");

  // Додати елемент до масиву
  ingredientsListArray.push(listItem);
});

// Додати всі елементи до списку
ingredientsList.append(...ingredientsListArray);
