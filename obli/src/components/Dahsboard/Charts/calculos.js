
import { useSelector } from 'react-redux';

const CalcularMovsXRubro = (tipo) => {
  let ret = [];
  const movs = useSelector(state => state.movimientosSlice.movimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  let rubrosIngresos = [];
  let rubrosGastos = [];

  rubros.forEach(r => {
    if (r.tipo === 'ingreso') {
      rubrosIngresos.push(r.id);
    } else {
      rubrosGastos.push(r.id);
    }
  });

  const ingresos = movs.filter(movimiento => rubrosIngresos.includes(movimiento.categoria));
  const gastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

  if (tipo === 'G') {
    rubrosGastos.forEach(rubro => {
      let suma = 0;
      gastos.forEach(gasto => {
        if (gasto.categoria === rubro) {
          suma = suma + gasto.total;
        }
      });
      ret.push({ idR: rubro, monto: suma })
    });
  } else {
    rubrosIngresos.forEach(rubro => {
      let suma = 0;
      ingresos.forEach(i => {
        if (i.categoria === rubro) {
          suma = suma + i.total;
        }
      });
      ret.push({ idR: rubro, monto: suma })
    });
  }

  let retornoNombres = [];
  
  ret.forEach(element => {
    rubros.forEach(r => {
      if(r.id === element.idR){
        retornoNombres.push({idR: r.nombre, monto: element.monto});
      }
    });

  });

  return retornoNombres;
}


const CalculateEvolucionGastos = () => {
  let meses = [];
  let ret = [];
  const fecha = new Date();
  let mesActual = fecha.getMonth();
  let anioActual = fecha.getFullYear();
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  let gastosFil = [];
  let rubrosIngresos = [];

  rubros.forEach(r => {
    if (r.tipo === 'ingreso') {
      rubrosIngresos.push(r.id)
    }
  });

  const gastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

  meses.push({ mes: mesActual, anio: anioActual });
  for (let init = 1; init < 24; init++) {
    if (Math.abs(mesActual) < 12 && mesActual > 0) {
      mesActual--;
    } else {
      mesActual = 11; 
    }
    if (Math.abs(mesActual) === 11) {
      anioActual--;
    }

    meses.push({ mes: Math.abs(mesActual), anio: anioActual });
  }

  const mesesNombre = cambiarMeses(meses);
  //console.log(mesesNombre)
  //console.log(gastos);

  gastos.forEach(g => {
    let f = g.fecha;
    let ff = f.slice(0, 7);
    let fff = ff.split('-');
    let fNumeros = fff.map(numero => parseInt(numero));
    const mesMov = fNumeros[1];
    const anioMov = fNumeros[0];
    gastosFil.push({ messs: mesMov, anio: anioMov, monto: g.total });
  });

  //console.log(gastosFil);

  for (let index = 0; index < mesesNombre.length; index++) {
    const m = mesesNombre[index];
    //console.log(m);
    let suma = 0;
    for (let i = 0; i < gastosFil.length; i++) {
      const gasto = gastosFil[i];
      if (gasto.messs === m.idMes & gasto.anio === m.anio) {
        suma = suma + gasto.monto;
      }
    }
    ret.push({ mes: m.mes, monto: suma, anio: m.anio });
  }

  //console.log(ret)
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

    let mesReal = element.mes + 1;
    ret.push({ idMes: mesReal, anio: element.anio, mes: e });

  });

  return ret;
}


export { CalcularMovsXRubro, CalculateEvolucionGastos };