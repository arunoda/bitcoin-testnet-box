const bitcoin = require('bitcoinjs-lib')

const keyPair = bitcoin.ECPair.makeRandom()
console.log(keyPair.toWIF())
