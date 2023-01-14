
import { InvalidParameterError } from "../scripts/errors.js";
import { englishToMorse } from "../scripts/englishToMorse.js"


// What I want my functions to do.

// I need  one Describe block for English to Morse

//Another for  Morse to english. (Could set up a mode param)

//English to Morse:
/*returns a string
  if non alphabetic letters are entered throws an error
  if no string is entered return an empty string
  converts single word / chracters to morse code
  converts multi word strings to morse code.
  handles uppercase and lowercase strings
*/

// Morse to english:
/* takes in a string
  returns a string
  only takes in dots and dashes else throws an error (regex check)

*/


describe('englishToMorse', () => {
  it('should return a string', () => {
    const result = englishToMorse('hello');
    expect(typeof result).toBe('string')
  })
  it('returns an empty string if an empty string is given', () => {
    expect(englishToMorse('')).toBe('')
  })
  it('returns an error if a number is anywhere in the string', () => {
    expect(()=> {
      englishToMorse('4')
    }).toThrow(InvalidParameterError);
    expect(()=> {
      englishToMorse('4 I am a  Jolly good  fella')
    }).toThrow(InvalidParameterError);
    expect(()=> {
      englishToMorse('Wow if only I was 4 years old')
    }).toThrow(InvalidParameterError);
  })
  it(`should return morse code for a single word`, () => {
    expect(englishToMorse('Morse')).toBe('-- --- .-. ... .')
  })
  it(`should return morse code for strings containing plural words, with a double space between words`, () => {
    expect(englishToMorse('Morse Code')).toBe('-- --- .-. ... . / -.-. --- -.. .')
  })
}) 
