import ReactApexChart from 'react-apexcharts'

const Bar = ({ completed, incompleted }) => {
  const data = {
    series: [
      {
        data: [completed, incompleted]
      }
    ],
    options: {
      chart: {
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Completed', 'Incomplete']
      }
    }
  }
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
