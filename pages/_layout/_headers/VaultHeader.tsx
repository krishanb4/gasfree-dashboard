import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import CommonHeaderChat from './CommonHeaderChat';
import Search from '../../../components/Search';
import CommonHeaderRight from './CommonHeaderRight';

const VaultHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<Search />
			</HeaderLeft>
			<CommonHeaderRight afterChildren={<CommonHeaderChat />} />
		</Header>
	);
};

export default VaultHeader;
