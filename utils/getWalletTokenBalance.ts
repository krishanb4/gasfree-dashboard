import Moralis from '../config/moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

type token = {
	token_address: string;
	balance: string;
	decimals: number;
};

export default async function getWalletBalances(address: string) {
	const response = await Promise.all([
		getChainBalance(address, EvmChain.ETHEREUM),
		getChainBalance(address, EvmChain.ARBITRUM),
		getChainBalance(address, EvmChain.AVALANCHE),
		getChainBalance(address, EvmChain.BSC),
		getChainBalance(address, EvmChain.CRONOS),
		getChainBalance(address, EvmChain.FANTOM),
		getChainBalance(address, EvmChain.FUJI),
		getChainBalance(address, EvmChain.PALM),
		getChainBalance(address, EvmChain.POLYGON),
	]);
	return response;
}

async function getChainBalance(address: string, chain: typeof EvmChain.ETHEREUM) {
	let nativeTokenBalance;
	let tokenBalances;
	let nftBalances;

	try {
		const nativeTokenBalanceResponse = await Moralis.EvmApi.balance.getNativeBalance({
			address,
			chain,
		});
		nativeTokenBalance = nativeTokenBalanceResponse.toJSON();
	} catch (e) {}

	try {
		const tokenTokenBlancesResponse = await Moralis.EvmApi.token.getWalletTokenBalances({
			chain,
			address,
		});
		const tokenBalancesWithPrice = await Promise.all(
			tokenTokenBlancesResponse.toJSON().map(async (token) => {
				const priceData = await getBalanceWithPriceCMC(token, chain);
				return priceData;
			}),
		);
		tokenBalances = tokenBalancesWithPrice;
	} catch (e) {}

	try {
		const nftBlancesResponse = await Moralis.EvmApi.nft.getWalletNFTs({
			chain,
			address,
		});

		nftBalances = nftBlancesResponse.toJSON().result;
	} catch (e) {}

	return {
		chain: chain.name,
		nativeBalance: nativeTokenBalance,
		tokenBalances: tokenBalances,
		nftBalances: nftBalances,
	};
}

async function getBalanceWithPrice(token: token, chain: typeof EvmChain.ETHEREUM) {
	try {
		const price = await Moralis.EvmApi.token.getTokenPrice({
			chain,
			address: token.token_address,
		});
		return {
			...token,
			...price.toJSON(),
		};
	} catch (err) {
		return token;
	}
}
async function getBalanceWithPriceCMC(token: token, chain: typeof EvmChain.ETHEREUM) {
	let price;
	let usdPrice;
	try {
		price = await Moralis.EvmApi.token.getTokenPrice({ chain, address: token.token_address });
		usdPrice = price.toJSON().usdPrice;
	} catch (e) {
		try {
			const res = await fetch(
				`https://api.coinmarketcap.com/v1/ticker/${token.token_address}/?convert=USD`,
			);
			const data = await res.json();
			price = { usdPrice: data[0].price_usd || null };
			usdPrice = data[0].price_usd || null;
			console.log(usdPrice);
		} catch (e) {
			return null;
		}
	}
	return {
		...token,
		...price,
		...{ value: (Number(token.balance) / token.decimals) * usdPrice },
	};
}
