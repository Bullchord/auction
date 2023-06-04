require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
NEXT_PUBLIC_PRIVATE_KEY =
  "6c33867ac538af914c493b84a5b6e26e8420c35277c4e2ab7b6ed188555b1efc";
// const privateKey = process.env.PRIVATE_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },

    bsc: {
      url: "https://bsc-dataseed1.defibit.io/",
      chainId: 56,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
