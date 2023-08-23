/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var label = document.querySelectorAll('label');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

label.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* ########################################### hero parallax ############################################## */
// window.onload = function () {

//   var parallaxBox = document.getElementById('parallax');
//   var
//       /* c1left = document.getElementById('l1').offsetLeft,
//                   c1top = document.getElementById('l1').offsetTop, */
//       c2left = document.getElementById('l2').offsetLeft,
//       c2top = document.getElementById('l2').offsetTop,
//       c3left = document.getElementById('l3').offsetLeft,
//       c3top = document.getElementById('l3').offsetTop,
//       c4left = document.getElementById('l4').offsetLeft,
//       c4top = document.getElementById('l4').offsetTop,
//       c5left = document.getElementById('l5').offsetLeft,
//       c5top = document.getElementById('l5').offsetTop,
//       c6left = document.getElementById('l6').offsetLeft,
//       c6top = document.getElementById('l6').offsetTop;
//       c7left = document.getElementById('l7').offsetLeft,
//       c7top = document.getElementById('l7').offsetTop,
//       // c8left = document.getElementById('l8').offsetLeft,
//       // c8top = document.getElementById('l8').offsetTop,
//       // c9left = document.getElementById('l9').offsetLeft,
//       // c9top = document.getElementById('l9').offsetTop;
//       // c10left = document.getElementById('l10').offsetLeft,
//       // c10top = document.getElementById('l10').offsetTop;
//       // c11left = document.getElementById('l11').offsetLeft,
//       // c11top = document.getElementById('l11').offsetTop;

//   parallaxBox.onmousemove = function (event) {
//       event = event || window.event;
//       var x = event.clientX - parallaxBox.offsetLeft,
//           y = event.clientY - parallaxBox.offsetTop;

//       /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
//       mouseParallax('l2', c2left, c2top, x, y, 25);
//       mouseParallax('l3', c3left, c3top, x, y, 20);
//       mouseParallax('l4', c4left, c4top, x, y, 35);
//       mouseParallax('l5', c5left, c5top, x, y, 30);
//       mouseParallax('l6', c6left, c6top, x, y, 45);
//       mouseParallax('l7', c7left, c7top, x, y, 30);
//       // mouseParallax('l8', c8left, c8top, x, y, 25);
//       // mouseParallax('l9', c9left, c9top, x, y, 40);
//       // mouseParallax('l10', c10left, c10top, x, y, 45);
//       // mouseParallax('l11', c11left, c11top, x, y, 20);
//   };

// };

// function mouseParallax(id, left, top, mouseX, mouseY, speed) {
//   var obj = document.getElementById(id);
//   var parentObj = obj.parentNode,
//       containerWidth = parseInt(parentObj.offsetWidth),
//       containerHeight = parseInt(parentObj.offsetHeight);
//   obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
//   obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
// }
/* ########################################### /hero parallax ############################################## */

// let mouseCursor = document.querySelector(".cursor");
// let mouseCursor2 = document.querySelector(".cursor2");
// let iframes = document.querySelectorAll("iframe");

// window.addEventListener('mousemove', cursor);
// window.addEventListener('mousemove', cursor2);

// function cursor(e){

// 	mouseCursor.style.top = "calc(" +e.pageY + "px - 1rem)";
//   	mouseCursor.style.left = "calc(" +e.pageX + "px - 1rem)";
// }

// iframes.forEach(frame =>{
    
//   frame.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("hide");
//     mouseCursor2.classList.remove("hide");
//   });

//     frame.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("hide");
//     mouseCursor2.classList.add("hide");
//   });
  	
// });


(function ($) {
    'use strict';
    
AOS.init({
    once: true
});

    // ----------------------- 
        // Progress Bar--------------------
        // 
        // 

    $(window).on ('load', function (){ 
          
        $('.progress-bar').each(function(){
                var width = $(this).data('percent');
                $(this).css({'transition': 'width 3s'});
                $(this).appear(function() {
                    console.log('hello');
                    $(this).css('width', width + '%');
                    $(this).find('.count').countTo({
                        from: 0,
                        to: width,
                        speed: 3000,
                        refreshInterval: 50
                    });
                });
            });
        }); 

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:8000
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

     $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


})(jQuery);
