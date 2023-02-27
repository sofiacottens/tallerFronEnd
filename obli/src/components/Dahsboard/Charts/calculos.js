
const calculoPorRubro = (movimientos, rubros) => {
    
  let nombreRubro = [];
  let montoPorRubro = [];
  
  if(movimientos && rubros){
    for(const i = 0; i< rubros.length(); i++){
      const suma = 0;
      const elRubro = rubros[i];
      nombreRubro.push(elRubro.nombre);
      for(const j = 0; j<movimientos.length(); j++){
        const elmov = movimientos[i];
        if(elmov.rubro == elRubro.id){
          suma++;
        }
        montoPorRubro.push(suma);
        console.log(`la suma ${montoPorRubro}`)
      }
    }
  } 
    const datos = {
      series: [{
        data: montoPorRubro
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: nombreRubro,
        }
      },
  }

  return datos;


  }


  export default {calculoPorRubro}