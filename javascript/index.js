// import $ from 'jquery';

const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})

$('.testimonials-mainBody')[0].slick({});


// const bullet2 = document.getElementById('carousel-slider--bullet_2');
// const logosWrapper = document.querySelector(".logos-wrapper")


// function filterBullet(currentBullet){
//     let filtered = Array.from($('.carousel-slider--bullet')).filter(item => item.id !== currentBullet);
//     filtered.forEach(item => item.classList.remove('bullet__full'));
//     return filtered;
// }

// let moveLeftDesktop = [0, 25, 50];
// let moveLeftMobile = [0, 100, 200, 300, 400, 500]

// const carouselBullets = ()=>{
//     Array.from($('.carousel-slider--bullet')).forEach((bullet, index) => {
//         $(bullet).mouseover(function(){
//             $(`#${bullet.id}`).addClass('bullet__full');
//             if($(document).width() > 768 ){
//             //     $(logosWrapper).animate({'left': `-${moveLeftDesktop[index]}%`}, 200);
//             // }
//             // else($(logosWrapper).animate({'left': `-${moveLeftMobile[index]}%`}, 200));
//             $(logosWrapper).css('left', `-${moveLeftDesktop[index]}%`);
//             }
//             else($(logosWrapper).css('left', `-${moveLeftMobile[index]}%`))
//             filterBullet(bullet.id);
//         })
//     })
// }

// carouselBullets();

// $(window).resize(function(){
//     const firstBullet = $('.carousel-slider--bullet')[0];
//     filterBullet(firstBullet);
//     $(logosWrapper).animate({'left': `0`}, 200);
//     // $(logosWrapper).css('left', `0`);
//     $(firstBullet).addClass('bullet__full');
//     carouselBullets();
//     if($(document).width() > 468){
//         $('.gallery').css('height', '50vw');
//     }
//     if($(document).width() < 469){
//         $('.gallery').css('height', '300vw');
//     }
//   });

//   const gridCta = $('#grid-cta');
//   const gridExtra1 = $('#grid-extra__1');
//   const gridExtra2 = $('#grid-extra__2');

// //   gridCta.click(function(){
// //     $('#grid-extra__1').css('right', '25%');
// //     $('#grid-extra__2').css('right', '0');
// //   })
// let galleryHeight = 300;
//   gridCta.click(function(){
//     if($(document).width() > 468 ){
//         $('#grid-extra__1').animate({'right': '25%'}, 600);
//         $('#grid-extra__2').animate({'right': '0'}, 400);
//         return
//     }
//         if(galleryHeight === 900){return}
//         galleryHeight += 200;
//         console.log(galleryHeight)
//         $('.gallery').animate({height: `${galleryHeight}vw`});
//         console.log(galleryHeight)
//         // if(galleryHeight === 900){galleryHeight = 700}
//   })