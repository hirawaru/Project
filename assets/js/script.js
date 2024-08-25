// AOS
AOS.init();
// End AOS

// SwiperJS
var swiperSliderThumb = new Swiper(".swiper-slider-thumb", {
  spaceBetween: 10,
  slidesPerView: "auto",
});

var swiperSliderMain = new Swiper(".swiper-slider-main", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperSliderThumb,
  },
});

var swiperSection5 = new Swiper(".swiperSection5", {
  spaceBetween: 12,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// End SwiperJS

// ViewerJS
const viewerSection5 = document.querySelector("#viewerSection5");
if(viewerSection5) {
  new Viewer(viewerSection5);
}

const viewerSliderMain = document.querySelector("#viewerSliderMain");
if(viewerSliderMain) {
  new Viewer(viewerSliderMain);
}
// End ViewerJS