pragma solidity ^0.4.17;

contract inbox {
    string public message;
    function inbox(string _message) public{
        message=_message;
    }

    function setMessage(string _message) public{
        message=_message;
    }

    function getMessage() public view returns(string){
        return message;
    }
}