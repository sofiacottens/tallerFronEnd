import { useSelector } from 'react-redux';

const Metricas = () => {
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  let totalIngresos = 0
  let totalGastos = 0
  let rubrosIngresos = [];

  rubros.forEach(r => {
    if (r.tipo === 'ingreso') {
      rubrosIngresos.push(r.id)
    }
  });

  const movIngresos = movs.filter(movimiento => rubrosIngresos.includes(movimiento.categoria));
  const movGastos = movs.filter(movimiento => !rubrosIngresos.includes(movimiento.categoria));

  movGastos.forEach(mG => {
    totalGastos = totalGastos + mG.total;

  })
  movIngresos.forEach(mI => {
    totalIngresos = totalIngresos + mI.total;

  })

  const diferencia = totalIngresos - totalGastos;

  const ret = [{dif: diferencia, gasto: totalGastos, ingreso: totalIngresos}]

  return ret;

}

export default Metricas;