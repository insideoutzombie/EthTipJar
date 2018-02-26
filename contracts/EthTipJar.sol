pragma solidity ^0.4.18;

contract EthTipJar {
    address public myAddress = this;
    address public owner;
    address constant public web3devs = 0xb5b4c4f6A656E6A9C1fc301B206B99af95215245;

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
