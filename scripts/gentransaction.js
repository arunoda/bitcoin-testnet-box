const bitcoin = require('bitcoinjs-lib')

const IN_TX = '8faf533cfed49b2d8bd0122e8649ae5550647ce364db2a0786b5e0780eb173e9'
const IN_TX_N = 0
const IN_WIF = 'L4pzQyzZH1dwhMG2YnirU2utpooHm2wDawgiHqZVx7MQp9LGfgfb'
const AMOUNT = (10 * 100000000) - 750
const TO_ADDRESS = 'mmp4EdWdheSZSW2HgnSY5zx7oqXVh9hDxU'
const NETWORK = bitcoin.networks.testnet

const keyPair = bitcoin.ECPair.fromWIF(IN_WIF)
keyPair.network = NETWORK

const tx = new bitcoin.TransactionBuilder(NETWORK)
tx.addInput(IN_TX, IN_TX_N)
tx.addOutput(TO_ADDRESS, AMOUNT)
tx.sign(0, keyPair)

console.log(tx.build().toHex())
