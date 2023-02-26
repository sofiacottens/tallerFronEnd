import { useSelector } from 'react-redux'
import Rows from './Rows/Rows'
import './TablaMovimientos.css'

const TablaMovimientos = () => {
  const movs = useSelector(state => state.movimientosSlice.filteredMovimientos)
  console.log(movs)
  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Concepto</th>
            <th scope='col'>Categoria</th>
            <th scope='col'>Medio</th>
            <th scope='col'>Total</th>
            <th scope='col'>Fecha</th>
            <th scope='col'>#Usuario</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {movs.map(({ id, concepto, categoria, medio, total, fecha, idUsuario }) => (
            <Rows
              key={id}
              concepto={concepto}
              categoria={categoria}
              medio={medio}
              total={total}
              fecha={fecha}
              idUsuario={idUsuario}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default TablaMovimientos