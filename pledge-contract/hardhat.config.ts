import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable, defineConfig } from "hardhat/config";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        compilers: [
          { version: "0.8.28" },
          { version: "0.6.12" },
          { version: "0.6.6" },
          { version: "0.5.16" },
          { version: "0.4.18" },
        ],
      },
      production: {
        compilers: [
          {
            version: "0.8.28",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
            },
          },
          { version: "0.6.12" },
          { version: "0.6.6" },
          { version: "0.5.16" },
          { version: "0.4.18" },
        ],
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
  },
});
