const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const listItems = [...ingredients].map((elem) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = elem;
  return item;
});

listRef.append(...listItems);
