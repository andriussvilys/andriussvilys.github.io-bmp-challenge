// import $ from 'jquery';

const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})

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

  $(document).on('ready', function () {




    setTimeout(() => {        
        let partnerIds = Object.values($('#work li')).map(li => li.id).filter(item => item !== undefined)
        partnerIds.forEach(id => {
            document.getElementById(id).addEventListener("click", ()=>{
                console.log(id)
                scrollToHorizontal(id, "work")
            })
        })

        let options = {
            root: $("#carousel .slick-dots")[0],
            rootMargin: "0px",
            threshold: 0.05
          }
    
        const carouselActiveDot = $("#carousel .slick-active")[0]
        const carouselDots = Object.values($("#carousel .slick-dots li")).filter(value => value.id)

        function intersectionCallback(entries) {
            entries.forEach(function(entry) {
                // console.log(entry.id)
              if (entry.isIntersecting) {
                console.log("is intersecting")
              } else {
                entry.style.border = "1px solid red"
                console.log("is NOT intersecting")
              }
            });
          }
      
        // let observer = new IntersectionObserver(()=>{
        //     intersectionCallback([carouselActiveDot])
        // }
        // ,options);
        
        // [carouselActiveDot].forEach(dot => {
        //     observer.observe(dot)
        // })
        let observer = new IntersectionObserver(()=>{
            intersectionCallback(carouselDots)
        }
        ,options);
        
        carouselDots.forEach(dot => {
            observer.observe(dot)
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
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 0.25,
                slidesToScroll: 0.25,
            }      
        }
        ]
        // autoplay: true,
        // autoplaySpeed: 600
    });
    $(".testimonials-mainBody").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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