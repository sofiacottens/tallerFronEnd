import ReactApexChart from 'react-apexcharts'

const Bar = (dataChart) => {

  console.log(dataChart)
  let nuevaArrData = [];
  let dataSerie = [];
  let dataLabels = [];

  if (dataChart !== undefined) {
    nuevaArrData = dataChart.dataChart;
  }

  nuevaArrData.forEach(element => {
    dataLabels.push(element.mes);
    dataSerie.push(element.monto);
  });

  console.log(dataSerie)
  console.log(dataLabels)

  dataSerie = [...new Set(dataSerie)];
  dataLabels = [...new Set(dataLabels)];

  const data = {
    series: [{
      name: 'Gasto mensual',
      data: dataSerie
    }],
    options: {
      theme: {
        monochrome: {
          enabled: true,
          color: '#CD5888',
          shadeTo: 'light',
          shadeIntensity: 0.6
        }
      },

      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },

      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: dataLabels,
        tickPlacement: 'on',
      },
      yaxis: {
        title: {
          text: 'Gasto mensual',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    },


  };

  return (
    <div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type='bar'
        height={210}
      />
    </div>
  )
}

export default Bar
