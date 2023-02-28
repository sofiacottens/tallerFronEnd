import ReactApexChart from 'react-apexcharts'

const Bar = (dataChart) => {

  //console.log(dataChart)
  let nuevaArrData = [];
  let dataSerie = [];
  let dataLabels = [];

  if (dataChart !== undefined) {
    nuevaArrData = dataChart.dataChart;
  }

  //console.log(nuevaArrData);

  let labelAnio = '';

  for (let index = 0; index < nuevaArrData.length; index++) {
    const element = nuevaArrData[index];
    labelAnio = element.mes;
    const strAux = (element.mes + '/' + element.anio)
    dataSerie.push(element.monto);
    dataLabels.push(strAux);

  }

  dataSerie = dataSerie.reverse();
  dataLabels = dataLabels.reverse();

  const data = {
    series: [{
      name: 'Gasto mensual',
      data: dataSerie
    }],
    options: {
      annotations: {
        points: [{
          x: labelAnio,
          seriesIndex: 0,
          label: {
            borderColor: '#775DD0',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: '2023',
          }
        }]
      },
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
