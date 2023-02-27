import { useSelector } from 'react-redux'
import Bar from './Bar'
import Pie from './Pie'
import calculoPorRubro from './calculos'

const Charts = () => {
  const movs = useSelector(state => state.movimientosSlice.movimientos)

  const _calculateCompleted = () => {
    return movs.filter(todo => todo.completed).length
  }

  const _calculateIncomplete = () => {
    return movs.filter(todo => !todo.completed).length
  }
  return (
    <div className='container metrics'>
      <h5>METRICS</h5>
      <div className='row'>
        <div className='col-8'>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-body'>
              <Pie
                completed={_calculateCompleted()}
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
