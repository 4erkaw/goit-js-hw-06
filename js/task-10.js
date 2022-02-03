const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const boxCreator = (e) => {
  const boxesArr = [];
  const value = refs.input.value;
  let size = 20;
  for (let i = 0; i < value; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxesArr.push(div);
  }
  refs.boxes.append(...boxesArr);
};

const boxDestroyer = (e) => {
  refs.boxes.innerHTML = "";
};

refs.btnCreate.addEventListener("click", boxCreator);
refs.btnDestroy.addEventListener("click", boxDestroyer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
