var Web3 = require('web3');
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;

var web3 = new Web3(
    new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/10ca823fbdfc4ac9a0aef17d0d4888cc')
);


var address = '0x64394AEafe71424df43678C572B12D8493c68748';
var key = 'ef0c7aeed088ec60282af9c2fd43eea45df302f94ff7f54c15d7ca587acd243c';


var bytecode = '6060604052341561000f57600080fd5b5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b6102d9806100616000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063502c9bd5146100545780637b67d310146100b7578063af067969146100f0575b600080fd5b341561005f57600080fd5b6100756004808035906020019091905050610113565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100c257600080fd5b6100ee600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610153565b005b34156100fb57600080fd5b61011160048080359060200190919050506101bb565b005b60018181548110151561012257fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60018054806001018281610167919061025c565b916000526020600020900160005b83909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505b50565b60008090505b600180549050811015610257576001818154811015156101dd57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050151561024957600080fd5b5b80806001019150506101c1565b5b5050565b815481835581811511610283578183600052602060002091820191016102829190610288565b5b505050565b6102aa91905b808211156102a657600081600090555060010161028e565b5090565b905600a165627a7a723058207854aa9670b2530b96919c41f3fbc4dd9a4f5ec6c142e5eaf622df8d86a56fe80029';





var interface = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"rec","type":"address"}],"name":"getaddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"seneth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];









function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}



var ad = ['0x66622d1E25cca28454c2e2b4726c05b27B094f68','0x473A121a16B9B8AC0ccaA773104DA7050D270F65','0x064217472Ad108f5C08B2331b1ef1A0cd3cc53f3', '0x2F55E7E8Af52dC91715670e579c64A2a84d21A50', '0xd2a56Eb440725BAf29eE1cfA7899c12Ef1BC642D'];

function newfunction(){
	var $nonce = web3.eth.getTransactionCount(address);
	for (var i = 0; i < ad.length; i++) {

	if(i<(ad.length-2)){
									
								  	var rawTx = {
								    nonce: web3.toHex($nonce),
								    gasLimit: web3.toHex(21000),
								    gasPrice: web3.eth.gasPrice.toNumber() * 1.40,
								    to: ad[i],
								    value: web3.toHex(web3.toBigNumber(10000000000000000))
								};
								sendRaw(rawTx);
						}
				else{
					
								  	var rawTx = {
								    nonce: web3.toHex($nonce),
								    gasLimit: web3.toHex(21000),
								    gasPrice: web3.eth.gasPrice.toNumber() * 1.40,
								    to: ad[i],
								    value: web3.toHex(web3.toBigNumber(10000000000000000))
								};
								sendRaw(rawTx);
				}
$nonce=$nonce + 1;
console.log($nonce);

}


}



var contractAddress = '0x1FCE4Ed9a7190636EA4f2E1957c85bcD71bea9E2';




//sendRaw(rawTx);
newfunction();
