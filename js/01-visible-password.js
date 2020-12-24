const input = document.querySelector(".js-password input");
const button = document.querySelector(".js-password button");
let isPasswordVisible = false;

button.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible;
  button.textContent = isPasswordVisible ? "Скрыть" : "Показать";
  input.type = isPasswordVisible ? "text" : "password";
});
