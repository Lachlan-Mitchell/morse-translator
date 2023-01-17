import { InvalidParameterError } from "./errors.js"
import { englishToMorse, toEnglish } from "./englishToMorse.js";

const mode = document.querySelector('select');
let resultLabel = document.querySelector('#result');

document.querySelector('#translate').addEventListener("click", () =>{
  let textToTranslate = document.querySelector('#input').value;
  if(mode.value === 'morse') {
   let output = toEnglish(textToTranslate);
   document.querySelector('#output').textContent = output;
  } else {
    let output = englishToMorse(textToTranslate);
    document.querySelector('#output').textContent = output;
  }
  document.querySelector('#input').innerHTML = '';
})

mode.addEventListener('change', () => {
  document.querySelector('#output').textContent = '';
  document.querySelector('#input').value = '';
  switch(mode.value) {
    case 'english':
      resultLabel.innerHTML = "Morse Translation: ";
      break;
    
    case 'morse':
      resultLabel.innerHTML = "English Translation: ";
      break;
    default:
      resultLabel.innerHTML = "Translation: ";
    
  }
})
