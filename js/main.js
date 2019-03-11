 var imgIndex = document.getElementsByTagName('img')[0];
 var imgIndex1 = document.getElementsByTagName('img')[1];
 var imgIndex2 = document.getElementsByTagName('img')[2];


// Index icon animate

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

// Index icon animate End




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





//Second index icon animation
 $('.mob').on('mouseenter' , function () {
   $('.dada').toggleClass('animated heartBeat')

 });
 $('.mob1').on('mouseenter' , function () {
   $('.dada1').toggleClass('animated heartBeat')

 });
 $('.mob2').on('mouseenter' , function () {
   $('.dada2').toggleClass('animated heartBeat')

 });
 //End of Second index icon animation

// PopUp


  $('#close').click(function () {
    $('.popUp').hide();
  });

  // RESTART BANERA
  var bannerHolder;
  var newOne;
  setInterval(function() {
  bannerHolder = document.getElementById("one-banner");
  newOne = bannerHolder.cloneNode(true);
  bannerHolder.parentNode.replaceChild(newOne, bannerHolder);
  }, 9000);
  //END RESTART BANERA
// function popUpHeight() {
//   bannerPopup = $(window).height();
//   $(".popUp").css("min-height",bannerPopup);
//
//
// }
// popUpHeight();

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


  //End footer animation slideUp

  // Contact form validation

  $('#contact-form').length && $('#contact-form').validate();

    //End Contact form validation

    // Contact validation console



  $('#send').click(function (e) {
    e.preventDefault();
    var data = $('#contact-form').serializeArray();


  });

  // End Contact validation console
