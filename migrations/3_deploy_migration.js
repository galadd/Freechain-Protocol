var marketplace = artifacts.require("FreechainMarketplace");

module.exports = function(deployer){
  deployer.deploy(marketplace);
}