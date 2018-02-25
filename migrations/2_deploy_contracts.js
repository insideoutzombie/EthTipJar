var SimpleStorage = artifacts.require("./SimpleStorage.sol");
<<<<<<< HEAD
var EthTipJar = artifacts.require("./EthTipJar.sol");
=======
let EthTipJar = artifacts.require("./EthTipJar.sol");
>>>>>>> 79943e797d9c3e8f216bcba6926c394bfe9831d8

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(EthTipJar);
};
  
