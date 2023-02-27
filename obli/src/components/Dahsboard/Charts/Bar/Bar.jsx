import ReactApexChart from 'react-apexcharts'

const Bar = (chartData) => {
  let meses = [];
  let fecha = new Date();
  let mesActual = fecha.getMonth();

  meses.push(mesActual);
  for (let init = 1; init < 24; init++) {
    if (mesActual < 11) {
      mesActual++;
    } else {
      mesActual = 0;
    }
    meses.push(mesActual);
  }

  let mesesNombre = cambiarMeses(meses);

  console.log(meses)
  console.log(mesesNombre)

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
        categories: mesesNombre,
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

const cambiarMeses = (meses) => {
  let ret = [];
  meses.forEach(element => {
    let e = '';
    if (element === 0) {
      e = 'Enero';
    }
    else if (element === 1) {
      e = 'Febrero';
    }
    else if (element === 2) {
      e = 'Marzo';
    }
    else if (element === 3) {
      e = 'Abril';
    }
    else if (element === 4) {
      e = 'Mayo';
    }
    else if (element === 5) {
      e = 'Junio';
    }
    else if (element === 6) {
      e = 'Julio';
    }
    else if (element === 7) {
      e = 'Agosto';
    }
    else if (element === 8) {
      e = 'Septiembre';
    }
    else if (element === 9) {
      e = 'Octubre';
    }
    else if (element === 10) {
      e = 'Noviembre';
    }
    else if (element === 11) {
      e = 'Diciembre';
    }
    ret.push(e);
  });

  return ret;
}

export default Bar
