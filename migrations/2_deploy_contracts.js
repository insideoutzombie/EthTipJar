var SimpleStorage = artifacts.require("./SimpleStorage.sol");
let EthTipJar = artifacts.require("./EthTipJar.sol");


module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(EthTipJar);
};
