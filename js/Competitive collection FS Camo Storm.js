var options = {
  series: [{
    name: "F/S Camo Storm",
    data: [42, 30, 27, 22, 21, 17, 19, 20, 19, 20, 22, 19.8, 23, 19.5, 29, 25, 27, 25, 23, 23, 23, 23, 28, 20, 25, 24, 23, 15.5, 20, 20, 24, 22, 20, 18.9, 21, 21, ]
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
  width: [3,],
  curve: 'straight',
  dashArray: [0, 0,]
},
title: {
  text: 'F/S Camo Storm',
  align: 'center'
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
  categories: [
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