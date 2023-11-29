// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalArr = [];
    let inputLower = input.toLowerCase();

    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }

    if (encode === true) {
      for (let i = 0; i < inputLower.length; i++) {
        if (inputLower[i] === " ") {
          finalArr.push(" ");
        } else {
          finalArr.push(alphabet[realAlphabet.indexOf([inputLower[i]])]);
        }
      }
      return finalArr.join("");
    }

    if (encode === false) {
      for (let i = 0; i < inputLower.length; i++) {
        if (inputLower[i] === " ") {
          finalArr.push(" ");
        } else {
          finalArr.push(realAlphabet[alphabet.indexOf([inputLower[i]])]);
        }
      }
      return finalArr.join("");
    }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
