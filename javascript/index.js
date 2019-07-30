const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})

// function hamburgerClick(hamburger){
//     hamburger.addEventListener('click', ()=>{
//         links.classList.toggle('menu-links-container__display-on')
//     })
// }