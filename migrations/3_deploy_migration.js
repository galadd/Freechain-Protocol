var marketplaceContract = artifacts.require("FreechainMarketplace");

module.exports = function(deployer){
  deployer.deploy(marketplaceContract);
}