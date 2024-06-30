import { Avalanche } from 'avalanche';

const fujiTestnet = {
  url: 'https://api.avax-test.network/ext/bc/C/rpc',
  networkID: 1,
  chainId: 43113,
  hrp: 'fuji',
};

const mainnet = {
  url: 'https://api.avax.network/ext/bc/C/rpc',
  networkID: 1,
  chainId: 43114,
  hrp: 'avax',
};

const avalanche = new Avalanche(fujiTestnet.url, {
  networkID: fujiTestnet.networkID,
  hrp: fujiTestnet.hrp,
});

module.exports = {
  avalanche,
  networks: {
    fuji: fujiTestnet,
    mainnet,
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
