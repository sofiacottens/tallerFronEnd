import Bar from './Bar/Bar'
import Pie from './Pie'
import { CalcularMovsXRubro, CalculateEvolucionGastos } from '../Charts/calculos'

const Charts = () => {

  const _calculateIngresosXrubro = () => {
    return CalcularMovsXRubro('I');
  }

  const _calculateGastosXrubro = () => {
    return CalcularMovsXRubro('G');
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
