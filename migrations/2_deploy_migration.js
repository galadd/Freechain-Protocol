var factoryContract = artifacts.require("FreechainFactory");

module.exports = function(deployer){
  deployer.deploy(factoryContract);
}