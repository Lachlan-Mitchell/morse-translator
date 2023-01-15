import { InvalidParameterError } from "./errors"

const  engToMorse = {
  A: ".-",
   B: "-...",
   C: "-.-.",
   D: "-..",
   E: ".",
   F: "..-.",
   G: "--.",
   H: "....",
   I: "..",
   J: ".---",
   K: "-.-",
   L: ".-..",
   M: "--",
   N: "-.",
   O: "---",
   P: ".--.",
   Q: "--.-",
   R: ".-.",
   S: "...",
   T: "-",
   U: "..-",
   V: "...-",
   W: ".--",
   X: "-..-",
   Y: "-.--",
   Z: "--.."
    }

    let reverseMorseCode = Object.keys(engToMorse).reduce(function(acc, key) {
      acc[engToMorse[key]] = key;
      return acc;
    }, {});
    

export const englishToMorse = (english) => {
    if(english.match(/\d/)) {
      throw InvalidParameterError;
    } else {
      let morse = english.toUpperCase().split("").map((char)=> char === ' ' ? '/ ': engToMorse[char]+ ' ').join(''); 
      return morse.trimEnd();
    }
}

export const toEnglish = (morse) => {
  if (!/^[.-\s/]+$/.test(morse)) {
    throw InvalidParameterError;
  } else {
    return morse.split(' ').map((letter) => letter === '/' ? ' ' :  reverseMorseCode[letter]).join('').toLowerCase()
  }
}


