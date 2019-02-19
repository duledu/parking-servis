 var imgIndex = document.getElementsByTagName('img')[0];
 var imgIndex1 = document.getElementsByTagName('img')[1];
 var imgIndex2 = document.getElementsByTagName('img')[2];


 startRotate();

 function startRotate() {
   setTimeout(function () {
     $('.mob').addClass('animated flip');

   },3000)
   setTimeout(function () {
     $(".mob1").addClass('animated flip');

   },4000)
   setTimeout(function () {
     $('.mob2').addClass('animated flip');

   },5000)

    setTimeout(function () {
      $('.mob').removeClass('animated flip');
      $('.mob1').removeClass('animated flip');
      $('.mob2').removeClass('animated flip');


    },7000)

    setTimeout(startRotate,9000)

 };






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
// popUp

$('#close').click(function () {
  $('.popUp').css('display', 'none');

})

//End popUp

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

  $('#contact-form').validate();
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

// function indexHeightwindow() {
//   indexHeight = $(window).height();
//   console.log(indexHeight);
//
//
//   $('#index').css('min-height', indexHeight);
//
// };
//  indexHeightwindow();



// Plugin validates
 // popUp
