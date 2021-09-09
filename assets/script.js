Highcharts.chart('container', {
	chart: {
		type: 'bar'
	},
	styledMode :false,
	title: {
		text: 'Stacked bar chart'
	},
	xAxis: {
		categories: ['', '', '', '', ''],
		lineColor: '#fff',
		lineWidth: 0,
		labels: {
            format: 'FF<br>ED' // The $ is literally a dollar unit
		},
	},
	yAxis: {
		gridLineWidth:0,
		gridLineColor: '#fff',
		min: 0,
		title: {
			text: 'FE: Foundation for the Future<br>ED: Ecosystem for the Youth'
		},
		
		labels: {
            enabled: false
        }
	},
	legend: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal',
		cursor: 'pointer',
		// enableMouseTracking: false,
		states: {
			hover: {
				enabled: false
			},
			inactive: {
			opacity: 1,
			}
		}
		}
	},
	series: [
		 {
			name: 'HEALTH & WELLBEING',
			data: [{y: 3, color: '#7e5514'}, {y: 12, color: '#7e5514'}, 4, 4, 3],
			stack: 'FOUNDATIONS FOR THE FUTURE',
			drilldown: "HEALTH & WELLBEING"
		}, {
			name: 'GLOBAL CITIZENSHIP & LEADERSHIP',
			data: [{y: 2, color: '#97651a'}, {y: 5, color: '#7e5514'}, 6, 2, 1],
			stack: 'FOUNDATIONS FOR THE FUTURE'
		}, {
			name: 'ENTREPRENEURSHIP & EMPLOYABILITY',
			data: [{y: 3, color: '#b0761f'}, 4, 4, 2, 5],
			stack: 'FOUNDATIONS FOR THE FUTURE'
		}, {
			name: 'EDUCATION & SKILLS',
			data: [{y: 3, color: '#c98722'},3,4, 7, 2],
			stack: 'FOUNDATIONS FOR THE FUTURE'
		}, {
			name: 'Innovation capacity',
			data: [{y: 3, color: '#fef6ea'}, 12, 4, 4, 3],
			stack: 'ECOSYSTEM FOR YOUTH DEVELOPMENT'
		}, {
			name: 'Economic dynamism',
			data: [{y: 3, color: '#fce5bf'}, 12, 4, 4, 3],
			stack: 'ECOSYSTEM FOR YOUTH DEVELOPMENT'
		}, {
			name: 'Infrastructure & connectivity',
			data: [{y: 3, color: '#fbd597'}, 12, 4, 4, 3],
			stack: 'ECOSYSTEM FOR YOUTH DEVELOPMENT'
		}, {
			name: 'Security & governance',
			data: [{y: 3, color: '#f9ba55'}, 12, 4, 4, 3],
			stack: 'ECOSYSTEM FOR YOUTH DEVELOPMENT'
		}
	]
});
