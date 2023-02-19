import React, { useEffect, useState } from 'react';
import OffCanvas, { OffCanvasBody, OffCanvasHeader } from '../../../components/bootstrap/OffCanvas';
import Chat, { ChatGroup, ChatHeader } from '../../../components/Chat';
import InputGroup from '../../../components/bootstrap/forms/InputGroup';
import Textarea from '../../../components/bootstrap/forms/Textarea';
import Button from '../../../components/bootstrap/Button';
import USERS from '../../../common/data/userDummyData';
import Avatar from '../../../components/Avatar';
import showNotification from '../../../components/extras/showNotification';
import CHATS from '../../../common/data/chatDummyData';
import { useAccount, useConnect, useDisconnect, useNetwork, useSignMessage } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useAuthRequestChallengeEvm } from '@moralisweb3/next';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { Web3Button } from '@web3modal/react';

interface AuthState {
	connecting: boolean;
	connected: boolean;
}

const CommonHeaderChat = () => {
	const [state, setState] = useState<boolean>(false);
	const [msgCount, setMsgCount] = useState<number>(0);
	const { isConnected, address, isConnecting, isDisconnected } = useAccount();
	const [authState, setAuthState] = useState<AuthState>({
		connecting: isConnecting,
		connected: isConnected,
	});
	const { chain } = useNetwork();
	const { signMessageAsync } = useSignMessage();
	const { requestChallengeAsync } = useAuthRequestChallengeEvm();
	const { push } = useRouter();
	console.log(isConnected);
	useEffect(() => {
		console.log();
		handleAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isConnecting, isConnected]);

	const handleAuth = async () => {
		if (authState.connecting && isConnected) {
			const challenge = await requestChallengeAsync({
				address: address!,
				chainId: chain!.id,
			});

			const message = challenge?.message || '';

			const signature = await signMessageAsync({ message });

			// redirect user after success authentication to '/user' page
			const response = await signIn('moralis-auth', {
				message,
				signature,
				redirect: false,
				callbackUrl: '/',
			});
			/**
			 * instead of using signIn(..., redirect: "/user")
			 * we get the url from callback and push it to the router to avoid page refreshing
			 */
			push(response?.url || '/');
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMsgCount(1);
			showNotification(
				<span className='d-flex align-items-center'>
					<Avatar
						src={USERS.CHLOE.src}
						size={36}
						color={USERS.CHLOE.color}
						className='me-3'
					/>
					<span>{USERS.CHLOE.name} sent a message.</span>
				</span>,
				<div onClick={() => setState(!state)} role='presentation'>
					<p>I think it's really starting to shine.</p>
				</div>,
			);
		}, 30000);
		return () => {
			clearTimeout(timeout);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setMsgCount(0);
	}, [state]);

	return (
		<>
			<div className='col d-flex align-items-center cursor-pointer'>
				<Web3Button balance='show' icon='hide' />
			</div>
			{/* <div
				className='col d-flex align-items-center cursor-pointer'
				onClick={() => setState(!state)}
				role='presentation'>
				<div className='me-3'>
					<div className='text-end'>
						<div className='fw-bold fs-6 mb-0'>
							{`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
						</div>
						<div className='text-muted'>
							<small>{USERS.CHLOE.position}</small>
						</div>
					</div>
				</div>
				<div className='position-relative'>
					<Avatar src={USERS.CHLOE.src} size={48} color={USERS.CHLOE.color} />
					{!!msgCount && (
						<span className='position-absolute top-15 start-85 translate-middle badge rounded-pill bg-danger'>
							{msgCount} <span className='visually-hidden'>unread messages</span>
						</span>
					)}
					<span className='position-absolute top-85 start-85 translate-middle badge border border-2 border-light rounded-circle bg-success p-2'>
						<span className='visually-hidden'>Online user</span>
					</span>
				</div>
			</div> */}
			{/* <OffCanvas
				id='chat'
				isOpen={state}
				setOpen={setState}
				placement='end'
				isModalStyle
				isBackdrop={false}
				isBodyScroll>
				<OffCanvasHeader setOpen={setState} className='fs-5'>
					<ChatHeader to={USERS.CHLOE.name} />
				</OffCanvasHeader>
				<OffCanvasBody>
					<Chat>
						{CHATS.CHLOE_VS_JOHN.map((msg) => (
							<ChatGroup
								key={msg.id}
								messages={msg.messages}
								user={msg.user}
								isReply={msg.isReply}
							/>
						))}
					</Chat>
				</OffCanvasBody>
				<div className='chat-send-message p-3'>
					<InputGroup>
						<Textarea />
						<Button color='info' icon='Send'>
							SEND
						</Button>
					</InputGroup>
				</div>
			</OffCanvas> */}
		</>
	);
};

export default CommonHeaderChat;
