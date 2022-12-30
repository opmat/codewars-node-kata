// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  // generate object with aplhabets as keys
  var arr = prepareArr();
  //remove all charcters except alphabets from uppercase of input string
  var str = string.toUpperCase().replace(/[^A-Z]/ig, ''); 
  //count occurence of all alphabets
  for (var i = 0; i < string.length; i++) {
    arr[str[i]] += 1;
  } 
  for (const key in arr) {
    if (arr[key] === 0) {
      return false;
    }
  };
  return true;
}

/**
* generate object with aplhabets as keys
**/
function prepareArr() {
  var a = 65;
  var charArray = {};
  for (var i = 0; i<26; i++)
    charArray[String.fromCharCode(a + i)] = 0;
  
  return charArray;
}

export default isPangram
