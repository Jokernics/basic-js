const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }
  
  encrypt(message, key) {
    if (arguments.length != 2 || message === undefined || key === undefined) throw Error('Incorrect arguments!')
    let result = []
    let pos = 0
    message = message.toLowerCase()
    key = key.toLowerCase()

    for (let i = 0; i < message.length; i++) {
      let char = message[i].charCodeAt() - 97
      if (char < 0 || char > 26) {
        result.push(message[i])
        continue
      }
      let keyChar = key[pos % key.length].charCodeAt() - 97
      pos++
      let sumOfStr = String.fromCharCode((char + keyChar) % 26 + 97)
      result.push(
        sumOfStr
      )
    }
    
    return this.type ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase()
  }
  
  decrypt(message, key) {
    if (arguments.length != 2 || message === undefined || key === undefined) throw Error('Incorrect arguments!')
    
    let result = []
    let pos = 0
    message = message.toLowerCase()
    key = key.toLowerCase()

    for (let i = 0; i < message.length; i++) {
      let char = message[i].charCodeAt() - 97
      if (char < 0 || char > 26) {
        result.push(message[i])
        continue
      }
      let keyChar = key[pos % key.length].charCodeAt() - 97
      pos++
      let sumOfStr = String.fromCharCode((char - keyChar > 26 ? char - keyChar : char - keyChar + 26) % 26 + 97)
      result.push(
        sumOfStr
      )
    }
    
    return this.type ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};
