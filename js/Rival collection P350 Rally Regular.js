var options = {
  series: [{
    name: "P350 Rally Regular",
    data: [0.68, 0.69, 0.7, 0.74, 1.24, 0.81, 0.73, 0.59, 0.64, 0.77, 0.6, 0.97, 0.8, 1.09, 1.1, 1.1, 1.18, 1.3, 1.34, 1.32, 1.15, 1.37, 1.64, 1.4, 1.17, 1.33, 1.3, 1.39, 1.2, 1.7, 1.77, 1.79, 1.75, 0.98, 1.2, 1.85, 1.97, 1.9, 2.32, 2, 1.99, 1.89, 3.39, 3.25, 2.93, 3, 2.41, 3.22, 3.69, 3.68, 4.45, 3.74, 4.3, 4.79, 4, 1.94, 2.25, 3.29, 3.49, 3.74, 3.61, 3.72, 3.8, 4.18, 4.23, 4.9, ]
  },
  {
    name: "P350 Rally ST",
    data: [10.48, 12.15, 12.25, 12.1, 13.75, 10.99, 11.5, 9.05, 8.98, 9.2, 9.3, 10, 8.5, 11.19, 11.39, 11, 11.49, 11, 12.3, 12.9, 13, 13.73, 13.5, 12.19, 11.95, 12.3, 16.3, 13, 12.9, 12.98, 13.6, 13, 12.7, 8.74, 10, 13, 12.9, 13, 16.5, 16, 13.32, 12.42, 18.59, 18.97, 18.5, 16, 18.8, 18, 17, 19, 22, 17, 19.98, 20, 20, 10, 16.6, 17.99, 18, 20, 19.8, 19.5, 20, 20, 20, 18.69, ]
  },

],
  chart: {
  height: 350,
  type: 'line',
  background: "rgb(123, 54, 168, 0.35)",
  foreColor: "#ebe4f0",
  zoom: {
    enabled: true
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [3, 3,],
  curve: 'straight',
  dashArray: [0, 0,]
},
title: {
  text: 'P350 Rally',
  align: 'left'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['2022, 03, 16',
  '2022, 03, 22',
  '2022, 03, 30',
  '2022, 04, 06',
  '2022, 04, 12',
  '2022, 04, 18',
  '2022, 04, 22',
  // '2022, 04, 24',
  // '2022, 04, 25',
  // '2022, 04, 26',
  // '2022, 04, 28',
  '2022, 04, 30',
  // '2022, 05, 01',
  // '2022, 05, 03',
  // '2022, 05, 04',
  // '2022, 05, 06',
  '2022, 05, 07',
  // '2022, 05, 09',
  // '2022, 05, 10',
  // '2022, 05, 12',
  '2022, 05, 15',
  // '2022, 05, 16',
  // '2022, 05, 18',
  // '2022, 05, 19',
  // '2022, 05, 21',
  // '2022, 05, 22',
  '2022, 05, 24',
  // '2022, 05, 25',
  // '2022, 05, 27',
  // '2022, 05, 28',
  // '2022, 05, 30',
  // '2022, 05, 31',
  '2022, 06, 02',
  // '2022, 06, 03',
  // '2022, 06, 05',
  // '2022, 06, 06',
  '2022, 06, 08',
  // '2022, 06, 09',
  // '2022, 06, 11',
  // '2022, 06, 12',
  // '2022, 06, 14',
  '2022, 06, 15',
  // '2022, 06, 17',
  '2022, 06, 23',
  // '2022, 06, 25',
  // '2022, 06, 26',
  // '2022, 06, 27',
  // '2022, 06, 28',
  '2022, 06, 29',
  // '2022, 06, 30',
  // '2022, 07, 02',
  // '2022, 07, 03',
  // '2022, 07, 04',
  // '2022, 07, 05',
  '2022, 07, 06',
  // '2022, 07, 07',
  // '2022, 07, 08',
  // '2022, 07, 09',
  // '2022, 07, 10',
  // '2022, 07, 11',
  // '2022, 07, 12',
  '2022, 07, 13',
  // '2022, 07, 14',
  // '2022, 07, 15',
  // '2022, 07, 17',
  // '2022, 07, 18',
  // '2022, 07, 19',
  '2022, 07, 20',
  // '2022, 07, 21',
  // '2022, 07, 22',
  // '2022, 07, 23',
  // '2022, 07, 24',
  // '2022, 07, 25',
  // '2022, 07, 26',
  '2022, 07, 27',
  // '2022, 07, 28',
  // '2022, 07, 29',
  // '2022, 07, 30',
  // '2022, 07, 31',
  // '2022, 08, 01',
  // '2022, 08, 02',
  '2022, 08, 03',
  // '2022, 08, 04',
  // '2022, 08, 05',
  // '2022, 08, 06',
  // '2022, 08, 07',
  // '2022, 08, 08',
  // '2022, 08, 09',
  '2022, 08, 10',
  // '2022, 08, 11',
  // '2022, 08, 12',
  // '2022, 08, 13',
  // '2022, 08, 14',
  // '2022, 08, 15',
  // '2022, 08, 16',
  '2022, 08, 17',
  // '2022, 08, 18',
  // '2022, 08, 19',
  // '2022, 08, 20',
  // '2022, 08, 21',
  // '2022, 08, 22',
  // '2022, 08, 23',
  '2022, 08, 24',
  // '2022, 08, 25',
  // '2022, 08, 26',
  // '2022, 08, 27',
  // '2022, 08, 28',
  // '2022, 08, 29',
  '2022, 08, 31',
  // '2022, 09, 01',
  // '2022, 09, 02',
  // '2022, 09, 03',
  // '2022, 09, 05',
  // '2022, 09, 06',
  '2022, 09, 07',
  // '2022, 09, 08',
  // '2022, 09, 09',
  // '2022, 09, 10',
  // '2022, 09, 11',
  // '2022, 09, 12',
  // '2022, 09, 13',
  '2022, 09, 14',
  // '2022, 09, 15',
  // '2022, 09, 16',
  // '2022, 09, 17',
  // '2022, 09, 18',
  // '2022, 09, 19',
  // '2022, 09, 20',
  '2022, 09, 21',
  // '2022, 09, 22',
  // '2022, 09, 24',
  // '2022, 09, 25',
  // '2022, 09, 26',
  // '2022, 09, 27',
  '2022, 09, 28',
  // '2022, 09, 29',
  // '2022, 09, 30',
  // '2022, 10, 01',
  // '2022, 10, 02',
  // '2022, 10, 03',
  // '2022, 10, 04',
  '2022, 10, 05',
  // '2022, 10, 06',
  // '2022, 10, 07',
  // '2022, 10, 08',
  // '2022, 10, 09',
  // '2022, 10, 10',
  // '2022, 10, 11',
  '2022, 10, 12',
  // '2022, 10, 13',
  // '2022, 10, 14',
  // '2022, 10, 15',
  // '2022, 10, 16',
  // '2022, 10, 17',
  // '2022, 10, 18',
  '2022, 10, 19',
  // '2022, 10, 20',
  // '2022, 10, 21',
  // '2022, 10, 22',
  // '2022, 10, 23',
  // '2022, 10, 24',
  // '2022, 10, 25',
  '2022, 10, 26',
  // '2022, 10, 27',
  // '2022, 10, 28',
  // '2022, 10, 29',
  // '2022, 10, 30',
  // '2022, 10, 31',
  // '2022, 11, 01',
  '2022, 11, 02',
  // '2022, 11, 03',
  // '2022, 11, 04',
  // '2022, 11, 05',
  // '2022, 11, 06',
  // '2022, 11, 07',
  // '2022, 11, 08',
  '2022, 11, 09',
  // '2022, 11, 10',
  // '2022, 11, 11',
  // '2022, 11, 12',
  // '2022, 11, 13',
  // '2022, 11, 14',
  // '2022, 11, 15',
  '2022, 11, 16',
  // '2022, 11, 17',
  // '2022, 11, 18',
  // '2022, 11, 19',
  // '2022, 11, 21',
  // '2022, 11, 22',
  '2022, 11, 23',
  // '2022, 11, 24',
  // '2022, 11, 25',
  // '2022, 11, 26',
  // '2022, 11, 27',
  // '2022, 11, 28',
  // '2022, 11, 29',
  '2022, 11, 30',
  // '2022, 12, 01',
  // '2022, 12, 02',
  // '2022, 12, 03',
  // '2022, 12, 04',
  // '2022, 12, 05',
  // '2022, 12, 06',
  '2022, 12, 07',
  // '2022, 12, 08',
  // '2022, 12, 09',
  // '2022, 12, 10',
  // '2022, 12, 11',
  // '2022, 12, 12',
  // '2022, 12, 13',
  '2022, 12, 14',
  // '2022, 12, 15',
  // '2022, 12, 16',
  // '2022, 12, 17',
  // '2022, 12, 18',
  // '2022, 12, 19',
  // '2022, 12, 20',
  '2022, 12, 21',
  // '2022, 12, 22',
  // '2022, 12, 23',
  // '2022, 12, 24',
  // '2022, 12, 25',
  // '2022, 12, 26',
  // '2022, 12, 27',
  '2022, 12, 28',
  // '2022, 12, 29',
  // '2022, 12, 30',
  // '2022, 12, 31',
  // '2023, 01, 01',
  // '2023, 01, 02',
  // '2023, 01, 03',
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
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + ""
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + ""
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();