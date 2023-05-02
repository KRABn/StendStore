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
			name: "M9 Bayonet BlueBlood",
			data: [
				3750,
				4500,
				4683,
				4799,
				4443,
				4750,
				3850,
				3300,
				3999,
				3999,
				4288,
				4198,
				4100,
				4200,
				4300,
				4350,
				4610,
				4500,
				4597,
				4887,
				4599,
				4838,
				4700,
				4899,
				4799,
				4849,
				4700,
				4938,
				5100,
				4750,
				5070,
				5235,
				5050,
				5000,
				5180,
				5319,
				5448,
				5748,
				5899,
				5799,
				5555,
				5800,
				5555,
				6000,
				6202,
				5910,
				6000,
				5900,
				5887,
				5600,
				6000,
				6093,
				5950,
				5650,
				5990,
				6220,
				6300,
				5900,
				5899,
				6000,
				6250,
				6200,
				6400,
				6487,
				6300,
				6497,
				6498,
				6399,
				6250,
				6939,
				6800,
				6490,
				6565,
				6233,
				6000,
				6194,
				6100,
				6350,
				6245,
				6399,
				6450,
				6500,
				6630,
				6595,
				6595,
				6200,
				6649,
				6999,
				7100,
				6800,
				7150,
				6890,
				6870,
				6800,
				6664,
				6619,
				6668,
				6100,
				6300,
				6492,
				6199,
				6222,
				6290,
				5999,
				6098,
				5859,
				5988,
				5999,
				6197,
				5700,
				6300,
				6150,
				6150,
				5887,
				5880,
				5999,
				5700,
				5995,
				5860,
				6000,
				6000,
				6050,
				6218,
				5699,
				6000,
				6099,
				6092,
				6000,
				6100,
				5749,
				5800,
				5385,
				5448,
				5700,
				5800,
				5500,
				5898,
				5850,
				5600,
				5821,
				5898,
				5850,
				5999,
				5799,
				5500,
				5555,
				5865,
				5969,
				5898,
				5850,
				5875,
				5977,
				5970,
				5850,
				5994,
				5940,
				6009,
				6050,
				5353,
				5686,
				5699,
				5555,
				5650,
				5499,
				5798,
				6000,
				5700,
				5840,
				5750,
				5400,
				5992,
				5999,
				5700,
				5998,
				5975,
				5480,
				6050,
				6050,
				6133,
				6298,
				6220,
				6285,
				6399,
				6450,
				6400,
				6400,
				6330,
				6599,
				6498,
				6499,
				6660,
				6900,
				6883,
				6576,
				6789,
				6600,
				6999,
				7000,
				6870,
				7150,
				7099,
				7489,
				7350,
				7589,
				7100,
				7200,
				7478,
				7250,
				7699,
				7399,
				7300,
				7399,
				7430,
				8979,
				8500,
				7999,
				8300,
				8149,
				8000,
				8040,
				8230,
				7239,
				7300,
				7399,
				8639,
				8800,
				8799,
				8939,
				8500,
				8666,
				8398,
				7799,
				8130,
				8249,
				8290,
				8300,
				8150,
				7799,
				7500,
				7900,
				7700,
				7800,
				7499,
				8000,
				7429,
				7777,
				7599,
				7940,
				7708,
				7939,
				7977,
				7977,
				7800,
				7600,
				7860,
				7700,
				7653,
				7649,
				7800,
				7300,
				8090,
				7450,
				7000,
				7199,
				7250,
				7019,
				7300,
				7420,
				7222,
				7200,
				7096,
				7277,
				7000,
				7428,
				7499,
				7920,
				7496,
				7000,
				7800,
				7700,
				7500,
				7799,
				7400,
				7600,
				7600,
				7625,
				7600,
				7400,
				7100,
				7296,
				7100,
				7400,
				7399,
				7399,
				7470,
				7450,
				7000,
				7050,
				7444,
				7050,
				7480,
				7300,
				7640,
				7496,
				7295,
				7455,
				7489,
				7100,
				7000,
				7199,
				7300,
				7250,
				7250,
				7498,
				7000,
				7370,
				6549,
				5799,
				6250,
				6960,
				6200,
				6100,
				6695,
				6700,
				6655,
				6749,
				7025,
				7098,
				6849,
				6940,
				6400,
				6750,
				6880,
				6750,
				6800,
				6889,
				6819,
				6750,
				6500,
				6900,
				7099,
				6850,
				
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
			'2022, 03, 16',
			'2022, 03, 22',
			'2022, 03, 30',
			'2022, 04, 06',
			'2022, 04, 12',
			'2022, 04, 18',
			'2022, 04, 22',
			'2022, 04, 25',
			'2022, 04, 26',
			'2022, 04, 28',
			'2022, 04, 30',
			'2022, 05, 01',
			'2022, 05, 03',
			'2022, 05, 04',
			'2022, 05, 06',
			'2022, 05, 07',
			'2022, 05, 09',
			'2022, 05, 10',
			'2022, 05, 12',
			'2022, 05, 15',
			'2022, 05, 16',
			'2022, 05, 18',
			'2022, 05, 19',
			'2022, 05, 21',
			'2022, 05, 22',
			'2022, 05, 24',
			'2022, 05, 25',
			'2022, 05, 27',
			'2022, 05, 28',
			'2022, 05, 30',
			'2022, 05, 31',
			'2022, 06, 02',
			'2022, 06, 03',
			'2022, 06, 05',
			'2022, 06, 06',
			'2022, 06, 08',
			'2022, 06, 09',
			'2022, 06, 11',
			'2022, 06, 12',
			'2022, 06, 14',
			'2022, 06, 15',
			'2022, 06, 17',
			'2022, 06, 23',
			'2022, 06, 25',
			'2022, 06, 26',
			'2022, 06, 27',
			'2022, 06, 28',
			'2022, 06, 29',
			'2022, 06, 30',
			'2022, 07, 02',
			'2022, 07, 03',
			'2022, 07, 04',
			'2022, 07, 05',
			'2022, 07, 06',
			'2022, 07, 07',
			'2022, 07, 08',
			'2022, 07, 09',
			'2022, 07, 10',
			'2022, 07, 11',
			'2022, 07, 12',
			'2022, 07, 13',
			'2022, 07, 14',
			'2022, 07, 15',
			'2022, 07, 17',
			'2022, 07, 18',
			'2022, 07, 19',
			'2022, 07, 20',
			'2022, 07, 21',
			'2022, 07, 22',
			'2022, 07, 23',
			'2022, 07, 24',
			'2022, 07, 25',
			'2022, 07, 26',
			'2022, 07, 27',
			'2022, 07, 28',
			'2022, 07, 29',
			'2022, 07, 30',
			'2022, 07, 31',
			'2022, 08, 01',
			'2022, 08, 02',
			'2022, 08, 03',
			'2022, 08, 04',
			'2022, 08, 05',
			'2022, 08, 06',
			'2022, 08, 07',
			'2022, 08, 08',
			'2022, 08, 09',
			'2022, 08, 10',
			'2022, 08, 11',
			'2022, 08, 12',
			'2022, 08, 13',
			'2022, 08, 14',
			'2022, 08, 15',
			'2022, 08, 16',
			'2022, 08, 17',
			'2022, 08, 18',
			'2022, 08, 19',
			'2022, 08, 20',
			'2022, 08, 21',
			'2022, 08, 22',
			'2022, 08, 23',
			'2022, 08, 24',
			'2022, 08, 25',
			'2022, 08, 26',
			'2022, 08, 27',
			'2022, 08, 28',
			'2022, 08, 29',
			'2022, 08, 31',
			'2022, 09, 01',
			'2022, 09, 02',
			'2022, 09, 03',
			'2022, 09, 05',
			'2022, 09, 06',
			'2022, 09, 07',
			'2022, 09, 08',
			'2022, 09, 09',
			'2022, 09, 10',
			'2022, 09, 11',
			'2022, 09, 12',
			'2022, 09, 13',
			'2022, 09, 14',
			'2022, 09, 15',
			'2022, 09, 16',
			'2022, 09, 17',
			'2022, 09, 18',
			'2022, 09, 19',
			'2022, 09, 20',
			'2022, 09, 21',
			'2022, 09, 22',
			'2022, 09, 24',
			'2022, 09, 25',
			'2022, 09, 26',
			'2022, 09, 27',
			'2022, 09, 28',
			'2022, 09, 29',
			'2022, 09, 30',
			'2022, 10, 01',
			'2022, 10, 02',
			'2022, 10, 03',
			'2022, 10, 04',
			'2022, 10, 05',
			'2022, 10, 06',
			'2022, 10, 07',
			'2022, 10, 08',
			'2022, 10, 09',
			'2022, 10, 10',
			'2022, 10, 11',
			'2022, 10, 12',
			'2022, 10, 13',
			'2022, 10, 14',
			'2022, 10, 15',
			'2022, 10, 16',
			'2022, 10, 17',
			'2022, 10, 18',
			'2022, 10, 19',
			'2022, 10, 20',
			'2022, 10, 21',
			'2022, 10, 22',
			'2022, 10, 23',
			'2022, 10, 24',
			'2022, 10, 25',
			'2022, 10, 26',
			'2022, 10, 27',
			'2022, 10, 28',
			'2022, 10, 29',
			'2022, 10, 30',
			'2022, 10, 31',
			'2022, 11, 01',
			'2022, 11, 02',
			'2022, 11, 03',
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
			'2023, 01, 05',
			'2023, 01, 06',
			'2023, 01, 07',
			'2023, 01, 08',
			'2023, 01, 09',
			'2023, 01, 10',
			'2023, 01, 11',
			'2023, 01, 12',
			'2023, 01, 14',
			'2023, 01, 15',
			'2023, 01, 16',
			'2023, 01, 17',
			'2023, 01, 18',
			'2023, 01, 19',
			'2023, 01, 20',
			'2023, 01, 21',
			'2023, 01, 22',
			'2023, 01, 23',
			'2023, 01, 24',
			'2023, 01, 25',
			'2023, 01, 26',
			'2023, 01, 27',
			'2023, 01, 28',
			'2023, 01, 29',
			'2023, 01, 30',
			'2023, 01, 31',
			'2023, 02, 01',
			'2023, 02, 02',
			'2023, 02, 04',
			'2023, 02, 05',
			'2023, 02, 06',
			'2023, 02, 07',
			'2023, 02, 08',
			'2023, 02, 09',
			'2023, 02, 10',
			'2023, 02, 11',
			'2023, 02, 12',
			'2023, 02, 13',
			'2023, 02, 14',
			'2023, 02, 15',
			'2023, 02, 16',
			'2023, 02, 17',
			'2023, 02, 18',
			'2023, 02, 19',
			'2023, 02, 20',
			'2023, 02, 21',
			'2023, 02, 22',
			'2023, 02, 23',
			'2023, 02, 24',
			'2023, 02, 25',
			'2023, 02, 26',
			'2023, 02, 27',
			'2023, 02, 28',
			'2023, 03, 01',
			'2023, 03, 02',
			'2023, 03, 03',
			'2023, 03, 04',
			'2023, 03, 05',
			'2023, 03, 06',
			'2023, 03, 07',
			'2023, 03, 08',
			'2023, 03, 09',
			'2023, 03, 10',
			'2023, 03, 11',
			'2023, 03, 12',
			'2023, 03, 13',
			'2023, 03, 14',
			'2023, 03, 15',
			'2023, 03, 16',
			'2023, 03, 18',
			'2023, 03, 20',
			'2023, 03, 21',
			'2023, 03, 22',
			'2023, 03, 23',
			'2023, 03, 24',
			'2023, 03, 25',
			'2023, 03, 26',
			'2023, 03, 27',
			'2023, 03, 28',
			'2023, 03, 29',
			'2023, 03, 30',
			'2023, 03, 31',
			'2023, 04, 01',
			'2023, 04, 02',
			'2023, 04, 03',
			'2023, 04, 04',
			'2023, 04, 06',
			'2023, 04, 07',
			'2023, 04, 08',
			'2023, 04, 09',
			'2023, 04, 10',
			'2023, 04, 11',
			'2023, 04, 12',
			'2023, 04, 13',
			'2023, 04, 14',
			'2023, 04, 15',
			'2023, 04, 16',
			'2023, 04, 17',
			'2023, 04, 18',
			'2023, 04, 19',
			'2023, 04, 20',
			'2023, 04, 21',
			'2023, 04, 22',
			'2023, 04, 23',
			'2023, 04, 24',
			'2023, 04, 25',
			'2023, 04, 26',
			'2023, 04, 27',
			'2023, 04, 28',
			'2023, 04, 29',
			'2023, 04, 30'
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
		text: "M9 Bayonet BlueBlood",
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