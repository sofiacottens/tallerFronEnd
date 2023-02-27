import ReactApexChart from 'react-apexcharts'

const Bar = (chartData) => {

  const data = {
    series: [{
      name: 'Gasto mensual',
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
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
        categories: [],
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
