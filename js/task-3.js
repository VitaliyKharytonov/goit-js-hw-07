const imputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

imputEl.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = trimmedValue;
  }
});
