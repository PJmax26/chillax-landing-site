let menuBtn = document.querySelector('.menu')
let closeBtn = document.querySelector('.close')
let navBar = document.querySelector('.navbar')

menuBtn.onclick = () => {
    navBar.style.right = 0
}

closeBtn.onclick = () => {
    navBar.style.right = '-100%'
}