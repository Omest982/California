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
