import { InvalidParameterError, InvalidApostropheSyntax } from "./errors.js"

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
   Z: "--..",
   '0': '-----',
   '1': '.----',
   '2': '..---',
   '3': '...--',
   '4': '....-',
   '5': '.....',
   '6': '-....',
   '7': '--...',
   '8': '---..',
   '9': '----.',
   '.': '.-.-.-',
   ',': '--..--',
   '?': '..--..',
   '\\': '.----.',
   '!': '-.-.--',
   '/': '-..-.',
   '(': '-.--.',
   ')': '-.--.-',
   '&': '.-...',
   ':': '---...',
   ';': '-.-.-.',
   '=': '-...-',
   '+': '.-.-.',
   '-': '-....-',
   '_': '..--.-',
   '"': '.-..-.',
   '$': '...-..-',
   '@': '.--.-.'
    }

    let reverseMorseCode = Object.keys(engToMorse).reduce(function(acc, key) {
      acc[engToMorse[key]] = key;
      return acc;
    }, {});
    
    // console.log(!/[^0-9A-Z.,?'!\/()&:;=+\-_"$@\\/s]/.match(''))

export const englishToMorse = (english) => {
  let pattern = /[^0-9A-Z.,?'!\/()&:;=+\-_"$@\\\s]/gi;
  if(english.length === 0) {
    return '';
  } 
    else if(/'/.test(english)){
    alert(InvalidApostropheSyntax)
    throw InvalidApostropheSyntax;
  }
   else if(english.match(pattern)) {
      alert(InvalidParameterError);
      throw InvalidParameterError;
    
    }
     else {
      let morse = english.toUpperCase().split("").map((char)=> char === ' ' ? '/ ': engToMorse[char]+ ' ').join(''); 
      return morse.trimEnd();
    }
}

export const toEnglish = (morse) => {
  if(morse.length === 0) {
    return '';
  } 
  if (!/^[.-\s/]+$/.test(morse)) {
    alert(InvalidParameterError);
    throw InvalidParameterError;
  } else {
    return morse.split(' ').map((letter) => letter === '/' ? ' ' :  reverseMorseCode[letter]).join('').toLowerCase()
  }
}


