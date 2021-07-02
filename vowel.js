function vowelCounter(str) {
  var sentences = str.toLowerCase();
  var counter = 0
  for (var i = 0; i < sentences.length; i++) {
    if (sentences.charAt(i) == "a" || sentences.charAt(i) == "e" || sentences.charAt(i) == "i" || sentences.charAt(i) == "o") {
      counter++;
    }
  }
  
  return counter;
}

console.log(vowelCounter("Asia Developer Academy"));


