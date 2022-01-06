const body = document.querySelector('body')
const timerBtns = document.querySelectorAll('.timer-choice__link')
const time = document.querySelector('.time')
const startTimer = document.querySelector('.start')
const resetTimer = document.querySelector('.clear')

let inputMinutes = 0.5 * 60 //потом буду брать из settings
let shortIntMin = 0.2 * 60 // минуты для короткого интервала
let longIntMin = 5 * 60 // минуты для long интервала



let mainTimerClick = timerBtns[0].onclick = (e) => {
    // e.preventDefault()
    body.style.backgroundColor = 'rgb(189, 74, 74)'     
}

let shortTimerClick = timerBtns[1].onclick = (e) => {
    // e.preventDefault()
    body.style.backgroundColor = 'rgb(76, 145, 149)'
    body.style.transition = 'background-color 0.5s ease-in-out 0s'  

    startTimer.onclick = () => {
        getIntervalID()    // вызывая функцию запускается таймер присваевается значение intervalID    
    
        resetTimer.onclick = () => {
            clearInterval(IntervalID)
            time.textContent = '00:00'
        }
    }
    
}

timerBtns[2].onclick = (e) => {
    e.preventDefault()
    body.style.backgroundColor = 'rgb(74, 79, 189)'
    
    startTimer.onclick = () => {
        getLongIntervalID()    // вызывая функцию запускается таймер присваевается значение intervalID    
    
        resetTimer.onclick = () => {
            clearInterval(longIntervalID)
            time.textContent = '00:00'
        }
    }
}

// ------INTERVALS------

let intervalID
let longIntervalID

function getIntervalID() {
    intervalID = setInterval(pomodoroInterval, 1000)  
}

function getLongIntervalID() {
    longIntervalID = setInterval(longInterval, 1000)  
}

// ------POMODORO TIMER-----

function pomodoroInterval() {
    let sec = Math.floor(inputMinutes % 60)  //Получаем секунды
    let min = Math.floor(inputMinutes / 60 % 60)   // Получаем минуты
    let hour = Math.floor(inputMinutes / 60 / 60 % 60)  // Получаем часы
    let strTimer = ''
    
    if (inputMinutes > 0 && inputMinutes <= 3600) {
        strTimer = `${(min+'').padStart(2, 0)}:${(sec+'').padStart(2, 0)}`
        time.textContent = strTimer
        --inputMinutes  // Уменьшаем таймер
    } else {
        strTimer = `${(hour+'').padStart(2, 0)}:${(min+'').padStart(2, 0)}:${(sec+'').padStart(2, 0)}`
        time.textContent = strTimer
        --inputMinutes 
    }

    if (inputMinutes == 0) {
        clearInterval(intervalID)
        shortTimerClick()
        setInterval(shortInterval, 1000)
    } 
}

// ----FOR SHORT BRAEK----

function shortInterval() {
    let sec = Math.floor(shortIntMin % 60)  //Получаем секунды
    let min = Math.floor(shortIntMin / 60 % 60)   // Получаем минуты
    let strTimer = ''

    if (shortIntMin > 0) {
        strTimer = `${(min+'').padStart(2, 0)}:${(sec+'').padStart(2, 0)}`
        time.textContent = strTimer
        --shortIntMin  // Уменьшаем таймер
        }
}

// -----LONG BREAK----

function longInterval() {
    let sec = Math.floor(longIntMin % 60)  //Получаем секунды
    let min = Math.floor(longIntMin / 60 % 60)   // Получаем минуты
    let strTimer = ''

    if (longIntMin > 0 && longIntMin <= 3600) {
        strTimer = `${(min+'').padStart(2, 0)}:${(sec+'').padStart(2, 0)}`
        time.textContent = strTimer
        --longIntMin  // Уменьшаем таймер
    } else {
        strTimer = `${(hour+'').padStart(2, 0)}:${(min+'').padStart(2, 0)}:${(sec+'').padStart(2, 0)}`
        time.textContent = strTimer
        --longIntMin
    }
}

let playBtn = document.querySelector('.playMusic')

let audio = new Audio('../../audio/Enigma.mp3')
console.log(audio)
// audio.play()

playBtn.onclick = () => { audio.play() }

startTimer.onclick = () => {
    getIntervalID() // вызывая функцию запускается таймер присваевается значение intervalID    

    
    // const repeatPromise = new Promise((res, rej) => {
    //     setInterval(() => {
    //        res(getIntervalID()) 
    //     }, ((inputMinutes + shortIntMin) * 1000));
    // })

    // repeatPromise.then((val) => val) 

    // начинает срабатывать на второй круг но идет не от заданного занчения???

   
    
}

resetTimer.onclick = () => {
    clearInterval(intervalID) // Продумать!!!
    time.textContent = '00:00'
}








