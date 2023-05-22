var apexAreaChartOptions = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    colors: [app.color.teal, app.color.inverse],
    series: [
      { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] }, 
      { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] }
    ],
    xaxis: {
      type: 'datetime',
      categories: ['2019-09-19T00:00:00', '2019-09-19T01:30:00', '2019-09-19T02:30:00', '2019-09-19T03:30:00', '2019-09-19T04:30:00', '2019-09-19T05:30:00', '2019-09-19T06:30:00'],
      axisBorder: {
        show: true,
        color: app.color.inverse,
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: -1
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: app.color.inverse,
        height: 6,
        offsetX: 0,
        offsetY: 0
      }             
    },
    tooltip: { x: { format: 'dd/MM/yy HH:mm' } }
  };
  var apexAreaChart = new ApexCharts(
    document.querySelector('#apexAreaChart'),
    apexAreaChartOptions
  );
  apexAreaChart.render();