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
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import CommonStoryBtn from '../../../common/partial/other/CommonStoryBtn';
import CommonHowToUse from '../../../common/partial/other/CommonHowToUse';
import Link from 'next/link';

const ChainButtons = () => {
	return (
		<>
			<Card stretch>
				<CardBody>
					<div className='row g-3 mb-2'>
						<div className='col-auto'>
							<Button color='primary' icon='Star' shadow='none' hoverShadow='lg'>
								All Chains
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='primary' icon='Star' shadow='none' hoverShadow='lg'>
								Ethereum
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='secondary' icon='Group' shadow='none' hoverShadow='lg'>
								BNB Chain
							</Button>
						</div>
						<div className='col-auto'>
							<Button
								color='success'
								icon='VerifiedUser'
								shadow='none'
								hoverShadow='lg'>
								Polygon
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='info' icon='Info' shadow='none' hoverShadow='lg'>
								Avalanche
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='warning' icon='Warning' shadow='none' hoverShadow='lg'>
								Fantom
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='danger' icon='Bolt' shadow='none' hoverShadow='lg'>
								Cronos
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='light' icon='Light' shadow='none' hoverShadow='lg'>
								Arbitrum
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='dark' icon='NightsStay' shadow='none' hoverShadow='lg'>
								Palm
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='primary' icon='Star' shadow='none' hoverShadow='lg'>
								Solana
							</Button>
						</div>
						<div className='col-auto'>
							<Button color='secondary' icon='Group' shadow='none' hoverShadow='lg'>
								Optimism
							</Button>
						</div>
						<div className='col-auto'>
							<Button
								color='success'
								icon='VerifiedUser'
								shadow='none'
								hoverShadow='lg'>
								Aptos
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default ChainButtons;
