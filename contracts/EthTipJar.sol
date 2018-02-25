pragma solidity ^0.4.18;

contract EthTipJar {
    address public myAddress = this;
    address public owner;
    address constant public web3devs = 0x5aeda56215b167893e80b4fe645ba6d5bab767de;

    function EthTipJar() public payable {
        owner = msg.sender;
    }

    function () payable public {
        /* if (msg.value < 500 wei) throw; */
        uint amount = msg.value;
        uint royalty = amount / 200;
        web3devs.transfer(royalty);
        owner.transfer(this.balance);
    }

    function tip () payable public returns (bool){
        /* if (msg.value < 500 wei) throw; */
        uint amount = msg.value;
        uint royalty = amount / 200;
        web3devs.transfer(royalty);
        owner.transfer(this.balance);
        return true;
    }
}
