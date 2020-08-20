(function(window){
var speakGoodBy={};
speakGoodBy.speakWord = "Good Bye";
speakGoodBy.speak=function(name) {
  console.log(speakGoodBy.speakWord + " " + name);
}
window.speakGoodBy=speakGoodBy;
})(window);

