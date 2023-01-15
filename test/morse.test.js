
import { InvalidParameterError } from "../scripts/errors.js";
import { englishToMorse } from "../scripts/englishToMorse.js"
import { toEnglish } from "../scripts/englishToMorse.js";


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
    expect(englishToMorse('Hello')).toBe('.... . .-.. .-.. ---')
    expect(englishToMorse('SOS')).toBe('... --- ...')
    expect(englishToMorse('Lachlan')).toBe('.-.. .- -.-. .... .-.. .- -.')
    expect(englishToMorse('Mitchell')).toBe('-- .. - -.-. .... . .-.. .-..')
    expect(englishToMorse('Analea')).toBe('.- -. .- .-.. . .-')
  })
  it(`should return morse code for strings containing plural words, with a slash between words`, () => {
    expect(englishToMorse('Morse Code')).toBe('-- --- .-. ... . / -.-. --- -.. .')
    expect(englishToMorse('Assignment meets all MVP requirements')).toBe('.- ... ... .. --. -. -- . -. - / -- . . - ... / .- .-.. .-.. / -- ...- .--. / .-. . --.- ..- .. .-. . -- . -. - ...')
    expect(englishToMorse('My name is Lachlan Mitchell')).toBe('-- -.-- / -. .- -- . / .. ... / .-.. .- -.-. .... .-.. .- -. / -- .. - -.-. .... . .-.. .-..')
    expect(englishToMorse('The quick brown fox jumped over the lazy dog')).toBe('- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.')
  })

  describe('toEnglish', ()=> {
    it('should return a string', () => {
      const result = toEnglish('-- --- .-. ... .')
      expect(typeof result).toBe('string')
    })
    it("should throw an error if  any elment isnt a '.' '-' '/'", () => {
        expect(()=> {
          toEnglish('4')
        }).toThrow(InvalidParameterError);
        expect(()=> {
          toEnglish('-- --- .-. ... . / code')
        }).toThrow(InvalidParameterError);
        expect(()=> {
          toEnglish('Yes this is just english')
        }).toThrow(InvalidParameterError);
      })
      it('should be able to handle single words', () => {
        expect(toEnglish('-- --- .-. ... .')).toBe('morse')
      })
      it('should be able to handle plural words', () => {
        expect(toEnglish('- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.')).toBe('the quick brown fox jumped over the lazy dog')
      })
    })
  })
