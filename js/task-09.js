const refs = {
  spanColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};
const onBgChange = (e) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = refs.body.style.backgroundColor =
    getRandomHexColor();
};

refs.button.addEventListener("click", onBgChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
