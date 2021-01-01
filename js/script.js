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
  // .addIndicators()
  .addTo(controller);

//skill

var skillsDiv = jQuery(".about");

jQuery(window).on("scroll", function () {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery(".skillbar").each(function () {
      jQuery(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: jQuery(this).attr("data-percent"),
          },
          6000
        );
    });
  }
});

// top Button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("conForm");
  // var button = document.getElementById("my-form-button");
  // var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // status.classList.add("success");
    // status.innerHTML = "Thanks!";
  }

  function error() {
    // status.classList.add("error");
    // status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
