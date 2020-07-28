const Matic = require("@maticnetwork/maticjs").default;
const config = require("./config");
const from = config.FROM_ADDRESS; // from address
const predicate = config.ERC721_PREDICATE;

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.ROOTCHAIN_ADDRESS,
  withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
  depositManager: config.DEPOSITMANAGER_ADDRESS,
  registry: config.REGISTRY,
});

var transactionHash =
  "0x6d80f2a3c54f221f8df31c4b1bcfd72f46f83ee8a64c904a79b3d08eb29f0987";

matic.initialize().then(() => {
  matic.setWallet(config.PRIVATE_KEY);
  matic
    .withdrawMintableERC721Token(transactionHash, predicate, {
      from,
    })
    .then((res) => {
      console.log(res); // eslint-disable-line
    });
});
