import React, { useState } from 'react';
import Card, { CardBody, CardHeader, CardLabel, CardSubTitle, CardTitle } from '../bootstrap/Card';
import Chart, { IChartOptions } from '../extras/Chart';

const DonutBasic = () => {
	const [state] = useState<IChartOptions>({
		series: [44, 55, 41, 17, 15],
		options: {
			chart: {
				type: 'donut',
				width: 380,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});
	return (
		<>
			<Chart
				series={state.series}
				options={state.options}
				type={state.options.chart?.type}
				width={state.options.chart?.width}
			/>
		</>
	);
};

export default DonutBasic;
