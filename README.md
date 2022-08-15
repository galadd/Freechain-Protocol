## Freechain Protocol Smart Contracts

- [About these contracts](#about-these-contracts)
- [Requirements](#requirements)
    - [Node version](#node-version)
    - [Polygonscan api](#polygon-api-key)
    - [Installation](#installation)
- [Deploying](#deploying)
    - [Deploying to the mumbai network.](#deploying-to-the-mumbai-network)
- [Viewing your collection on Freechain Protocol](#viewing-your-collections-on-freechain)
- [Troubleshooting](#troubleshooting)
      - [It doesn't compile!](#it-doesnt-compile)
      - [It doesn't deploy anything!](#it-doesnt-deploy-anything)
- [Minting tokens.](#minting-tokens)
- [License](#license)


# About these contracts

This contains an erc1155 token contract deployed by the factory contract for display on the Freechain marketplace as collection listings.
- A script for minting items.
- A factory contract for making sell orders for minted collections

- supports multiple creators per contract, where only the creator is able to mint more copies


# Requirements

### Node version

Either make sure you're running a version of node compliant with the `engines` requirement in `package.json`, or install Node Version Manager [`nvm`](https://github.com/creationix/nvm) and run `nvm use` to use the correct version of node (version 16.16.0 worked better with this repo).

## Installation

Run
```bash
npm install @openzeppelin/contracts @truffle/hdwallet-provider truffle-plugin-verify
```

## Deploying

### Deploying to the Mumbai network.

1. You'll need to run a polygon node. To get a Polygon node, navigate [QuickNode](https://www.quicknode.com) and signup! After you have created your free Polygon endpoint, copy your HTTP Provider endpoint.
2. You'll need to sign up for [Polygonscan](https://polygonscan.com/register). and get an API key.
3. You'll need Polygon testnet matic to pay for the gas to deploy your contract. Visit https://faucet.polygon.technology/ to get some.
4. Using your API key and the mnemonic for your MetaMask wallet (make sure you're using a MetaMask seed phrase that you're comfortable using for testing purposes), run:

```
truffle migrate --network matic
```

### Troubleshooting

#### It doesn't compile!
Install truffle locally: `yarn add truffle`. Then run `yarn truffle migrate ...`.

You can also debug just the compile step by running `yarn truffle compile`.

#### It doesn't deploy anything!
This is often due to the truffle-hdwallet provider not being able to connect. 

### Minting tokens.

After deploying to the mumbai polygon network, there will be a contract on mumbai that will be viewable on [Mumbai Polygonscan](https://mumbai.polygonscan.com/). For example, here is a [recently deployed contract](). You should set this contract address and the address of your Metamask account as environment variables when running the minting script:

# License

These contracts are available to the public under an MIT License.
