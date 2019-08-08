import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(function(){
    $('.logos-wrapper').slick({
        rtl:true,
        infinite:true,
        speed: 500,
        cssEase: 'linear',
        // autoplay: true,
        autoplaySpeed: 6000,
        // arrows: true,
        draggable: true,
        slidesToShow: 4, 
        slidesToScroll: 2
    });
  });

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