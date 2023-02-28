import ReactApexChart from 'react-apexcharts'

const Pie = (dataChart) => {

  let nuevaArrData = [];
  let dataSerie = [];
  let dataLabels = [];

  if(dataChart !== undefined){
    nuevaArrData = dataChart.dataChart;
  }

  nuevaArrData.forEach(element => {
    dataSerie.push(element.monto);
    dataLabels.push(element.idR);
  });

  dataSerie = [...new Set(dataSerie)];
  dataLabels = [...new Set(dataLabels)];

  const data = {
    series: dataSerie,
    options: {
      chart: {
        height: 350,
        type: 'polarArea'
      },
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#CD5888',
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      },
      labels: dataLabels,
      legend: {
        position: 'bottom'
      }
    }
  }
  return (
    <div id='chart'>
      <ReactApexChart options={data.options} series={data.series} type='pie' />
    </div>
  )
}

export default Pie
