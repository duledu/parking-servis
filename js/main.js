// brand text setInterval
var brand = document.querySelector('.brandText');
var text = "Bujanovac";
var winHeight;
var indexHeight;

var fromTop;

function typing() {
  var brandtext = text.split("");
  var loop = setInterval(function () {
    if (brandtext.length !== 0) {
      brand.innerHTML += brandtext.shift();


    }else{
      clearInterval(loop);
    }

  },350)


}
typing();
// End brand text setInterval





// back to top

$(".back-to-top").click(function () {
  $("html, body").animate({scrollTop:0}, 1000)

});
$(".back-to-top1").click(function () {
  $("html, body").animate({scrollTop:0}, 1000)

});
$(".back-to-topSMS").click(function () {
  $("html, body").animate({scrollTop:0}, 1000)

});

// End back to top


// $('.dada, .dada1, .dada2').on("mouseenter" , function () {
//   $(this).toggleClass('animated heartBeat')
//   return('dada');
//
// });


//index icon animation
 $('.mob').on('mouseenter' , function () {
   $('.dada').toggleClass('animated heartBeat')

 });
 $('.mob1').on('mouseenter' , function () {
   $('.dada1').toggleClass('animated heartBeat')

 });
 $('.mob2').on('mouseenter' , function () {
   $('.dada2').toggleClass('animated heartBeat')

 });
 //End index icon animation



//  footer animation slideUp
  function footerSlideUp () {


   $(window).scroll(function () {
      var y = $(this).scrollTop();

      if (y > 5) {
        $('footer').addClass('animated slideInUp dalay-s4');

      }else{
        $('footer').removeClass('animated slideInUp dalay-s4');
     }
    });
  };
  footerSlideUp();
  //End

// function sectionHeight() {
//   winHeight = $(window).height();
// $('#index').css('min-height', winHeight);
// };
// sectionHeight();
//
//
// $(window).on('scroll', function () {
//   fromTop = $(window).scrollTop();
//
//   console.log(fromTop);
// if (fromTop > $('#index')) {
//   $('footer').addClass('animated slideInUp dalay-s4');
//
// }
// else{
//   $('footer').removeClass('animated slideInUp dalay-s4');
// }
// })
// console.log(index);

// height of window index

function indexHeightwindow() {
  indexHeight = $(window).height();
  console.log(indexHeight);

  $('#index').css('min-height', indexHeight);

};
 indexHeightwindow();
