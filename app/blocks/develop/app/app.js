$(document).ready(function(){

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
    console.log("f ",docViewTop);
  }

  $(window).scroll(function() {
    $(".header.animated").each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("slideInDown");
      }
    });
  });

  $('#progress_00, #progress_01, #progress_02').find('figcaption').each(function(i, e) {
      var $el = $(e),
        text = $(e).text();

      $({
        percentage: 70
      }).stop(true).animate({
        percentage: text
      }, {
        duration: 4000,
        easing: "easeOutExpo", //easeOutBounce
        step: function() {
          var percentageVal = Math.floor(this.percentage);
          $el.text(percentageVal);
        }
      }).promise().done(function() {
        $el.text(text);
      });
  })

  $('.tabs__el a').mouseover(function(){
    if ($(this).hasClass("selected") === false){
      $('.tabs__el a').removeClass('selected');
      $(this).addClass('selected');
    }
      var selectionId = $(this).attr('id');
      $('.tabs__content .stream__el').css('display', 'none');
      $('.stream__el#' + selectionId).css('display', 'block');
    });

  $( ".tab" ).mouseout(function() {
    $( '.tabs__content .stream__el' ).css('display', 'none');
    $( '.tabs__content .stream__el:first' ).css('display', 'block');
  });


  $('.slider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });

  $('.wrapper__parallax').parallax({imageSrc: 'earth.png'});

});		