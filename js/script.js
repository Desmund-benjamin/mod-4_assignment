(function(window) {  
  var helloSpeaker = {};
  var speakWord = "Hello";
  
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

})(window);

// byeSpeaker IIFE
(function(window) {  
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);

// IIFE to loop through names and apply the appropriate speaker
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
