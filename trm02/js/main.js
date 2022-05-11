$(function () {
  ////////////////////////////////////////////////////////

  $(".top_banner i").on("click", function () {
    $(".top_banner").slideUp();
  });

  // init reInit은 처음적용할때 씀//
  $(".main_slider").on("init reInit afterChange", function () {
    let current = $(".slick-current");
    current.addClass("on").siblings().removeClass("on");
  });

  $(".main_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".movie .dec i:nth-of-type(1)").on("click", function () {
    $(".movie video").trigger("play");
  });

  $(".movie .dec i:nth-of-type(2)").on("click", function () {
    $(".movie video").trigger("pause");
  });

  $("#myMovie").YTPlayer({
    videoURL: "https://youtu.be/QbhmTM1cRro",
    containment: ".utube",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
  });
  $(".utube i:nth-of-type(1)").on("click", function () {
    $("#myMovie").YTPPlay();
  });

  $(".utube i:nth-of-type(2)").on("click", function () {
    $("#myMovie").YTPPause();
  });
  // 유튜브 동영상 가져올려고 ytpplayer js와 css넣음

  // 이거 이해해보자
  // $(".product_slider").on("init reInit afterChange", function () {
  //   let current = $(".product_slider .slick-current");
  //   current.addClass("on").siblings().removeClass("on");
  // });

  $(".product_slider").slick({
    slidesToShow: 5,
    centerMode: true,
    arrows: false,
    dots: true,
    autoplay: true,
  });

  $(".product_list i.s_left").on("click", function () {
    $(".product_slider").slick("slickPrev");
  });

  $(".product_list i.s_right").on("click", function () {
    $(".product_slider").slick("slickNext");
  });

  // 이건 진짜 모르겠다... siblings가 뭔지 eq,idx, index알아보기//
  $(".tab_link>li").on("click", function () {
    var idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".tab_content > li").eq(idx).addClass("on").siblings().removeClass("on");
  });

  $(".footer #link").on("change", function () {
    var lik = $(this).val();
    if (lik) window.open(lik);
  });

  ///////////////////////////////////////////////////////////
});
