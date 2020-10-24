$(document).ready(function() {
  // 處理選單打開/關閉
  $('.dropdown > a').click(function(event) {
    event.preventDefault();
    $('a .fas').toggleClass('active');
    $('.dropdown-menu').toggle();
  });

  // 當按到非選單範圍的地方，將選單收合
  $('body').on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").hide();
        $('a .fas').removeClass('active');
    }            
  });

  // 輪撥效果
  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});