const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRef = categoriesListRef.querySelectorAll(".item");

const categoriesCount = categoriesItemsRef.length;
console.log(`Number of categories: ${categoriesCount}`);


const names = categoriesListRef.querySelectorAll("h2");
function nameAnimal(names) {
    const animal = names.forEach(name)
}
console.log(nameAnimal(names))