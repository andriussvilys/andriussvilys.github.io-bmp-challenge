// import $ from 'jquery';

const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})

let mobile = null

//get a list of all partner ids in #work component


const scrollToHorizontal = (id, parent_id) => {
    const parent = $(`#${parent_id} .slick-dots`)[0]
    const dot = $(`#${id}`)[0]
    let scrollTo = {behavior: 'smooth'}
    if(!parent){
      return
    }
    if(!id){
      scrollTo.left = 0
      parent.scrollTo(scrollTo)
      return
    }
    const dotPosition = dot.getBoundingClientRect().x
    const parentX = parent.getBoundingClientRect().x
        if(dot){
        if(dotPosition - parentX > 80){
            scrollTo.left = (dotPosition - parentX) / 2
        }
          else{
              scrollTo.left = -30
          }
          if(parent.scrollLeft > 0){
            scrollTo.left += parent.scrollLeft
          }
          parent.scrollTo(scrollTo)
        }
  }

//   let options = {
//     root: $('#work .slick-dots').width(),
//     rootMargin: `0 0 0 ${$('#work .slick-dots').width()/2}px`,
//     threshold: 1.0
//   }
  
//   let observer = new IntersectionObserver(isInMiddle, options);
//   let partnerIds = Object.values($('#work li')).map(li => li.id).filter(item => item !== undefined)
//   partnerIds.forEach(id => {
//     //   if(document.getElementById(id).classList.contains("slick-active")){
//     //       console.log("is observed")
//     //       console.log(id)
//     //       observer.observe(document.getElementById(id))
//     //   }
//       document.getElementById(id).addEventListener("click", ()=>{
//           scrollToHorizontal(id, "work")
//       })
//   })
//     observer.observe()

//   const isInMiddle = (entries) => {
       
//   }

  const checkMobile = () => {
      setTimeout(() => {          
          if(document.getElementById("people").getBoundingClientRect() > 768){
              return false
          }
          else{
              return true
          }
      }, 600);
  }

  window.addEventListener("resize", ()=>{
    mobile = checkMobile()
  })
  


  $(document).on('ready', function () {
    mobile = checkMobile()
    setTimeout(() => {        
        let partnerIds = Object.values($('#work li')).map(li => li.id).filter(item => item !== undefined)
        partnerIds.forEach(id => {
            document.getElementById(id).addEventListener("click", ()=>{
                console.log(id)
                scrollToHorizontal(id, "work")
            })
        })
    }, 1000);
    $(".your-class").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3
    });
    $(".logos-wrapper").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 0.25,
        slidesToScroll: 0.25,
        // autoplay: true,
        // autoplaySpeed: 600
    });
    $(".testimonials-mainBody").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 600
    });
});


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