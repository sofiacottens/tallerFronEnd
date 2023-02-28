import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

const ChangeRubro = (rubro) => {
  const rubros = useSelector(state => state.rubrosSlice.rubros);
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos);
  const filtro = movs.filter(movimiento => movimiento.categoria === rubro);
  const rub = rubros.filter(rub => rub.id === rubro);
  let msg = '';
  let calculo = 0;

  const ultimoMov = filtro[filtro.length - 1]
  const penultimoMov = filtro[filtro.length - 2]

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

export { ChangeRubro }