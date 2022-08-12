// let int = setInterval(blink, 500)
// let count = 0

// const hidden = document.querySelector('.hidden')

// function blink(){
//     count++
//     hidden.classList.toggle('hidden')
//     console.log(count)

//     if(count >= 10){
//         clearInterval(int)
//         hidden.classList.toggle('hidden')
//     }
// }

// blink()
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const section4 = document.querySelector('.section4')
const section2 = document.querySelector('.section2')
const night = document.querySelector('.day')
const black = document.querySelector('.container')
const day = document.querySelector('.day')


night.addEventListener('click', toggle)


function toggle(){
    header.classList.toggle('night')
    nav.classList.toggle('night')
    section4.classList.toggle('night')
    section2.classList.toggle('night')
    black.classList.toggle('night')
    day.classList.toggle('nightday')
    day.classList.toggle('day')

}
const section1 = document.querySelector('.section1') 

// const number = [1,2,3]

// number.forEach(num => {
//     setInterval(change, 4000)
//     function change() {
//         section1.classList.add(`background${num}`)
//     }
// });
const slide = document.querySelector('.smooth')
const alp = ['a','b','c']
let count = 0
const int = setInterval(loop, 1000)

function loop() {
    slide.classList.add('slide')
    let button = document.querySelector(`.${alp[count]}`)
    count++
    button.classList.toggle('teal')
    section1.classList.toggle(`background${count}`)
    if(count >= 3){
        count = 0
    }
}

