$(document).ready(function() {
 $("#pig-latin").submit(function(event) {
   event.preventDefault();
//debugger;
   var userInput = $("#english").val();
   var output = pigLatin(userInput);
    $("#result").text(output);
 });
});
//business logic
var pigLatin = function(input){
  if (!isNaN(input)) {
    return input;
  } else {
    if (input[0] === "a" || input[0] === "e" || input[0] === "o" || input[0] === "i" ||nput[0] === "u") {
      input += "way";
      return input;
    }
  }

  //if input is a number return the number
  //if input is not a number
    //1. if input begiins with vowel, we add "way" to the end
        // eg. eat = eatway
    //2.if input begins with one or more consonant, then move the first consequative consonants to the end and add "ay" to the end of the word.
        // eg. tom = omtay
        // eg. stick = ickstay
      //3. if the word begins with "qu" move "qu" to the end and add "ay" at the end of the word
        //eg. quick = ickquay
      //4. if the word begins with "qu" or have "-qu", then move "qu" or "-qu" to the end and add "ay" at the end of the word
        //eg. question = estionquay
        //eg. squirrel = irrelsquay
//Note: treat "y" as a consonant


}
