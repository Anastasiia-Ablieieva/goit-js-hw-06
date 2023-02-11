// Знайти всі елементи з класом item
const categories = document.querySelectorAll(".item");

// Визначити кількість знайдених елементів
console.log(`Number of categories: ${categories.length}`);

// Перебрати елементи
categories.forEach(item => {
  // Вивести в косоль текст заголовків з кожного елемента
  console.log(`Category: ${item.firstElementChild.textContent}`);

  // Вивести в консоль кількість вкладених елементів в кожному елементі
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
