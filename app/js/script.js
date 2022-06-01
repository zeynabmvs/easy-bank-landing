const btnHamburgur = document.querySelector('#jsbtnHamburgur')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

btnHamburgur.addEventListener('click', function(){ 
    console.log(fadeElems)
    
    if(header.classList.contains('open')){ // Close hamburgur menu
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        });
    } 
    else { // Open hamburgur menu
        body.classList.add('noscroll')
        header.classList.add('open') 
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        });
    } 
})