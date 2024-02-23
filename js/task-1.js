const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

categoryItems.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
