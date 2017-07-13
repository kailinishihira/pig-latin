$(document).ready(function() {
 $("#pig-latin").submit(function(event) {
   event.preventDefault();
debugger;
   var userInput = $("#english").val();
   var output = pigLatin(userInput);
    $("#result").text(output);
 });
});
//business logic
var beginsWithVowel = function(stringInput){
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(stringInput[0])) {
    return true;
  }else {
    return false;
  }
}
var isVowel = function(element){
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(element)) {
    return true;
  }else {
    return false;
  }
}

var pigLatin = function(input){
  if (!isNaN(input)) {
    return input;
  } else {
    var splitedInput = input.split('');
    if (beginsWithVowel(splitedInput)) {
      input += "way";
      return input;
    } else if (!beginsWithVowel(splitedInput)) {
        if (input[0] === "q" && input[1] === "u") {
          var spliceQu = splitedInput.splice(0,2);
          return splitedInput.join('') + spliceQu.join('') + "ay";
      }else if (input[1] === "q" && input[2] === "u") {
        var splice_Qu = splitedInput.splice(0,3);
        return splitedInput.join('') + splice_Qu.join('') + "ay";
      }else {
        for (var i = 0; i < splitedInput.length; i++) {
          if (isVowel(splitedInput[i])) {
            var spliced = splitedInput.splice(0,i);
            return splitedInput.join('') + spliced.join('') +  "ay";
          }
        }
      }
    }
  }
}

  //A. if input is a number return the number
  //B. if input is not a number
        //1. if input begiins with vowel, we add "way"            to the end
            // eg. eat = eatway
        //2.if input begins with one or more  consonant, then move the first consequative consonants to the end and add "ay" to the end of the word.
            // eg. tom = omtay
            // eg. stick = ickstay
        //3. if the word begins with "qu" move "qu" to the end and add "ay" at the end of the word
            //eg. quick = ickquay
          //4. if the word begins with "qu" or have "-qu", then move "qu" or "-qu" to the end and add "ay" at the end of the word
            //eg. question = estionquay
            //eg. squirrel = irrelsquay
//Note: treat "y" as a consonant
