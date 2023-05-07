import Card, { CardBody } from '../../components/bootstrap/Card';
import Chart, { IChartOptions } from '../../components/extras/Chart';
import { useState } from 'react';

const Sparkline = () => {
	const randomizeArray = (arg: number[]) => {
		const array = arg.slice();
		let currentIndex = array.length;
		let temporaryValue;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	// data for the sparklines that appear below header area
	const sparklineData = [
		47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
		46,
	];
	const [state] = useState<IChartOptions>({
		series: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		options: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			yaxis: {
				min: 0,
			},
			colors: ['#DCE6EC'],
			title: {
				text: '$424,652',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'Net Worth',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		seriesSpark2: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		optionsSpark2: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			yaxis: {
				min: 0,
			},
			colors: ['#DCE6EC'],
			title: {
				text: '$235,312',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'NFT',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		seriesSpark3: [
			{
				data: randomizeArray(sparklineData),
			},
		],
		optionsSpark3: {
			chart: {
				type: 'area',
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				curve: 'straight',
			},
			fill: {
				opacity: 0.3,
			},
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			yaxis: {
				min: 0,
			},
			title: {
				text: '$135,965',
				offsetX: 15,
				offsetY: 20,
				style: {
					fontSize: '24px',
				},
			},
			subtitle: {
				text: 'Profits',
				offsetX: 15,
				offsetY: 50,
				style: {
					fontSize: '14px',
				},
			},
		},

		series1: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		options1: {
			chart: {
				type: 'line',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter() {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series2: [
			{
				data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
			},
		],
		options2: {
			chart: {
				type: 'line',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter() {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series3: [43, 32, 12, 9],
		options3: {
			chart: {
				type: 'pie',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
			},
		},

		series4: [43, 32, 12, 9],
		options4: {
			chart: {
				type: 'donut',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			stroke: {
				width: 1,
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
			},
		},

		series5: [
			{
				data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
			},
		],
		options5: {
			chart: {
				type: 'bar',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			plotOptions: {
				bar: {
					columnWidth: '80%',
				},
			},
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter() {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series6: [
			{
				data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
			},
		],
		options6: {
			chart: {
				type: 'bar',
				width: 100,
				height: 35,
				sparkline: {
					enabled: true,
				},
			},
			plotOptions: {
				bar: {
					columnWidth: '80%',
				},
			},
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			xaxis: {
				crosshairs: {
					width: 1,
				},
			},
			tooltip: {
				fixed: {
					enabled: false,
				},
				x: {
					show: false,
				},
				y: {
					title: {
						formatter() {
							return '';
						},
					},
				},
				marker: {
					show: false,
				},
			},
		},

		series7: [45],
		options7: {
			chart: {
				type: 'radialBar',
				width: 50,
				height: 50,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 0,
					},
					dataLabels: {
						show: false,
					},
				},
			},
		},

		series8: [53, 67],
		options8: {
			chart: {
				type: 'radialBar',
				width: 40,
				height: 40,
				sparkline: {
					enabled: true,
				},
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: '50%',
					},
					track: {
						margin: 1,
					},
					dataLabels: {
						show: false,
					},
				},
			},
		},
	});
	return (
		<div className='row'>
			<div className='col-md-4'>
				<Card className='overflow-hidden'>
					<CardBody className='p-0'>
						<Chart
							series={state.series}
							options={state.options}
							type={state.options.chart?.type}
							height={state.options.chart?.height}
						/>
					</CardBody>
				</Card>
			</div>
			<div className='col-md-4'>
				<Card className='overflow-hidden'>
					<CardBody className='p-0'>
						<Chart
							series={state.seriesSpark2}
							options={state.optionsSpark2}
							type={state.optionsSpark2.chart.type}
							height={state.optionsSpark2.chart.height}
						/>
					</CardBody>
				</Card>
			</div>
			<div className='col-md-4'>
				<Card className='overflow-hidden'>
					<CardBody className='p-0'>
						<Chart
							series={state.seriesSpark3}
							options={state.optionsSpark3}
							type={state.optionsSpark3.chart.type}
							height={state.optionsSpark3.chart.height}
						/>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default Sparkline;
