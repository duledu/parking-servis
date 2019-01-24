var brand = document.querySelector('.brandText');
var text = "Bujanovac";

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





$(".back-to-top").click(function () {
  $("html, body").animate({scrollTop:0}, 1000)

});
$(".back-to-top1").click(function () {
  $("html, body").animate({scrollTop:0}, 1000)

});


// $('.dada, .dada1, .dada2').on("mouseenter" , function () {
//   $(this).toggleClass('animated heartBeat')
//   return('dada');
//
// });
 $('.mob').on('mouseenter' , function () {
   $('.dada').toggleClass('animated heartBeat')

 });
 $('.mob1').on('mouseenter' , function () {
   $('.dada1').toggleClass('animated heartBeat')

 });
 $('.mob2').on('mouseenter' , function () {
   $('.dada2').toggleClass('animated heartBeat')

 });
 $(document).scroll(function () {
   var y = $(this).scrollTop();
   if (y > 35) {
     $('footer').addClass('animated slideInUp dalay-s4');

   }else{
     $('footer').removeClass();
   }
 });
