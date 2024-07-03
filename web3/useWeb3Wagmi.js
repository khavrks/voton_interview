'use client'
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi';
import { writeContract, switchChain } from '@wagmi/core'
import CrowdSaleContract from '../contracts/CrowdSaleContract';
import  CrowdsaleAbi from '../contracts/jsons/CrowdSaleContract.json';
import USDTContract from '../contracts/USDTContract';
import USDTContractAbi from '../contracts/jsons/USDTContract.json';
import { config } from '../components/buyTokens/providers/config';

const useWeb3Wagmi = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const chain  = useChainId();
  const { chains } = useSwitchChain()

  const connectWallet = async () => {
    try {
        // logic here
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };

  const disconnectWallet = async () => {
    // logic here
  };

  const buyTokensBCS = async (ethAmountInWei) => {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    // logic here
    
    return result;
  }

  const buyTokensWithUSDTBCS = async (usdtAmountInWei) => {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }
    
    try {
        // logic here
  
      return result;
    } catch (error) {
      console.error("Error purchasing tokens with USDT:", error);
      throw error;
    }
  };

  return { account: address, isConnected, chains, connectWallet, disconnectWallet, connectors, chain, buyTokensBCS, buyTokensWithUSDTBCS };
};

export default useWeb3Wagmi;
