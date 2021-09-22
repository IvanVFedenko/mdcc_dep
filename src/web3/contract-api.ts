import { BigNumber, Contract, ethers } from 'ethers';

declare global {
  interface Window {
    ethereum: any;
  }
}

const stakingAbi = [
  'function balanceOf(address) view returns (uint)',
  'function totalSupply(address) view returns (uint)',
  'function approve(address spender, uint amount)',
  'function stake(uint amount)',
  'function withdraw(uint amount)',
  'function claim()',
  'function exit()',
];

type ChainId = number;

const contractAddress: Record<ChainId, string> = {
  31337: '0x123',
  3: '0x456',
  1: '0x789',
};

async function connect() {
  if (typeof window.ethereum !== undefined) {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const chainId = (await provider.getNetwork()).chainId;
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress[chainId], stakingAbi, provider.getSigner());
    contract.connect(signer);
    return { chainId, contract: implementContractApi(contract) };
  } else {
    throw new Error('No injected web3 found');
  }
}

function implementContractApi(contract: Contract) {
  async function balanceOf(): Promise<BigNumber> {
    return await contract.balanceOf(contract.signer.getAddress());
  }

  async function totalSupply(): Promise<BigNumber> {
    return await contract.totalSupply();
  }

  async function approve(amountUnits: BigNumber) {
    return await contract.approve(contract.address, amountUnits);
  }

  async function stake(amountUnits: BigNumber) {
    return await contract.stake(amountUnits);
  }
  async function claim() {
    return await contract.claim();
  }
  async function withdraw() {
    return await contract.withdraw();
  }
  async function exit() {
    return await contract.exit();
  }
  return {
    balanceOf,
    totalSupply,
    approve,
    stake,
    claim,
    withdraw,
    exit,
  };
}

export const contract = {
  connect,
};
