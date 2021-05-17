// -----Email-----
function sendMail(params) {
  var tempParams = {
    name: document.getElementById("name").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("gmail", "template_ayg2t61", tempParams).then((res) => {
    window.location.reload();
    console.log("success", res.status);
  });
}

// ----Scroll Animations----
sal();

// ----Plane----
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

// ----top button & progress bar----
var mybutton = document.getElementById("myBtn");
var progress = document.getElementById("progress");
var w = window.innerWidth;

window.onscroll = function () {
  scrollFunction();
  myFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ----JQuery----
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
});
