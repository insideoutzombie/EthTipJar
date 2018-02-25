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
    ETJ.tip({from: web3.eth.accounts[0], gas: 300000, value: 10**18}, (err,res)=>{
      if(err){
        console.log("there is an error with the callback");
        console.log(err);
      } else {
        console.log("success!");
        console.log(res);
      }
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
