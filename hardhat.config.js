require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim()

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  //defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    },
    polygon: {
      url: "https://rpc-mumbai.maticvigil.com/v1/c187e582e4614a5f4c1d76c3c6e0686831650c8c",
      accounts: [privateKey]
    },
    hardhat: {
    },
  },
};