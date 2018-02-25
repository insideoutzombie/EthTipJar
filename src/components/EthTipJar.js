import React, { Component } from 'react';
import Web3 from 'web3';

let web3 = window.web3
// stolen code zone vvv

if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3 = new Web3(window.web3.currentProvider);
  console.log("first case");
} else {
  console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

// let RBAbi = require('../../../abis/RoomBaseAbi.js');
// let RBAddress = '0x8273e4b8ed6c78e252a9fca5563adfcc75c91b2a';
// let RB = web3.eth.contract(RBAbi).at(RBAddress);

// let ROAbi = require('../../../abis/RoomOwnershipAbi.js');
// let ROAddress = '0x4e71920b7330515faf5ea0c690f1ad06a85fb60c';
// let RO = web3.eth.contract(ROAbi).at(ROAddress);

let ETJAbi = require('../../abis/EthTipJarAbi.js');
let ETJAddress = require('../../Contract-Addresses/Local-Address.js');
let ETJ = web3.eth.contract(ETJAbi).at(ETJAddress);

class EthTipJar extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("tip fired!");
    ETJ.tip({from: web3.eth.accounts[0], gas: 3000000, value: 1000000}, (err,res)=>{
      if(err){
        console.log("there is an error with the callback");
      }
      console.log("success!");
      console.log(res);
    });
    console.log("ETJ.tip fired!");
  }

  render() {

    return (
      <div className="EthTipJar">
        <fieldset>
          <form>
            <input id="submit" type="submit" value="Send Tip" onClick={this.handleSubmit}/>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default EthTipJar
