import ReactApexChart from 'react-apexcharts'
const Pie = ({ completed, incompleted }) => {
  const data = {
    series: [completed, incompleted],
    options: {
      chart: {
        height: 350,
        type: 'pie'
      },
      labels: ['Completed', 'Incompleted'],
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
