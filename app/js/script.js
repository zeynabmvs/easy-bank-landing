const btnHamburgur = document.querySelector('#jsbtnHamburgur')
const header = document.querySelector('.header')
const overlay =


btnHamburgur.addEventListener('click', function(){ 
    console.log('clicked')
    
    if(header.classList.contains('open')){ // Close hamburgur menu
        header.classList.remove('open')
    } else {
        header.classList.add('open') // Open hamburgur menu
    } 
})