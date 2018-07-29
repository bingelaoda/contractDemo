let assert = require('assert');
let {interface,bytecode} = require('../compile');

let ganache = require('ganache-cli');

let Web3 = require('web3');
let web3 = new Web3(ganache.provider());



describe('测试智能合约',()=>{


    it('测试web的api',   async ()=> {
        // let str = 'abc';
        // let s = web3.utils.toHex(str)
        // console.log(s);
        //
        //
        // const obj = {abc:'ABC'}
        // let s1 = web3.utils.toHex(obj);
        // console.log(s1);


        // const str2 = 'ethereum';
        // let s2 = web3.utils.fromAscii(str2);
        // console.log(s2);


        // const asi = '0x657468657265756d';
        // let s = web3.utils.toAscii(asi);
        //
        // console.log(s);


        // let toWei = web3.utils.toWei('1',"ether");
        // console.log(toWei);

        // let fromWei = web3.utils.fromWei('1000000000000000000',"ether");
        //
        // console.log(fromWei)
        let accounts = await web3.eth.getAccounts();
        // let balance = await web3.eth.getBalance(accounts[0]);
        // let fromWei = web3.utils.fromWei(balance,"ether");
        // console.log(fromWei);

        let inbox =await new web3.eth.Contract(JSON.parse(interface)).deploy({
            data:bytecode,
            arguments:['ni']
        }).send({
            from:accounts[0],
            gas:1000000
        })


        console.log(inbox.options.address);


        let balance = await web3.eth.getBalance(accounts[0]);
        let fromWei = web3.utils.fromWei(balance,"ether");
        console.log(fromWei);





        await inbox.methods.setMessage('nihao').send({
            from:accounts[0],
            gas:100000
        })
        let msg = await inbox.methods.getMessage().call();

        console.log(msg);
        assert.equal('nihao',msg)

    });
})



