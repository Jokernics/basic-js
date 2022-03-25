const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let count = {}

  domains = domains.map(item => item.split('.').reverse().map(i => '.' + i))

  domains.forEach( item => {
    let prev = ''
    for (let i = 0; i < item.length; i++) {
      //.ru.yandex.code
      //.ru.yandex.musuc
      //.ru.yandex
      let el = prev + item[i] 
      if (count[el]) {
        count[el]++
        prev = el
      } else {
        count[el] = 1
        prev = el
      }
      
    }
  })
  

  return count
}

module.exports = {
  getDNSStats
};
