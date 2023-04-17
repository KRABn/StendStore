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
      name: "AWM Treasure Hunter",
      data: [
        155555,
        154990,
        144990,
        139000,
        116930,
        150000,
        124999,
        118888,
        119500,
        118000,
        105875,
        122199,
        124444,
        123444,
        123000,
        138750,
        149000,
        120000,
        115000,
        124000,
        112500,
        119999,
        119992,
        139496,
        122988,
        121888,
        120998,
        120996,
        124300,
        124000,
        123840,
        117998,
        117999,
        119799,
        115000,
        118999,
        115000,
        116999,
        129665,
        111111,
        112487,
        124600,
        126599,
        135997,
        114444,
        120000,
        123000,
        122500,
        122800,
        120000,
        106000,
        123000,
        126000,
        119999,
        119000,
        118900,
        117900,
        121900,
        121000,
        121000,
        121000,
        119000,
        277000,
        153940,
        200000,
        225000,
        245000,
        279999,
        150000,
        194000,
        168900,
        154000,
        169000,
        169000,
        198400,
        250000,
        250000,
        250000,
        250000,
        
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
      '2022, 04, 24',
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
      '2023, 04, 14'
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
    text: "AWM Treasure Hunter",
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