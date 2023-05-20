const Web3 = require('web3');

ENV_NODE=require('dotenv').config();
console.log(ENV_NODE.parsed.APIKEY);

// Variables definition
const privKey =ENV_NODE.parsed.privKey; // Genesis private key
const addressFrom = '0x4a9EC4D385209E7DF97f2289E4761096e56F2bBb';
const addressTo = '0x06Eb67071a06E676b678F5dd3614D852C129d460';
const amount='0.1';
const web3 = new Web3(ENV_NODE.parsed.URL_NODE);

// Create transaction
const deploy = async () => {
   console.log(
      `Attempting to make transaction from ${addressFrom} to ${addressTo}`
   );

   const createTransaction = await web3.eth.accounts.signTransaction(
      {
         from: addressFrom,
         to: addressTo,
         value: web3.utils.toWei(amount, 'ether'),
         gas: '21000',
      },
      privKey
   );

   // Deploy transaction
   const createReceipt = await web3.eth.sendSignedTransaction(
      createTransaction.rawTransaction
   );
   console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}`
   );
};

deploy();
