// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    let inputLower = input.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encodedArr = [];
    let alphabetIndex = 0;
  
    if (encode === true) {
      for (let i = 0; i < inputLower.length; i++) {
          if (!alphabet.includes(inputLower[i])) {
            encodedArr.push(inputLower[i]);
          } else if (((alphabet.indexOf(inputLower[i]) + shift) <= 25 && (alphabet.indexOf(inputLower[i]) + shift) >= 0)) {
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex + shift]);
          } else if ((alphabet.indexOf(inputLower[i]) + shift) > 25){
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex + shift - 26]);
          } else {
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex + shift + 26]);
          }
        }
      return encodedArr.join("");
    }

    if (encode === false) {
      for (let i = 0; i < inputLower.length; i++) {
          if (!alphabet.includes(inputLower[i])) {
            encodedArr.push(inputLower[i]);
          } else if (((alphabet.indexOf(inputLower[i]) - shift) <= 25 && (alphabet.indexOf(inputLower[i]) - shift) >= 0)) {
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex - shift]);
          } else if ((alphabet.indexOf(inputLower[i]) - shift) > 25){
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex - shift - 26]);
          } else {
            alphabetIndex = alphabet.indexOf(inputLower[i]);
            encodedArr.push(alphabet[alphabetIndex - shift + 26]);
          }
        }
      return encodedArr.join("");
    }
  }

  return {
    caesar,
  };
})();

module.exports = {caesar: caesarModule.caesar};
