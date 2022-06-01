const btnHamburgur = document.querySelector('#jsbtnHamburgur')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')


btnHamburgur.addEventListener('click', function(){ 
    // console.log('clicked')
    
    if(header.classList.contains('open')){ // Close hamburgur menu
        console.log('close')

        header.classList.remove('open')
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
    } else { // Open hamburgur menu
        console.log('open')

        header.classList.add('open') 
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')

    } 
})