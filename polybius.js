// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let inputLower = input.toLowerCase();

    lettersToNumbers = {a: "11", b: "21", c: "31", d: "41", e: "51",
                        f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
                        l: "13", m: "23", n: "33", o: "43", p: "53",
                        q: "14", r: "24", s: "34", t: "44", u: "54",
                        v: "15", w: "25", x: "35", y: "45", z: "55"};

    numbersToLetters = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
                        12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
                        13: "l", 23: "m", 33: "n", 43: "0", 53: "p",
                        14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
                        15: "v", 25: "w", 35: "x", 45: "y", 55: "z"};

    let L2NKeys = Object.keys(lettersToNumbers);
    let L2NArr = [];
    let N2LArr = [];
    
    if (encode === true) {
      for (let i = 0; i < inputLower.length; i++) {
        if (!L2NKeys.includes(inputLower[i])) {
          L2NArr.push(inputLower[i]);
        } else {
          let inputLetter = inputLower[i];
          L2NArr.push(lettersToNumbers[inputLetter]);
        }
      }
      return L2NArr.join("");
    }

    if (encode === false) {
      if (!input.includes(" ")) {
        if (input.length % 2 === 1) {
          return false;
        }
        for (let i = 0; i < input.length; i += 2) {
            let numberInput = `${input[i]}${input[i+1]}`;
            N2LArr.push(numbersToLetters[numberInput]);
        }
        return N2LArr.join("");  
      } else {
        let substrings = input.split((" "));
        let joinedStrings = substrings.join("");
        if (joinedStrings.length % 2 === 1) {
          return false;
        } else {
          let newStringsArr = substrings.map((string) => {
            for (let i = 0; i < string.length; i += 2) {
              let numberInput = `${string[i]}${string[i+1]}`;
              N2LArr.push(numbersToLetters[numberInput]);
            }
            N2LArr.push(" ");
          }); 
        }
        let end = N2LArr.length - 1;
        return N2LArr.join("").slice(0, end); 
      }  
    }
  }
   
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
