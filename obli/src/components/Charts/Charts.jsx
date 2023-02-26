import { useSelector } from 'react-redux'
import Bar from './Bar'
import Pie from './Pie'
import calculoPorRubro from './calculos'

const Charts = () => {
  const movimientos = useSelector(state => state.movimientosSlice.movimientos)
  const rubros = useSelector(state => state.rubrosSlice.rubros)

  

  const _calculateIncomplete = () => {
    //return movimientos.filter(todo => !todo.completed).length
  }
  return (
    <div className='container metrics'>
      <h5>METRICS</h5>
      <div className='row'>
        <div className='col-8'>
          <div className='card'>
            <div className='card-body'>
              <Bar
                data={calculoPorRubro(movimientos, rubros)}
               title="Rubros"
              />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <Pie
                completed={calculoPorRubro()}
                incompleted={_calculateIncomplete()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
