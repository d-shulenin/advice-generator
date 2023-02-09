//Selectors
const button = document.getElementById('button')
const text = document.getElementById('text')
const buttonImage = document.getElementById('button-image')
const title = document.getElementById('title')

//functions
async function getAdvice() {
    const responce = await fetch('https://api.adviceslip.com/advice')
    const json = await responce.json()
    const advice = await json.slip.advice
    return advice
}
function changeScale(value) {
    buttonImage.style.transform = `scale(${value})`
}
function setButton(boolean) {
    button.disabled = boolean
    boolean ? button.style.background = 'grey' : button.style.background = 'hsl(150, 100%, 66%)'
}

//events
button.addEventListener('mouseover', () => changeScale(1.2))
button.addEventListener('mouseout', () =>  changeScale(1))
button.addEventListener('click', () => {
    setButton(true)
    getAdvice().then(responce => text.innerHTML = `"${responce}"`)
    title.innerHTML = `Advice #${Math.random().toString().slice(2,5)}`
    setTimeout(() => {
        setButton(false)
        changeScale(1)}
        , 2000)
})