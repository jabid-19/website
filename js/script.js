sal();

const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 50, y: -20 },
    { x: 500, y: 10 },
    { x: 500, y: -50 },
    { x: 950, y: 100 },
    { x: 550, y: -50 },
    { x: 800, y: 0 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 2000,
  triggerHook: 0,
})
  .setTween(tween)
  .addTo(controller);

// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }



// function left() {
//   var element = document.getElementsByClassName("programming");
//   var i;
//   for (i = 0; i < element.length; i++) {
//     element[i].classList.toggle("button-after");
//   }
// }
// function right() {
//   var element = document.getElementsByClassName("design");
//   var i;
//   for (i = 0; i < element.length; i++) {
//     element[i].classList.toggle("button-after");
//   }
// }
// function bottom() {
//   var element = document.getElementsByClassName("others");
//   var i;
//   for (i = 0; i < element.length; i++) {
//     element[i].classList.toggle("button-after");
//   }
// }







$(document).ready(function () {

  //  setInterval("left()", 1000);
  //  setInterval("right()", 2000);
  //  setInterval("bottom()", 3000);


  $("#left").hover(function () {
    var element = document.getElementsByClassName("programming");
    var i;
    for (i = 0; i < element.length; i++) {
      element[i].classList.toggle("button-after");
    }
  });

  $("#right").hover(function () {
    var element = document.getElementsByClassName("design");
    var i;
    for (i = 0; i < element.length; i++) {
      element[i].classList.toggle("button-after");
    }
  });

  $("#bottom").hover(function () {
    var element = document.getElementsByClassName("others");
    var i;
    for (i = 0; i < element.length; i++) {
      element[i].classList.toggle("button-after");
    }
  });



  //top button
  var mybutton = document.getElementById("myBtn");
  var progress = document.getElementById("progress");
  var w = window.innerWidth;

  window.onscroll = function () {
    scrollFunction();
    myFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
      if (w > 800) {
        progress.style.display = "block";
      } else {
        progress.style.display = "none";
      }
    } else {
      mybutton.style.display = "none";
      progress.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  //eye


});
$(".move-area").mousemove(function (event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});