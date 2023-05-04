import { useMemo, useState } from 'react';

interface SortConfig {
	key: string;
	direction: string;
}

interface Config {
	defaultSortBy?: string;
}

const useSortableData = (items: any[], config: Config = {}) => {
	const [sortConfig, setSortConfig] = useState<SortConfig>({
		key: config.defaultSortBy || '',
		direction: 'ascending',
	});

	const sortedItems = useMemo(() => {
		const sortableItems = [...items];
		if (sortConfig.key !== '' && sortConfig.direction !== '') {
			sortableItems.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [items, sortConfig]);

	const requestSort = (key: string) => {
		let direction = 'ascending';
		if (
			sortConfig.key !== '' &&
			sortConfig.direction !== '' &&
			sortConfig.key === key &&
			sortConfig.direction === 'ascending'
		) {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const getClassNamesFor = (key: string) => {
		if (sortConfig.key !== key) {
			return 'd-none';
		}
		return sortConfig.direction;
	};

	return { items: sortedItems, requestSort, getClassNamesFor, sortConfig };
};

export default useSortableData;
