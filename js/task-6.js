function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls").firstElementChild;
const boxesEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

createBtnEl.addEventListener("click", (event) => {
  const valueInputEl = Number(inputEl.value);
  if (valueInputEl >= 1 && valueInputEl <= 100) {
    createBoxes(valueInputEl);
  }
  inputEl.value = "";
});

destroyBtnEl.addEventListener("click", (event) => {
  destroyBoxes();
});

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  const collectionBlock = [];
  let boxsize = 30;
  for (let i = 0; i < amount; i++) {
    const div = `<div style="background-color: ${getRandomHexColor()};width: ${boxsize}px;height: ${boxsize}px"></div>`;
    collectionBlock.push(div);
    boxsize += 10;
  }
  const blockEl = collectionBlock.join("");
  boxesEl.insertAdjacentHTML("beforeend", blockEl);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
