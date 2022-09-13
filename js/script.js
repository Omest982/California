const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
window.addEventListener("scroll", function () {
  let scroll = this.window.pageYOffset;
  if (scroll >= 1) {
    this.document.getElementById("header").classList.add("_scroll");
  } else {
    this.document.getElementById("header").classList.remove("_scroll");
  }
});
document.getElementById("search").onfocus = function () {
  $(".search__bar").addClass("shadow__search");
};
document.getElementById("search").onblur = function () {
  $(".search__bar").removeClass("shadow__search");
};
$("#menu__open").click(() => {
  $(".nav__wrapper").addClass("nav__wrapper-active");
  $(".nav__inner").addClass("nav__inner-active");
});
document.getElementById("menu__open").addEventListener("click", () => {
  document.body.classList.add("_lock__scroll");
});

$(".nav__button").click(() => {
  if ($(".header__burger").css("display") == "flex") {
    if ($("#nav__image").hasClass("nav__image-rotate")) {
      $("#nav__popup").removeClass("_slide__open");
      $("#nav__popup").addClass("_slide__close");
      $("#nav__image").removeClass("nav__image-rotate");
    } else {
      $("#nav__image").addClass("nav__image-rotate");
      $("#nav__popup").addClass("_slide__open");
      $("#nav__popup").removeClass("_slide__close");
    }
  }
});
$(".nav__close").click(() => {
  $(".nav__wrapper").removeClass("nav__wrapper-active");
  $(".nav__inner").removeClass("nav__inner-active");
  document.body.classList.remove("_lock__scroll");
});

function Resize() {
  if ($(".header__burger").css("display") == "none") {
    $("#nav__image").addClass("_rotating");
    $("#nav__image").removeClass("nav__image-rotate");
    $("#nav__popup").removeClass("_slide__close");
    $("#nav__popup").removeClass("_slide__open");
    $(".nav__wrapper").removeClass("nav__wrapper-active");
    $(".nav__inner").removeClass("nav__inner-active");
    document.body.classList.remove("_lock__scroll");
  } else {
    if (!$("#nav__popup").hasClass("_slide__open")) {
      $("#nav__image").removeClass("_rotating");
      $("#nav__popup").addClass("_slide__close");
    }
  }
}

Resize();

$(window).resize(() => {
  Resize();
});
