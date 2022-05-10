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

  ///////////////////////////////////////////////////////////
});
