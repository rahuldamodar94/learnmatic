const Matic = require("@maticnetwork/maticjs").default;
const config = require("./config");

const from = config.FROM_ADDRESS; // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.ROOTCHAIN_ADDRESS,
  withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
  depositManager: config.DEPOSITMANAGER_ADDRESS,
  registry: config.REGISTRY,
});

// const rootTokenAddress = config.GOERLI_ERC20 // Root ERC721 token address
const rootTokenAddress = config.GOERLI_ERC721; // Root ERC20 token address

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .processExits(rootTokenAddress, {
      from,
      gasPrice: 100000000000,
    })
    .then((res) => {
      console.log(res); // eslint-disable-line
    });
});
