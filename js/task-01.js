const refs = {
  categories: document.querySelector("#categories"),
  items: document.querySelectorAll(".item"),
};

const categoriesCount = refs.items.length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesNames = [...refs.items].map((item) => {
  console.log(`Categorie: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
});
