import Bar from './Bar'
import Pie from './Pie'
import { CalculateIngresosXrubro, CalculateGastosXrubro, CalculateEvolucionGastos } from '../Charts/calculos'

const Charts = () => {

  const _calculateIngresosXrubro = () => {
    return CalculateIngresosXrubro();
  }

  const _calculateGastosXrubro = () => {
    return CalculateGastosXrubro();
  }

  const _calculateEvolucionGastos = () => {
    return CalculateEvolucionGastos();
  }

  return (
    <div className='container metrics'>
      <h5>Graficas</h5>
      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <div className='card-body'>
              <Pie dataChart={_calculateIngresosXrubro()}/>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <div className='card-body'>
              <Pie dataChart={_calculateGastosXrubro()}/>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='card'>
            <div className='card-body'>
              <Bar dataChart={_calculateEvolucionGastos()}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
