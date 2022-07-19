// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')

  function caesar(input, shift, encode = true) {
    let output = ""
    if(!encode) {
      shift = -shift
    }
    if(shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false
    }
    for(let i = 0; i < input.length; i++) {
      let currentLetter = input[i].toLowerCase()
      //if current 'letter' is an non-alphabetic character it just gets pushed to the encoded string
      if(!alphabet.includes(currentLetter)) {
        output = output + currentLetter
      }
      else {
        //find the index of alphabetic characters from the alphabet array to be able to shift them within the alphabet
        const indexValue = alphabet.findIndex(letter => letter == currentLetter)
        let shiftedIndex = indexValue + shift
        if(shiftedIndex > 25) {
          shiftedIndex = shiftedIndex - 26
        }
        if(shiftedIndex < 0) {
          shiftedIndex = shiftedIndex + 26
        }
        output = output + alphabet[shiftedIndex]
      }
    }
    return output
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
