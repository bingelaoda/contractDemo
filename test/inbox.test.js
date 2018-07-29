let assert = require('assert');

let ganache = require('ganache-cli');

let Web3 = require('web3');
let web3 = new Web3(ganache.provider());



describe('测试智能合约',()=>{


    it('测试web的api', function () {
        let str = 'abc';
        let s = web3.utils.toHex(str)
        console.log(s);


        const obj = {abc:'ABC'}
        let s1 = web3.utils.toHex(obj);
        console.log(s1);

    });
})



