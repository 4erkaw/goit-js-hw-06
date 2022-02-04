const refs = {
  decBtn: document.querySelector('[data-action="decrement"]'),
  incBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("span"),
};
let counterValue = Number(refs.counter.textContent)
counterValue = 0

const decrementValue = () => {
   counterValue -= 1;
   return refs.counter.textContent = counterValue
};
const incrementValue = () => {
  counterValue = Number(counterValue) + 1;
   return refs.counter.textContent = counterValue
};


refs.decBtn.addEventListener("click", decrementValue);
refs.incBtn.addEventListener("click", incrementValue);
