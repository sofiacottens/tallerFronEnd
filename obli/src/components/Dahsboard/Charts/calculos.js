
import { useSelector } from 'react-redux';

const CalculateIngresosXrubro = () => {
  const ret = []
  const todosLosRubros = useSelector(state => state.rubrosSlice.rubros);
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const ingresos = movs.filter(movimiento => movimiento.total > 0);

  todosLosRubros.forEach(r => {
    let suma = 0;
    ingresos.forEach(i => {
      if (i.categoria === r.id) {
        suma += i.total;
      }
      ret.push({ rubro: r.nombre, monto: suma })
    });
  });

  return ret;

}

const CalculateGastosXrubro = () => {
  const ret = []
  const todosLosRubros = useSelector(state => state.rubrosSlice.rubros);
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const gastos = movs.filter(movimiento => movimiento.total < 0);

  todosLosRubros.forEach(r => {
    let suma = 0;
    gastos.forEach(i => {
      if (i.categoria === r.id) {
        suma += i.total;
      }
      ret.push({ rubro: r.nombre, monto: suma })
    });
  });

  return ret;
}

const CalculateEvolucionGastos = () => {
  let meses = [];
  let fecha = new Date();
  let mesActual = fecha.getMonth();
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);

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

  movs.forEach(element => {
    
  });
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
    ret.push({id: element, nombre: e});
  });

  return ret;
}

export { CalculateIngresosXrubro, CalculateGastosXrubro, CalculateEvolucionGastos };