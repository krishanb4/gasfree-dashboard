import type { NextPage } from 'next';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Button, { ButtonGroup } from '../../../components/bootstrap/ChainButton';
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn';
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse';
import Link from 'next/link';
import Eth from '../../../assets/img/chain-icons/ethereum-1.svg';
import Bnb from '../../../assets/img/chain-icons/bnb-logo.svg';
import Poly from '../../../assets/img/chain-icons/polygon-matic-logo.svg';
import Avalanche from '../../../assets/img/chain-icons/avalanche-avax-logo.svg';
import Fantom from '../../../assets/img/chain-icons/fantom-ftm-logo.svg';
import Arb from '../../../assets/img/chain-icons/arbitrum-arb-logo.svg';
import Palm from '../../../assets/img/chain-icons/palm.svg';
import Sol from '../../../assets/img/chain-icons/solana-sol-logo.svg';
import Op from '../../../assets/img/chain-icons/optimism-ethereum-op-logo.svg';
import Aptos from '../../../assets/img/chain-icons/aptos-apt-logo.svg';
import Cronos from '../../../assets/img/chain-icons/cronos-cro-logo.svg';
import Chainlyze from '../../../assets/img/chain-icons/chainlyze.png';
import { useState } from 'react';

const ChainButtons = () => {
	const [selectButton, setSelectButton] = useState('All Chains');

	const colors = {
		dark: 'dark',
		light: 'light',
		primary: 'primary',
	};

	const ChainButtons = [
		{
			name: 'All Chains',
			icon: Chainlyze,
			color: colors.primary,
		},
		{
			name: 'Ethereum',
			icon: Eth,
			color: colors.light,
		},
		{
			name: 'BNB Chain',
			icon: Bnb,
			color: colors.light,
		},
		{
			name: 'Polygon',
			icon: Poly,
			color: colors.light,
		},
		{
			name: 'Avalanche',
			icon: Avalanche,
			color: colors.light,
		},
		{
			name: 'Fantom',
			icon: Fantom,
			color: colors.light,
		},
		{
			name: 'Cronos',
			icon: Cronos,
			color: colors.light,
		},
		{
			name: 'Arbitrum',
			icon: Arb,
			color: colors.light,
		},
		{
			name: 'Palm',
			icon: Palm,
			color: colors.light,
		},
		{
			name: 'Solana',
			icon: Sol,
			color: colors.light,
		},
		{
			name: 'Optimism',
			icon: Op,
			color: colors.light,
		},
		{
			name: 'Aptos',
			icon: Aptos,
			color: colors.light,
		},
	];

	return (
		<>
			<Card stretch>
				<CardBody>
					<div className='row g-3 mb-2'>
						{ChainButtons.map((chainButton, index) => (
							<div className='col-auto' key={index}>
								<Button
									color={selectButton == chainButton.name ? 'primary' : 'light'}
									icon={chainButton.icon}
									shadow='none'
									hoverShadow='lg'
									onClick={
										selectButton == chainButton.name
											? () => setSelectButton('All Chains')
											: () => setSelectButton(chainButton.name)
									}>
									{chainButton.name}
								</Button>
							</div>
						))}
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default ChainButtons;
