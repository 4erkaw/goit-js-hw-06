const refs = {
  input: document.querySelector("#validation-input"),
};
const inputClasses = refs.input.classList

const validator = () => {
  if (refs.input.value.length === Number(refs.input.dataset.length)) {
  classesMaintance('valid','invalid')
  } else {
    classesMaintance('invalid','valid')
  }
};

const classesMaintance = (classToAdd,classToRemove) => {
  inputClasses.add(classToAdd);
  inputClasses.remove(classToRemove);
}
refs.input.addEventListener("blur", validator);
