import avalanche from './hardhat.config.mjs'
import { bytecode, abi } from './compile.js';

const main = async () => {
  // Connect to the Avalanche Fuji testnet
  const provider = avalanche.getProvider();

  // Create a new account or import an existing one
  const account = await provider.importKey('0x55b324A0E932a8e295C675Cb11422329Ce31C977');

  // Deploy the contract
  const contract = new avalanche.ContractFactory(abi, bytecode);
  const deployedContract = await contract.deploy({ from: account.address });

  console.log('Contract deployed at:', deployedContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
