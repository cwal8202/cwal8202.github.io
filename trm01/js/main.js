$(function () {
  $(".main_slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    dots: true,
  });

  $(".mopen").on("click", function () {
    $(".gnb").toggleClass("active");
    $(".mopen").toggleClass("active");
  });
});

// toggleClass 는 클래스를 땠다 붙였다 하는 것이다. toggleClass() 괄호 안의 클래스를 땠다 붙였다 하는것이며 위 코드 같은 경우 .mopen을 클릭했을때 gnb=메뉴의 active 클래스가 작동하고 .mopen의 active 클래스가 작동하게 된다. 한번 더 클릭하면 toggleClass의 성질로 다시 active클래스가 때져 원래의 gnb=메뉴 와 .mopen이 된다.
