// Знайти форму
const form = document.querySelector(".login-form");

// Додати слухача події
form.addEventListener("submit", onFormSubmit);

// Створити функцію відправки форми
function onFormSubmit(event) {
  event.preventDefault();

  // Доступ до елементів форми
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Перевірити заповненість полів
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  //   Об'єкт з інформацією про користувача
  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);

  // очистити значення полів
  event.currentTarget.reset();
}
