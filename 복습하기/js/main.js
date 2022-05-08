$(function () {
  $(".main_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    dots: true,
    // dot: true를 하면 dots안 ul에 li를 자동으로 설정하게 함. html에서 만들지 않아도 li를 가져다 쓸수있다.//
  });
});
