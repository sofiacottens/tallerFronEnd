import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredMovimientoss, setMovimientos } from '../../app/slices/movimientosSlice'
import { getMovimientos } from '../../services/Api/Api'
import AgregarGasto from './Agregar/AgregarGasto'
import Charts from '../Dahsboard/Charts/Charts'
import './Dashboard.css'
import MovimientosFilter from './Filter/MovimientosFilter'
import Header from './Header/Header'
//import Metrics from './Metrics'
import TablaMovimientos from './TablaMovimientos/TablaMovimientos'
import '../App/App.css'
import sad from '../Dahsboard/sad.png'
import CalculateIngresosXrubro from './ComparacionPorRubro/compraracion'

const Dashboard = () => {
  const user = useSelector(state => state.user.loggedUser)
  const movs = useSelector(state => state.movimientosSlice.movimientos)
  const dispatch = useDispatch()
  //console.log(movs)

  useEffect(() => {
    getMovimientos(user.id, user.apiKey)
      .then(data => {
        dispatch(setMovimientos(data.movimientos))
        dispatch(setFilteredMovimientoss(data.movimientos))
      })
      .catch(e => console.error('Ha ocurrido un error: ' + e))
  }, [])
  

  return (
    <>
      <Header />
      <div className='card'>
        <div className='card-body'>
          <AgregarGasto></AgregarGasto>
        </div>
      </div>
      <div className='card'>
        <div className='card-body'>
          <MovimientosFilter />
          <br />
          {movs.length > 0 ? <TablaMovimientos /> : <><p>No se encontraron movimientos para el usuario   <img src={sad} height="27" width="40" alt=''/></p></>}
        </div>
        <div className='card'>
        <div className='card-body'>
          <Charts/>
        </div>
      </div>
      </div>
      <div className='card'>
        <div className='card-body'>
          <CalculateIngresosXrubro/>
        </div>
      </div>
    </>
  )
}

export default Dashboard