const body = document.querySelector('body')
const timerBtns = document.querySelectorAll('.timer-choice__link')
const time = document.querySelector('.time')
const startTimer = document.querySelector('.start')
const resetTimer = document.querySelector('.clear')

let inputMinutes = prompt('input minutes') * 60 //потом буду брать из settings



timerBtns[0].onclick = (e) => {
    e.preventDefault()
    body.style.backgroundColor = 'rgb(189, 74, 74)' 
    body.style.transition = 'background-color 0.5s ease-in-out 0s' 
}

timerBtns[1].onclick = (e) => {
    e.preventDefault()
    body.style.backgroundColor = 'rgb(76, 145, 149)'
    time.textContent = '05:00'

    
}

timerBtns[2].onclick = (e) => {
    e.preventDefault()
    body.style.backgroundColor = 'rgb(74, 79, 189)'
    time.textContent = '25:00'
}

let interval = setInterval(() => {
    let sec = Math.floor(inputMinutes % 60)  //Получаем секунды
    let min = Math.floor(inputMinutes / 60 % 60)   // Получаем минуты
    let hour = Math.floor(inputMinutes / 60 / 60 % 60)  // Получаем часы
    let strTimer = ''

    if (inputMinutes > 0 && inputMinutes <= 3600) {
        strTimer = `${Math.trunc(min)}:${sec}`
        time.textContent = strTimer
        --inputMinutes  // Уменьшаем таймер
    } else {
        strTimer = `${Math.trunc(hour)}:${Math.trunc(min)}:${sec}`
        time.textContent = strTimer
        --inputMinutes 
    }

    if (inputMinutes < 0 || ) {
        clearInterval(interval)
        time.textContent = '00:00'
    } 
}, 1000)


startTimer.onclick = () => {
    interval()    
}

resetTimer.onclick = () => {
    console.log(interval)
    clearInterval()
}






