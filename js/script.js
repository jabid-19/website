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
    { x: 800, y: 0 }
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 2000,
  triggerHook: 0
})
  .setTween(tween)
  // .addIndicators()
  .addTo(controller);

//skill

var skillsDiv = jQuery(".about");

jQuery(window).on("scroll", function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery(".skillbar").each(function() {
      jQuery(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: jQuery(this).attr("data-percent")
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
window.onscroll = function() {
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
