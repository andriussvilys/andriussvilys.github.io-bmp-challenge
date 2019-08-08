// import $ from 'jquery';
// import slick from 'slick-carousel';

// $(document).ready(function(){
//     $('.logos-wrapper').slick({
//         rtl:true,
//         infinite:true,
//         speed: 500,
//         cssEase: 'linear',
//         // autoplay: true,
//         autoplaySpeed: 6000,
//         // arrows: true,
//         draggable: true,
//         slidesToShow: 4, 
//         slidesToScroll: 2
//     });
//   });


const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})


const bullet2 = document.getElementById('carousel-slider--bullet_2');
const logosWrapper = document.querySelector(".logos-wrapper")


function filterBullet(currentBullet){
    let filtered = Array.from($('.carousel-slider--bullet')).filter(item => item.id !== currentBullet);
    filtered.forEach(item => item.classList.remove('bullet__full'));
    return filtered;
}

let moveLeftDesktop = [0, 25, 50];
let moveLeftMobile = [0, 100, 200, 300, 400, 500]

const carouselBullets = ()=>{
    Array.from($('.carousel-slider--bullet')).forEach((bullet, index) => {
        $(bullet).mouseover(function(){
            $(`#${bullet.id}`).addClass('bullet__full');
            if($(document).width() > 768 ){
                $(logosWrapper).css('left', `-${moveLeftDesktop[index]}%`);
            }
            else($(logosWrapper).css('left', `-${moveLeftMobile[index]}%`))
            filterBullet(bullet.id);
        })
    })
}

carouselBullets();

$(window).resize(function(){
    const firstBullet = $('.carousel-slider--bullet')[0];
    filterBullet(firstBullet);
    $(logosWrapper).css('left', `0`);
    $(firstBullet).addClass('bullet__full');

    carouselBullets();
  });
