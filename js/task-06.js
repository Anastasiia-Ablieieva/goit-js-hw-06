// Знайти елемент
const validationInput = document.querySelector("#validation-input");

// Додати слухача події
validationInput.addEventListener("blur", (event) => {
  // Перевірка на валідність введених данних
  if (
    event.target.value.length == validationInput.getAttribute("data-length")
  ) {
    validationInput.classList.add("valid");
  }

  if (
    event.target.value.length != validationInput.getAttribute("data-length")
  ) {
    validationInput.classList.add("invalid");
  }
});
