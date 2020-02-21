// import $ from 'jquery';

const links = document.getElementById('links');

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', ()=>{
    links.classList.toggle('menu-links-container__display-on')
})

/**
 * 
 * @param {*} id Id of an elem to scrollTo
 * @param {*} parent_id takes Id of scrollable parent
 */
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
    if(dot){
      scrollTo.left = dot.offsetLeft - 30
      parent.scrollTo(scrollTo)
    }
}

  const observeCarousel = () => {
    setTimeout(() => {      
      const carouselDots = Object.values($("#carousel .slick-dots li")).filter(value => value.id)
  
      const config = { attributes: true, childList: true, subtree: true, attributeOldValue: true, attributeFilter: ['class'], };
  
      const mutationCallback = (entries) => {
        entries.forEach(entry => {
          if(entry.target.classList.contains("slick-active")){
            scrollToHorizontal(entry.target.id, "carousel")
          }
        })
      }
  
      let mutObserver = new MutationObserver(mutationCallback)
  
      carouselDots.forEach(dot => {
        mutObserver.observe(dot, config)
      })
    }, 100);
  }

const gridCta = $('#grid-cta');

let galleryHeight = 300;
  gridCta.click(function(){
    if($(document).width() > 769 ){
        $('#grid-extra__1').animate({'right': '25%'}, 600);
        $('#grid-extra__2').animate({'right': '0'}, 400);
        return
    }
        if(galleryHeight === 900){return}
        galleryHeight += 200;
        $('.gallery').animate({height: `${galleryHeight}vw`});
  })

  $(window).resize(function(){
    scrollCounter = 0
    observeCarousel()
    scrollToHorizontal($("#carousel .slick-dots .slick-active")[0].id, "carousel")
    if($(document).width() > 769 ){
      $('.gallery')[0].style.height = "50vw"
    }
    else{
      $('.gallery')[0].style.height = "300vw"
      galleryHeight = 300
    }
  });

  $(document).on('ready', function () {

    document.querySelectorAll(".menu--list li").forEach(li => {
      li.addEventListener("click", ()=>{
        console.log("clicked LI")
        document.querySelector(".menu-links-container").classList.toggle("menu-links-container__display-on")

      })
    })
    
    observeCarousel()

    setTimeout(() => {        
        let partnerIds = Object.values($('#work li')).map(li => li.id).filter(item => item !== undefined)
        partnerIds.forEach(id => {
            document.getElementById(id).addEventListener("click", ()=>{
                console.log(id)
                scrollToHorizontal(id, "work")
            })
        })

        const carouselActiveDot = $("#carousel .slick-active")[0]

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
              slidesToShow: 0.5,
              slidesToScroll: 0.5,
            }
        },
        { 
          breakpoint: 468,
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
    $("#carousel-photos").slick({
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 468,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        }
    }
    ]
    })
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

