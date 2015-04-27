var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  addressVersion: 0x17,
  magic: hex('d1c4b1a3'),
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,

  genesisBlock: {
  hash: hex('cc4bd57fcbf5c1ec996781eca4d3674bcfa2b81bd95caafa87c3717853502506'),
    merkle_root: hex('827cdceb4b2dab12acdeb7fdfc7369f8ceac83b244a88886aab5390efdc5f685'),
    height: 0,
    nonce: 433798,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1428195753,
    bits: 486604799,
   },

  dnsSeeds: [
    'seed.iobond.com',
    'jp.iobond.com',
    'uk.iobond.com',
    'cn.iobond.com'
  ],
  defaultClientPort: 31415
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
