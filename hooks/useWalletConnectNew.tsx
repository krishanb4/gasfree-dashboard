import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';

import { Web3Modal } from '@web3modal/react';

import { configureChains, createClient, WagmiConfig } from 'wagmi';

import { bsc } from 'wagmi/chains';

const chains = [bsc];

// Wagmi client
const { provider } = configureChains(chains, [
	walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_PROJECT_ID! }),
]);

export const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({ appName: 'web3Modal', chains }),
	provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);
