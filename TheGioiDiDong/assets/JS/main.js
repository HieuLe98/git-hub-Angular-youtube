const addressBtn = document.querySelector('#address-form');
const addressClose = document.querySelector('#address-close');
let index = 0;

addressBtn.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = 'flex'
})

addressClose.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = 'none'
})

//Slider
const rightBtn = document.querySelector('.fa-caret-right');
const leftBtn = document.querySelector('.fa-caret-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');

rightBtn.addEventListener("click", function() {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0;
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
    for (let i = 0; i < liActive.length; i++) {
        liActive[i].classList.remove('active');       
    }
    liNumber[index].classList.add('active');
})

leftBtn.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = imgNumber.length - 1
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%';
    for (let i = 0; i < liActive.length; i++) {
        liActive[i].classList.remove('active');       
    }
    liNumber[index].classList.add('active');
})

//slider 1 ----------------------------------------------------------------------------
const liNumber = document.querySelectorAll('.slider-content-left-bottom li');
let liActive = document.getElementsByClassName('active');
liNumber.forEach(function(li, index) {
    li.addEventListener("click", function() {
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
    for (let i = 0; i < liActive.length; i++) {
        liActive[i].classList.remove('active');       
    }
    li.classList.add('active');
    })
})

//slider 2 ------------------------------------------------------------------------------
function imgAuto () {
    index = index + 1;
    if (index > imgNumber.length - 1) {
        index = 0
    }
    for (let i = 0; i < liActive.length; i++) {
        liActive[i].classList.remove('active');       
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + '%'
    liNumber[index].classList.add('active');
}

setInterval(imgAuto, 3000)