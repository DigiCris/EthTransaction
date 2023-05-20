const Web3 = require('web3');
ENV_NODE=require('dotenv').config();

// Variables definition
const addressFrom = '0x06Eb67071a06E676b678F5dd3614D852C129d460';//0x4a9EC4D385209E7DF97f2289E4761096e56F2bBb';
const addressTo = '0x06Eb67071a06E676b678F5dd3614D852C129d460';
const web3 = new Web3(ENV_NODE.parsed.URL_NODE);

// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );

   console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} ETH.`);
};

balances();