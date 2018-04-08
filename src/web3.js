//overrides metamask v0.2 for our 1.0 version. 
//1.0 lets us use async and await instead of promises

const Web3 = require('web3');

var web3;

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
}

export default web3;
