import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/authContext';
import { ThemeContextProvider } from '../context/themeContext';
import useDarkMode from '../hooks/useDarkMode';
import COLORS from '../common/data/enumColors';
import { getOS } from '../helpers/helpers';
import { ThemeProvider } from 'react-jss';
import { ToastProvider } from 'react-toast-notifications';
import { Toast, ToastContainer } from '../components/bootstrap/Toasts';
import { TourProvider } from '@reactour/tour';
import steps, { styles } from '../steps';
import Portal from '../layout/Portal/Portal';
import { ReactNotifications } from 'react-notifications-component';
import Wrapper from '../layout/Wrapper/Wrapper';
import { appWithTranslation } from 'next-i18next';
import App from '../layout/App/App';
import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';
import { mainnet } from 'wagmi/chains';

import AsideRoutes from '../layout/Aside/AsideRoutes';

const { provider, webSocketProvider } = configureChains([mainnet], [publicProvider()]);

const client = createClient({
	provider,
	webSocketProvider,
	autoConnect: true,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
	getOS();

	/**
	 * Dark Mode
	 */
	const { themeStatus } = useDarkMode();
	const theme = {
		theme: themeStatus,
		primary: COLORS.PRIMARY.code,
		secondary: COLORS.SECONDARY.code,
		success: COLORS.SUCCESS.code,
		info: COLORS.INFO.code,
		warning: COLORS.WARNING.code,
		danger: COLORS.DANGER.code,
		dark: COLORS.DARK.code,
		light: COLORS.LIGHT.code,
	};

	return (
		<AuthContextProvider>
			<ThemeContextProvider>
				<ThemeProvider theme={theme}>
					<WagmiConfig client={client}>
						<SessionProvider session={pageProps.session} refetchInterval={0}>
							<ToastProvider components={{ ToastContainer, Toast }}>
								<TourProvider
									steps={steps}
									styles={styles}
									showNavigation={false}
									showBadge={false}>
									<App>
										<AsideRoutes />
										<Wrapper>
											{/* eslint-disable-next-line react/jsx-props-no-spreading */}
											<Component {...pageProps} />
										</Wrapper>
									</App>
									<Portal id='portal-notification'>
										<ReactNotifications />
									</Portal>
								</TourProvider>
							</ToastProvider>
						</SessionProvider>
					</WagmiConfig>
				</ThemeProvider>
			</ThemeContextProvider>
		</AuthContextProvider>
	);
};

export default appWithTranslation(MyApp /*, nextI18NextConfig */);
