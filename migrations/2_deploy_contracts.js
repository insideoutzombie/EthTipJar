var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var EthTipJar = artifacts.require("./EthTipJar.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(EthTipJar);
};
  
