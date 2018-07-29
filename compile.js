//编译智能合约的脚本

let path = require('path');
let fs = require('fs');
let solc = require('solc');
//源文件路径
const srcPath = path.resolve(__dirname,'contracts','inbox.sol');
let file = fs.readFileSync(srcPath,'utf-8');
let compileFile = solc.compile(file,1);


console.log(compileFile);

module.exports= compileFile.contracts[':inbox']







