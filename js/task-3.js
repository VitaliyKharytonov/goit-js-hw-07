const imputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

imputEl.addEventListener("input", (event) => {
  console.dir(event.currentTarget.value);
  if (event.currentTarget.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.currentTarget.value;
  }
});
