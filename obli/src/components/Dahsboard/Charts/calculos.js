
import { useSelector } from 'react-redux';

const CalcularMovsXRubro = (tipo) => {
  let ret = [];
  const movs = useSelector(state => state.movimientosSlice.movimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  let rubrosIngresos = [];
  let rubrosGastos = [];

  rubros.forEach(r => {
    if(r.tipo === 'ingreso'){
      rubrosIngresos.push(r.id);
    }else{
      rubrosGastos.push(r.id);
    }
  });

  const ingresos = movs.filter(movimiento => rubrosIngresos.includes(movimiento.categoria));
  const gastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

  if(tipo === 'G'){
    rubrosGastos.forEach(rubro => {
      let suma = 0;
      gastos.forEach(gasto => {
        if(gasto.categoria === rubro){
          suma = suma+gasto.total;
        }
      });
      ret.push({idR: rubro, monto: suma})
    });
  } else {
    rubrosIngresos.forEach(rubro => {
      let suma = 0;
      ingresos.forEach(i => {
        if(i.categoria === rubro){
          suma = suma+i.total;
        }
      });
      ret.push({idR: rubro, monto: suma})
    });
  }

  return ret;
}


const CalculateEvolucionGastos = () => {
  let meses = [];
  let ret = [];
  let fecha = new Date();
  let mesActual = fecha.getMonth();
  let anioActual = fecha.getFullYear();
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);

  let rubrosIngresos = [];
  rubros.forEach(r => {
    if(r.tipo === 'ingreso'){
      rubrosIngresos.push(r.id)
    }
  });

  const gastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

  meses.push({ mes: mesActual, anio: anioActual });
  for (let init = 1; init < 24; init++) {
    if (mesActual < 11) {
      mesActual++;
    } else {
      mesActual = 0;
    }
    if (mesActual === 11) {
      anioActual--;
    }

    meses.push({ mes: mesActual, anio: anioActual });
  }

  let mesesNombre = cambiarMeses(meses);
  console.log(mesesNombre)

  mesesNombre.forEach(m => {
    let suma = 0;
    gastos.forEach(g => {
      let fechaa = new Date(g.fecha);
      let mesMov = fechaa.getMonth();
      let anioMov = fechaa.getFullYear();
      console.log(mesMov)
      console.log(m.idMes)
      if (mesMov === m.idMes && anioMov === m.anio) {
        suma = suma+g.total;
      }
    });
    ret.push({mes: m.mes, monto: suma})
  });

  return ret;
}

const cambiarMeses = (meses) => {
  let ret = [];
  meses.forEach(element => {
    let e = '';
    if (element.mes === 0) {
      e = 'Enero';
    }
    else if (element.mes === 1) {
      e = 'Febrero';
    }
    else if (element.mes === 2) {
      e = 'Marzo';
    }
    else if (element.mes === 3) {
      e = 'Abril';
    }
    else if (element.mes === 4) {
      e = 'Mayo';
    }
    else if (element.mes === 5) {
      e = 'Junio';
    }
    else if (element.mes === 6) {
      e = 'Julio';
    }
    else if (element.mes === 7) {
      e = 'Agosto';
    }
    else if (element.mes === 8) {
      e = 'Septiembre';
    }
    else if (element.mes === 9) {
      e = 'Octubre';
    }
    else if (element.mes === 10) {
      e = 'Noviembre';
    }
    else if (element.mes === 11) {
      e = 'Diciembre';
    }
    ret.push({ idMes: element.mes, anio: element.anio, mes: e });
  });

  return ret;
}

export { CalcularMovsXRubro, CalculateEvolucionGastos };