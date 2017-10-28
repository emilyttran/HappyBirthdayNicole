$(document).ready(function(){
var terms = ["Your love for coffee",
 "Your love for teas",
"Your love for felines",
"Your love for the environment",
"Your love for average white guys",
"Your independence",
"Your cute freckles",
"Your crooked smile",
"Your super cool friends",
"Your taste in music",
"Your slightly asian eyes",
"Your puns",
"Your deadpan humor",
"Your unbridled positivity",
"Your impressive flexibility",
"Your matter-of-fact way of speaking",
"Your pubescent voice",
"Your hippy vibe that only you can pull off",
"When you mimic other people’s voices",
"How expressive you are",
"The affection you never fail to give to your friends (even after we refuse it)"]; //array of terms to rotate

function rotateTerm() {
  var ct = $("#rotate").data("term") || 0;
  $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
              .fadeIn().delay(2000).fadeOut(200, rotateTerm);
}
​​​​​​​​​​​​​​​​​​​$(rotateTerm); //start it on document.ready

​});
