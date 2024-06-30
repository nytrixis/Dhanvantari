import path from 'path';
import fs from 'fs';
import solc from 'solc';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contractPath = path.resolve(__dirname, 'contracts', 'Contract.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Contract.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

if (output.errors) {
    console.error('Compilation errors:', output.errors);
    process.exit(1);
  }
  
  const contractName = 'VoteMain';
  const contract = output.contracts['Contract.sol'][contractName];
  
  if (!contract) {
    console.error(`Contract ${contractName} not found in the output`);
    process.exit(1);
  }
  
  const bytecode = contract.evm.bytecode.object;
  const abi = contract.abi;
  
  export { bytecode, abi };