import { InvalidParameterError } from "./errors"

export const englishToMorse = (english) => {

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
   W: ".--",
   X: "-..-",
   Y: "-.--",
   Z: "--.."
    }
    if(english.match(/\d/)) {
      throw InvalidParameterError;
    } else {
      let morse = english.toUpperCase().split("").map((char)=> char === ' ' ? '/ ': engToMorse[char]+ ' ').join(''); 
      return morse.trimEnd();
    }

    
  
  
}