// Chart options
const options = {
	chart: {
		height: 450,
		width: "100%",
		type: "line",
		background: "rgb(123, 54, 168, 0.3)",
		foreColor: "#ebe4f0",
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: '#f4f4f4',
      opacity: 0.35
  }
	},
	// plotOptions: {
	//   bar: {
	// 	horizontal: false
	//   }
	// },
	series: [
		{
			name: "Charm Black Spot",
			data: [
        888888,
        52000,
        62500,
        62500,
        250000,
        250000,
        200000,
        200000,
        250000,
        125000,
        375000,
        180000,
        135000,
        250000,
        150000,
        200000,
        300000,
        350000,
        350000,
        250000,
        349000,
        500000,
        498000,
        498800,
        333333,
        733333,
        53999,
        87989,
        62998,
        64443,
        53999,
        51000,
        49999,
        54000,
        54000,
        54998,
        51111,
        50999,
        50500,
        49800,
        49850,
        49879,
        49879,
        49000,
        48888,
        48800,
        41000,
        38900,
        37799,
        37249,
        39999,
        39000,
        39500,
        39000,
        37749,
        37749,
        37699,
        37300,
        36499,
        32000,
        33333,
        27375,
        30700,
        27800,
        21989,
        21982,
        25000,
        22666,
        24000,
        20500,
        18000,
        17767,
        17965,
        16999,
        17999,
        39999,
        18830,
        18500,
        19990,
        21238, 
        17699, 
        18000, 
        18490, 
        19970,
			]
		},
		//   {
		// 	name: "Popw",
		// 	data: [
		// 		89311,
		// 		12315,
		// 		24123,
		// 		48231,
		// 		21412,
		// 		12314
		// 	]
		//   }
	],
	xaxis: {
		labels: {
			datetimeFormatter: {
				year: 'yyyy',
				month: 'МММ',
				day: 'dd',
			}
		},
		categories: [
      '2022, 11, 04',
      '2022, 11, 05',
      '2022, 11, 06',
      '2022, 11, 07',
      '2022, 11, 08',
      '2022, 11, 09',
      '2022, 11, 10',
      '2022, 11, 11',
      '2022, 11, 12',
      '2022, 11, 13',
      '2022, 11, 14',
      '2022, 11, 15',
      '2022, 11, 16',
      '2022, 11, 17',
      '2022, 11, 18',
      '2022, 11, 19',
      '2022, 11, 21',
      '2022, 11, 22',
      '2022, 11, 23',
      '2022, 11, 24',
      '2022, 11, 25',
      '2022, 11, 26',
      '2022, 11, 27',
      '2022, 11, 28',
      '2022, 11, 29',
      '2022, 11, 30',
      '2022, 12, 01',
      '2022, 12, 02',
      '2022, 12, 03',
      '2022, 12, 04',
      '2022, 12, 05',
      '2022, 12, 06',
      '2022, 12, 07',
      '2022, 12, 08',
      '2022, 12, 09',
      '2022, 12, 10',
      '2022, 12, 11',
      '2022, 12, 12',
      '2022, 12, 13',
      '2022, 12, 14',
      '2022, 12, 15',
      '2022, 12, 16',
      '2022, 12, 17',
      '2022, 12, 18',
      '2022, 12, 19',
      '2022, 12, 20',
      '2022, 12, 21',
      '2022, 12, 22',
      '2022, 12, 23',
      '2022, 12, 24',
      '2022, 12, 25',
      '2022, 12, 26',
      '2022, 12, 27',
      '2022, 12, 28',
      '2022, 12, 29',
      '2022, 12, 30',
      '2022, 12, 31',
      '2023, 01, 01',
      '2023, 01, 02',
      '2023, 01, 03',
      '2023, 01, 04',
      // '2023, 01, 05',
      // '2023, 01, 06',
      // '2023, 01, 07',
      // '2023, 01, 08',
      // '2023, 01, 09',
      // '2023, 01, 10',
      '2023, 01, 11',
      // '2023, 01, 12',
      // '2023, 01, 14',
      // '2023, 01, 15',
      // '2023, 01, 16',
      // '2023, 01, 17',
      '2023, 01, 18',
      // '2023, 01, 19',
      // '2023, 01, 20',
      // '2023, 01, 21',
      // '2023, 01, 22',
      // '2023, 01, 23',
      // '2023, 01, 24',
      '2023, 01, 25',
      // '2023, 01, 26',
      // '2023, 01, 27',
      // '2023, 01, 28',
      // '2023, 01, 29',
      // '2023, 01, 30',
      // '2023, 01, 31',
      '2023, 02, 01',
      // '2023, 02, 02',
      // '2023, 02, 04',
      // '2023, 02, 05',
      // '2023, 02, 06',
      // '2023, 02, 07',
      '2023, 02, 08',
      // '2023, 02, 09',
      // '2023, 02, 10',
      // '2023, 02, 11',
      // '2023, 02, 12',
      // '2023, 02, 13',
      // '2023, 02, 14',
      '2023, 02, 15',
      // '2023, 02, 16',
      // '2023, 02, 17',
      // '2023, 02, 18',
      // '2023, 02, 19',
      // '2023, 02, 20',
      // '2023, 02, 21',
      '2023, 02, 22',
      // '2023, 02, 23',
      // '2023, 02, 24',
      // '2023, 02, 25',
      // '2023, 02, 26',
      // '2023, 02, 27',
      // '2023, 02, 28',
      '2023, 03, 01',
      // '2023, 03, 02',
      // '2023, 03, 03',
      // '2023, 03, 04',
      // '2023, 03, 05',
      // '2023, 03, 06',
      // '2023, 03, 07',
      '2023, 03, 08',
      // '2023, 03, 09',
      // '2023, 03, 10',
      // '2023, 03, 11',
      // '2023, 03, 12',
      // '2023, 03, 13',
      // '2023, 03, 14',
      '2023, 03, 15',
      // '2023, 03, 16',
      // '2023, 03, 18',
      // '2023, 03, 20',
      // '2023, 03, 21',
      '2023, 03, 22',
      // '2023, 03, 23',
      // '2023, 03, 24',
      // '2023, 03, 25',
      // '2023, 03, 26',
      // '2023, 03, 27',
      // '2023, 03, 28',
      '2023, 03, 29',
      // '2023, 03, 30',
      // '2023, 03, 31',
      // '2023, 04, 01',
      // '2023, 04, 02',
      // '2023, 04, 03',
      // '2023, 04, 04',
      '2023, 04, 06',
      // '2023, 04, 07',
      // '2023, 04, 08',
      // '2023, 04, 09',
      // '2023, 04, 10',
      // '2023, 04, 11',
      // '2023, 04, 12',
      '2023, 04, 13',
      // '2023, 04, 14',
			// '2023, 04, 15',
			// '2023, 04, 16',
			// '2023, 04, 17',
			// '2023, 04, 18',
			// '2023, 04, 19',
			'2023, 04, 20',
			// '2023, 04, 21',
			// '2023, 04, 22',
			// '2023, 04, 23',
			// '2023, 04, 24',
			// '2023, 04, 25',
			// '2023, 04, 26',
			'2023, 04, 27',
			// '2023, 04, 28',
      // '2023, 04, 29',
			// '2023, 04, 30',
			// '2023, 05, 1',
			// '2023, 05, 2',
			// '2023, 05, 3',
			'2023, 05, 4',
			'2023, 05, 5',
			// '2023, 05, 6'
      '2023, 05, 12',
      '2023, 05, 19',
      '2023, 05, 26',
      '2023, 06, 01',
      '2023, 06, 08',
		]
	},

	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		curve: 'smooth',
		lineCap: 'butt',
		colors: "#fff",
		width: 2,
		dashArray: 0,      
	},

	title: {
		text: "Charm Black Spot",
		align: "center",
		margin: 20,
		offsetY: 20,
		style: {
			fontSize: "20px"
		}
	}
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

  // Event example
//   document.getElementById("change").addEventListener("click", () =>
// 	chart.updateOptions({
// 	  plotOptions: {
// 		bar: {
// 		  horizontal: true
// 		}
// 	  }
// 	})
//   );