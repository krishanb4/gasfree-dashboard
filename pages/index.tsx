import React, { useContext, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button, { ButtonGroup } from '../components/bootstrap/Button';
import PageWrapper from '../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../menu';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../layout/SubHeader/SubHeader';
import CommonAvatarTeam from '../common/partial/other/CommonAvatarTeam';
import { useTour } from '@reactour/tour';
import ThemeContext from '../context/themeContext';
import useDarkMode from '../hooks/useDarkMode';
import { TABS, TTabs } from '../common/type/helper';
import Page from '../layout/Page/Page';
import CommonDashboardAlert from '../common/partial/CommonDashboardAlert';
import CommonDashboardUserCard from '../common/partial/CommonDashboardUserCard';
import CommonDashboardMarketingTeam from '../common/partial/CommonDashboardMarketingTeam';
import CommonDashboardDesignTeam from '../common/partial/CommonDashboardDesignTeam';
import CommonDashboardGassUsage from '../common/partial/CommonDashboardGassUsage';
import CommonDashboardGassUsagePredicted from '../common/partial/CommonDashboardGassUsagePredicted';
import CommonDashboardRecentActivities from '../common/partial/CommonDashboardRecentActivities';
import CommonDashboardUserIssue from '../common/partial/CommonDashboardUserIssue';
import CommonDashboardSalesByStore from '../common/partial/CommonDashboardSalesByStore';
import CommonDashboardWaitingAnswer from '../common/partial/CommonDashboardWaitingAnswer';
import CommonDashboardTopSeller from '../common/partial/CommonDashboardTopSeller';
import CommonMyWallet from '../common/partial/CommonMyWallet';
import CommonMyStat from '../common/partial/CommonMyStat';
import MyTokenList from '../common/partial/MyTokenList';
import ChainButtons from './components/chainbuttons/ChainButtons';
import Sparkline from '../components/charts/Sparkline';
const Index: NextPage = () => {
	const { mobileDesign } = useContext(ThemeContext);
	/**
	 * Tour Start
	 */
	const { setIsOpen } = useTour();
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			localStorage.getItem('tourModalStarted') !== 'shown' &&
			!mobileDesign
		) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { themeStatus } = useDarkMode();

	const [activeTab, setActiveTab] = useState<TTabs>(TABS.YEARLY);

	return (
		<PageWrapper>
			<Head>
				<title>{demoPagesMenu.sales.subMenu.dashboard.text}</title>
			</Head>
			{/* <SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Overview</span>
					<SubheaderSeparator />
					<ButtonGroup>
						{Object.keys(TABS).map((key) => (
							<Button
								key={key}
								color={activeTab === TABS[key] ? 'success' : themeStatus}
								onClick={() => setActiveTab(TABS[key])}>
								{TABS[key]}
							</Button>
						))}
					</ButtonGroup>
				</SubHeaderLeft>
				 <SubHeaderRight>
					<CommonAvatarTeam>
						<strong>Marketing</strong> Team
					</CommonAvatarTeam>
				</SubHeaderRight>
			</SubHeader> */}
			<Page container='fluid'>
				<div className='row'>
					<div>
						<ChainButtons />
					</div>
					<div>
						<Sparkline />
					</div>
					<div>
						<CommonMyStat />
					</div>
					{/* <div className='col-xxl-6'>
						<CommonMyWallet />
					</div> */}

					<div>
						<MyTokenList />
					</div>
					{/* <div className='col-12'>
						<CommonDashboardAlert />
					</div> */}

					{/* <div className='col-xl-4'>
						<CommonDashboardUserCard />
					</div> */}
					{/* <div className='col-xl-4'>
						<CommonDashboardMarketingTeam />
					</div> */}
					{/* <div className='col-xl-4'>
						<CommonDashboardDesignTeam />
					</div> */}

					{/* <div className='col-xxl-6'>
						<CommonDashboardGassUsage activeTab={activeTab} />
					</div>
					<div className='col-xxl-6'>
						<CommonDashboardGassUsagePredicted activeTab={activeTab} />
					</div> */}
					{/* <div className='col-xxl-3'>
						<CommonDashboardRecentActivities />
					</div> */}
					{/* <div className='col-xxl-3'>
						<CommonDashboardUserIssue />
					</div> */}

					{/* <div>
						<CommonDashboardSalesByStore />
					</div> */}
					{/* <div className='col-xxl-4 col-xl-6'>
						<CommonDashboardWaitingAnswer />
					</div> */}

					{/* <div className='col-xxl-8'>
						<CommonDashboardTopSeller />
					</div> */}
				</div>
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
