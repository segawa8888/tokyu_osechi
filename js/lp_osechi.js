
$(function(){
  $('.infinity-loop .slide').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 80000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    variableWidth: true,
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false // スライダーにマウスホバーした時にスライドを停止させるか
  });
});

// heightline
$(window).load(function() {
  $(".product-block.sec01 .card .product-area").heightLine();
  $(".product-block.sec02 .card .product-area").heightLine();
  $(".product-block.sec03 .card .product-area").heightLine();
  $(".product-block.sec04 .card .product-area").heightLine();
  $(".product-block.sec05 .card .product-area").heightLine();
  $(".product-block.sec06 .card .product-area").heightLine();
  $(".product-block.sec07 .card .product-area").heightLine();

  $(".product-block.sec01 .card .message-area .comment").heightLine();
  $(".product-block.sec02 .card .message-area .comment").heightLine();
  $(".product-block.sec03 .card .message-area .comment").heightLine();
  $(".product-block.sec04 .card .message-area .comment").heightLine();
  $(".product-block.sec05 .card .message-area .comment").heightLine();
  $(".product-block.sec06 .card .message-area .comment").heightLine();
  $(".product-block.sec07 .card .message-area .comment").heightLine();
});
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  
$(function(){
    scrollSensor();
  });
  /*
   * SCROLL SENSOR v2.3
   * (c) 2017 Iori Tatsuguchi
   * ------------------------
   * 1.) スクロール方向
   *     スクロール中およびスクロール後一定時間、
   *     所定の要素に対し .scrolling 、また方向に応じ .scrolling-up を追加
   *     その後位置の変化に応じ所定の要素に対し .scrolled-up を追加
   * 
   * 2.) スクロール深度
   *     現在のスクロールオフセットが所定の深度に到達している場合、
   *     所定の要素に対し .deep-scroll を追加
   */
  function scrollSensor() {
    var target = $('body'), // 結果をクラス名として付与する要素
      heroHeight = $('#appBody').height(),
      activeFlag = false,
      activeFlagTimeout = 1200, // スクロールフラグ有効時間（ミリ秒）
      activeFlagExecution,
      deepScrollDepth = heroHeight, // .deep-scroll 付与深度
      currentY = 0,
      previousY = 0;
  
      console.log(heroHeight);
      console.log(deepScrollDepth);
  
    function activeFlagTimer() {
      activeFlag = true;
      target.addClass('scrolling').removeClass('scrolled-up');
  
      if (activeFlagExecution !== undefined)
        clearTimeout(activeFlagExecution);
      activeFlagExecution = setTimeout(function() {
        activeFlag = false;
        if (target.hasClass('scrolling-up'))
          target.addClass('scrolled-up');
        target.removeClass('scrolling scrolling-up');
      }, activeFlagTimeout);
    };
  
    $(document).scroll(function() {
      activeFlagTimer();
      currentY = $(document).scrollTop();
  
      if (currentY < previousY)
        target.addClass('scrolling-up');
      else
        target.removeClass('scrolling-up');
      previousY = currentY;
  
      if (currentY > deepScrollDepth)
        target.addClass('deep-scroll');
      else
        target.removeClass('deep-scroll');
    });
  }
  
  function scrollToAnchor(target, customOffset, scrollTimer) {
    /* set header offset according to window width */
    if (breakpoint('sm'))
      var headerOffset = 0;
    else
      var headerOffset = $('#header').next().offset().top + 1;
  
    var customOffset = customOffset === undefined ? 0 : customOffset;
  
    if (scrollTimer === undefined)
      var scrollTimer = 1000;
  
    $("html, body").stop().animate({
      scrollTop: $(target).offset().top - headerOffset - customOffset
    }, scrollTimer);
  }
  