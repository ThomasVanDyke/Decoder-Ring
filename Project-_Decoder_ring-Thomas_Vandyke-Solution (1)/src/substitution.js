// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
  
  function encoder(input, alphabet) {
        let output = ""
    if(!alphabet || alphabet.length!=26) {
      console.log("here")
      return false
    }
    input = input.toLowerCase()
    for(let i=0; i<input.length; i++) {
        if (alphabet.split(alphabet[i]).length > 2) {
          return false
  }
      if(input[i] === " ") {
        output = output.concat(" ")
       }
      else {
    let index = normalAlphabet.indexOf(input[i])
    output += alphabet[index]
      }
    }
    return output
  }
  
  function decoder(input, alphabet) {
        let output = ""
    if(!alphabet || alphabet.length!=26) {
      return false
    }
    input = input.toLowerCase()
    for(let i=0; i<input.length; i++) {
        if (alphabet.split(alphabet[i]).length > 2) {
          console.log("here!!")
          return false
  }
      if(input[i] === " ") {
        output = output.concat(" ")
       }
      else {
    let index = alphabet.indexOf(input[i])
    output += normalAlphabet[index]
      }
    }
    return output
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let output = ""
    if(encode === true) {
      output = encoder(input, alphabet)
    }
    else {
      output = decoder(input, alphabet)
    }
    return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
