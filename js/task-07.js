const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

const changeSize = (e) => {
refs.text.style.fontSize = `${e.target.value}px`
console.log(refs.text.style.fontSize)
}

refs.input.addEventListener('input', changeSize)