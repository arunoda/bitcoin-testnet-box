const bitcoin = require('bitcoinjs-lib')
const keyPairs = require('./keypairs.json')

const INDEX = parseInt(process.argv[2]) || 0;

const keyPair = bitcoin.ECPair.fromWIF(keyPairs[INDEX].wif)
keyPair.network = bitcoin.networks.testnet
console.log(keyPair.getAddress())
