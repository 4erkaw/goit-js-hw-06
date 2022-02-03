const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

const textInput = () => {
  if (refs.input.value.trim()) {
    refs.text.textContent = refs.input.value;
    return;
  }
  refs.text.textContent = "Anonymous";
};

refs.input.addEventListener("input", textInput);
