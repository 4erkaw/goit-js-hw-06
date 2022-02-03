const refs = {
    decBtn: document.querySelector('[data-action="decrement"]'),
    incBtn: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value'),
}

const decrementValue = () => {
    return refs.counter.textContent -= 1   
}
const incrementValue = () => {
    return refs.counter.textContent = Number(refs.counter.textContent) + 1
}

refs.decBtn.addEventListener('click', decrementValue)
refs.incBtn.addEventListener('click', incrementValue)

