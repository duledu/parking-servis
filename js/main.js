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
