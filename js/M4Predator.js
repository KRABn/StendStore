
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
      name: "M4 Predator",
      data: [
        95,
        109,
        110,
        119,
        100,
        108,
        102,
        80,
        65,
        80,
        88,
        96.9,
        99.9,
        100,
        97,
        97,
        102,
        94,
        110,
        106,
        105,
        113,
        109,
        106,
        110,
        108,
        106,
        113,
        115,
        113,
        110,
        115,
        101,
        121,
        119,
        109,
        121,
        112,
        122,
        122,
        127,
        120,
        127,
        131,
        125,
        134,
        125,
        127,
        123,
        127,
        121,
        127,
        122,
        125,
        129,
        130,
        128,
        124,
        127,
        117,
        135,
        138,
        138,
        136,
        134,
        137,
        124,
        135,
        139,
        130,
        142,
        135,
        130,
        134,
        139,
        138,
        134,
        143,
        142,
        144,
        140,
        130,
        143,
        138,
        138,
        147,
        150,
        149,
        155,
        158,
        158,
        152,
        160,
        156,
        153,
        160,
        145,
        132,
        135,
        148,
        146,
        147,
        133,
        129,
        120,
        127,
        126,
        128,
        143,
        124,
        122,
        114,
        115,
        121,
        119,
        129,
        129,
        129,
        118,
        135,
        132,
        130,
        130,
        130,
        132,
        129,
        125,
        124,
        125,
        123,
        105,
        110,
        115,
        121,
        109,
        112,
        118,
        110,
        117,
        110,
        109,
        118,
        124,
        119,
        123,
        118,
        113,
        111,
        112,
        115,
        120,
        120,
        109,
        111,
        115,
        105,
        117,
        117,
        112,
        110,
        100,
        107,
        115,
        116,
        110,
        98,
        98,
        98,
        97,
        97,
        103,
        110,
        109,
        109,
        112,
        125,
        146,
        146,
        98,
        100,
        106,
        112,
        119,
        117,
        117,
        117,
        123,
        119,
        128,
        135,
        129,
        120,
        128,
        122,
        115,
        120,
        116,
        138,
        137,
        139,
        142,
        153,
        128,
        132,
        130,
        150,
        145,
        125,
        129,
        146,
        153,
        150,
        149,
        157,
        144,
        163,
        165,
        154,
        150,
        150,
        140,
        110,
        123,
        128,
        198,
        197,
        199,
        198,
        170,
        180,
        175,
        168,
        152,
        155,
        176,
        167,
        155,
        163,
        150,
        166,
        178,
        161,
        159,
        145,
        158,
        170,
        167,
        168,
        142,
        164,
        149,
        149,
        145,
        166,
        156,
        154,
        164,
        165,
        156,
        140,
        169,
        175,
        157,
        149,
        144,
        167,
        165,
        168,
        150,
        160,
        134,
        160,
        158,
        159,
        164,
        145,
        163,
        172,
        178,
        197,
        172,
        186,
        170,
        195,
        200,
        200,
        199,
        160,
        177,
        182,
        182,
        176,
        178,
        179,
        180,
        179,
        184,
        170,
        180,
        170,
        192,
        186,
        189,
        185,
        188,
        180,
        185,
        184,
        170,
        177,
        165,
        159,
        160,
        160,
        150,
        158
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
      '2022, 02, 16',
      '2022, 02, 22',
      '2022, 02, 30',
      '2022, 03, 06',
      '2022, 03, 12',
      '2022, 03, 18',
      '2022, 03, 22',
      '2022, 03, 25',
      '2022, 03, 26',
      '2022, 03, 28',
      '2022, 03, 30',
      '2022, 04, 01',
      '2022, 04, 03',
      '2022, 04, 04',
      '2022, 04, 06',
      '2022, 04, 07',
      '2022, 04, 09',
      '2022, 04, 10',
      '2022, 04, 12',
      '2022, 04, 15',
      '2022, 04, 16',
      '2022, 04, 18',
      '2022, 04, 19',
      '2022, 04, 21',
      '2022, 04, 22',
      '2022, 04, 24',
      '2022, 04, 25',
      '2022, 04, 27',
      '2022, 04, 28',
      '2022, 04, 30',
      '2022, 04, 31',
      '2022, 05, 02',
      '2022, 05, 03',
      '2022, 05, 05',
      '2022, 05, 06',
      '2022, 05, 08',
      '2022, 05, 09',
      '2022, 05, 11',
      '2022, 05, 12',
      '2022, 05, 14',
      '2022, 05, 15',
      '2022, 05, 17',
      '2022, 05, 23',
      '2022, 05, 25',
      '2022, 05, 26',
      '2022, 05, 27',
      '2022, 05, 28',
      '2022, 05, 29',
      '2022, 05, 30',
      '2022, 06, 02',
      '2022, 06, 03',
      '2022, 06, 04',
      '2022, 06, 05',
      '2022, 06, 06',
      '2022, 06, 07',
      '2022, 06, 08',
      '2022, 06, 09',
      '2022, 06, 10',
      '2022, 06, 11',
      '2022, 06, 12',
      '2022, 06, 13',
      '2022, 06, 14',
      '2022, 06, 15',
      '2022, 06, 17',
      '2022, 06, 18',
      '2022, 06, 19',
      '2022, 06, 20',
      '2022, 06, 21',
      '2022, 06, 22',
      '2022, 06, 23',
      '2022, 06, 24',
      '2022, 06, 25',
      '2022, 06, 26',
      '2022, 06, 27',
      '2022, 06, 28',
      '2022, 06, 29',
      '2022, 06, 30',
      '2022, 06, 31',
      '2022, 07, 01',
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
      '2022, 07, 16',
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
      '2022, 07, 31',
      '2022, 08, 01',
      '2022, 08, 02',
      '2022, 08, 03',
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
      '2022, 08, 24',
      '2022, 08, 25',
      '2022, 08, 26',
      '2022, 08, 27',
      '2022, 08, 28',
      '2022, 08, 29',
      '2022, 08, 30',
      '2022, 09, 01',
      '2022, 09, 02',
      '2022, 09, 03',
      '2022, 09, 04',
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
      '2022, 09, 23',
      '2022, 09, 24',
      '2022, 09, 25',
      '2022, 09, 26',
      '2022, 09, 27',
      '2022, 09, 28',
      '2022, 09, 29',
      '2022, 09, 30',
      '2022, 09, 31',
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
      '2022, 11, 20',
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
      '2022, 11, 31',
      '2023, 00, 01',
      '2023, 00, 02',
      '2023, 00, 03',
      '2023, 00, 04',
      '2023, 00, 05',
      '2023, 00, 06',
      '2023, 00, 07',
      '2023, 00, 08',
      '2023, 00, 09',
      '2023, 00, 10',
      '2023, 00, 11',
      '2023, 00, 12',
      '2023, 00, 14',
      '2023, 00, 15',
      '2023, 00, 16',
      '2023, 00, 17',
      '2023, 00, 18',
      '2023, 00, 19',
      '2023, 00, 20',
      '2023, 00, 21',
      '2023, 00, 22',
      '2023, 00, 23',
      '2023, 00, 24',
      '2023, 00, 25',
      '2023, 00, 26',
      '2023, 00, 27',
      '2023, 00, 28',
      '2023, 00, 29',
      '2023, 00, 30',
      '2023, 00, 31',
      '2023, 01, 01',
      '2023, 01, 02',
      '2023, 01, 04',
      '2023, 01, 05',
      '2023, 01, 06',
      '2023, 01, 07',
      '2023, 01, 08',
      '2023, 01, 09',
      '2023, 01, 10',
      '2023, 01, 11',
      '2023, 01, 12',
      '2023, 01, 13',
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
      '2023, 02, 01',
      '2023, 02, 02',
      '2023, 02, 03',
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
      '2023, 02, 18',
      '2023, 02, 20',
      '2023, 02, 21',
      '2023, 02, 22',
      '2023, 02, 23',
      '2023, 02, 24',
      '2023, 02, 25',
      '2023, 02, 26',
      '2023, 02, 27',
      '2023, 02, 28',
      '2023, 02, 29',
      '2023, 02, 30',
      '2023, 02, 31',
      '2023, 03, 01',
      '2023, 03, 02',
      '2023, 03, 03'
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
    text: "AWM Sport",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
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
