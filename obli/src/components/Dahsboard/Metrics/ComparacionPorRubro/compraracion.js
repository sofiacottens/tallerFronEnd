import { useSelector } from 'react-redux';

const ComprarPorRubro = ({r}) => {
  const movs = useSelector(state => state.movimientosSlice.movimientos);
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  const filtro = movs.filter(movimiento => movimiento.categoria === r);
  const rub = rubros.filter(rub => rub.id === r);
  let msg = '';
  let calculo = 0;

  const ultimoMov = filtro.slice(-1);
  const penultimoMov = filtro.slice(-2);

  console.log(rub);
  console.log(ultimoMov);
  console.log(penultimoMov);


  if (ultimoMov.total > penultimoMov.total) {
    calculo = ultimoMov.total - penultimoMov.total;
    msg = `Para el rubro ${rub.nombre}, en la última compra has gastado $${calculo} pesos más que en la penúltima`;
  }
  if (ultimoMov.total < penultimoMov.total) {
    calculo = penultimoMov.total - ultimoMov.total;
    msg = `Para el rubro ${rub.nombre}, en la última compra has gastado $${calculo} pesos menos que en la penúltima`;

  }
  if (ultimoMov.total === penultimoMov.total) {
    msg = `Para el rubro ${rub.nombre}, en la última compra has gastado lo mismo que en la penúltima`;
  }

  return msg;

}

export {ComprarPorRubro};