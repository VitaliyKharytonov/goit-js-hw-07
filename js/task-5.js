function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector("span.color");

buttonEl.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.backgroundColor = color;
});
