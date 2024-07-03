import { http, createConfig } from "wagmi";
import { injected } from "@wagmi/connectors";
import { walletConnect } from "@wagmi/connectors";
import { defineChain } from "viem";

import {
  RainbowKitProvider,
  getDefaultConfig,
  Chain,
} from '@rainbow-me/rainbowkit';

import { bsc } from 'viem/chains';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
    rainbowWallet,
    walletConnectWallet,
    injectedWallet,
    trustWallet,
    coinbaseWallet,
    metaMaskWallet,
  } from '@rainbow-me/rainbowkit/wallets';
import "@rainbow-me/rainbowkit/styles.css";

// Define your custom chains
const votonBnb = {
  id: 3462,
  name: "Tenderly voton_bnb_custom",
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  network: "voton_bnb_custom",
  rpcUrls: {
    default: {
       http: ["https://virtual.binance.rpc.tenderly.co/38d3e9fd-82ad-4535-baa4-47295e9f82c8",]
    },
  },
  blockExplorers: {
    default: { url: "https://dashboard.tenderly.co/explorer/vnet/e400a0e7-16f3-4efa-95da-a5c2fa69da68", name: "BscScan tenderly" },
  },
};

const votonEth = defineChain({
  id: 7743,
  name: "Tenderly voton_eth_custom",
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  network: "voton_eth",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default:{
       http: ["https://virtual.mainnet.rpc.tenderly.co/d3dca8ab-bad9-4d17-a609-128d9b8b8e23",]
    }
  },
  blockExplorers: {
    default: { url: "https://dashboard.tenderly.co/explorer/vnet/d3dca8ab-bad9-4d17-a609-128d9b8b8e23", name: "Etherscan tenderly" },
  },
});

const chains = [votonBnb, votonEth, bsc];
// const chains = [mainnet, sepolia, votonBnb, votonEth];
// const chains = [ bsc, mainnet];


const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        trustWallet,
      ],
    },
    {
      groupName: 'Popular',
      wallets: [
        walletConnectWallet,
        rainbowWallet,
        injectedWallet,
        coinbaseWallet,
      ],
    },
  ],
  {
    appName: 'Voton',
    projectId: 'aaf16ef982fc1f0f590b24253e38f225',
  }
);

console.log('votonBnb.rpcUrls.default.http[0]', votonBnb.rpcUrls.default.http[0]);

export const config = getDefaultConfig({
  appName: 'Voton',
  projectId: 'aaf16ef982fc1f0f590b24253e38f225',
  connectors: connectors,
  chains: chains,
  transports: {
    // [votonBnb.id]: http({ url: votonBnb.rpcUrls.default }),
    // [votonEth.id]: http({ url: votonEth.rpcUrls.default }),
    [votonBnb.id]: http("https://virtual.binance.rpc.tenderly.co/38d3e9fd-82ad-4535-baa4-47295e9f82c8"),
    [votonEth.id]: http("https://virtual.mainnet.rpc.tenderly.co/d3dca8ab-bad9-4d17-a609-128d9b8b8e23"),
    [bsc.id]: http({ url: bsc.rpcUrls.default }),
    // [mainnet.id]: http({ url: mainnet.rpcUrls.default }),
  },
  ssr: true,
 });


export { connectors, chains };