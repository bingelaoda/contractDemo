//部署到真实网络的代码
let Web3 = require('web3');
let {interface,bytecode} = require('./compile');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "canoe salon proud kitten shoulder hidden copper tell under either chalk lazy"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/e560c1ef1b0347bf8b88a8a514bd7dac");
let web3 = new Web3(provider);




// let balance = await web3.eth.getBalance(accounts[0]);
// let fromWei = web3.utils.fromWei(balance,"ether");
// console.log(fromWei);
deploy = async ()=>{
    let accounts = await web3.eth.getAccounts();
    let inbox =await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data:bytecode,
        arguments:['nihaozazieh']
    }).send({
        from:accounts[0],
        gas:1000000
    })

    console.log(inbox.options.address);
}

deploy();
