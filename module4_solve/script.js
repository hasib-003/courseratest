
(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {    
      var firstLetter = names[i].charAt(0).toLowerCase();   
      if (firstLetter === 'j') {
        speakGoodBy.speak(names[i]);
      } else {
        speakHello.speak(names[i]);
      }
    }
    window.speakHello=speakHello;
    window.speakGoodBy=speakGoodBy;
    })(window);
