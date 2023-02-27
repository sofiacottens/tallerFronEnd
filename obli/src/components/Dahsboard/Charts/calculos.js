
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

const CalculateEvolucionGastos = () =>{
  
}

export { CalculateIngresosXrubro, CalculateGastosXrubro, CalculateEvolucionGastos};