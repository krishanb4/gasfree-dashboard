import type { NextPage } from 'next';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Head from 'next/head';
import Card, {
	CardActions,
	CardBody,
	CardCodeView,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTabItem,
	CardTitle,
} from '../../components/bootstrap/Card';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';
import CommonStoryBtn from '../../common/partial/other/CommonStoryBtn';
import CommonHowToUse from '../../common/partial/other/CommonHowToUse';
import Button, { ButtonGroup } from '../../components/bootstrap/Button';

const Index: NextPage = () => {
	const { darkModeStatus } = useDarkMode();
	const sampleCards = [1, 2, 3];
	return (
		<PageWrapper>
			<Head>
				<title>Vaults</title>
			</Head>
			<div className='row'>
				{sampleCards.map((item) => (
					<div key={item} className='col-md-4' data-tour='card'>
						<Card
							shadow='none'
							borderSize={1}
							borderColor='primary'
							stretch
							className='mb-0'>
							<CardHeader>
								<CardLabel>
									<CardTitle>borderColor</CardTitle>
									<CardSubTitle>{item}</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
								tempus arcu.
							</CardBody>
							<CardFooter borderSize={1} size='sm'>
								<CardFooterLeft>
									<Button color='primary' isLink>
										Button
									</Button>
								</CardFooterLeft>
								<CardFooterRight>
									<Button color='primary' isOutline>
										Button
									</Button>
								</CardFooterRight>
							</CardFooter>
						</Card>
					</div>
				))}
			</div>
		</PageWrapper>
	);
};

export default Index;
