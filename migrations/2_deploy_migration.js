var factory = artifacts.require("FreechainFactory");

module.exports = function(deployer){
  deployer.deploy(factory);
}