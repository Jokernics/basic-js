const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (arguments.length === 0 ) {
      this.chain.push('( )')
    } else {
      this.chain.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && this.chain[position - 1]) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw Error("You can\'t remove incorrect link!")
    }
    
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const final = this.chain.join('~~')
    this.chain = []
    return final
  },
  chain: []
};

module.exports = {
  chainMaker
};
