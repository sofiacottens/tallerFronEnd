import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredMovimientoss, setMovimientos } from '../../app/slices/movimientosSlice'
import { getMovimientos } from '../../services/Api/Api'
import AgregarGasto from './AgregarGasto/AgregarGasto'
//import Charts from './Charts'
import './Dashboard.css'
import MovimientosFilter from './Filter/MovimientosFilter'
import Header from './Header/Header'
//import Metrics from './Metrics'
import TablaMovimientos from './TablaMovimientos/TablaMovimientos'

const Dashboard = () => {
  const user = useSelector(state => state.user.loggedUser)
  const movs = useSelector(state => state.movimientosSlice.movimientos)
  const dispatch = useDispatch()
  console.log(movs)

  useEffect(() => {
    getMovimientos(user.id, user.apiKey)
      .then(data => {
        dispatch(setMovimientos(data))
        dispatch(setFilteredMovimientoss(data))
      })
      .catch(e => console.error('Ha ocurrido un error'))
  }, [])

  return (
    <>
      <Header />
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Agregar un nuevo gasto</h5>
          <AgregarGasto />
        </div>
      </div>
      <div className='card'>
        <div className='card-body'>
          <MovimientosFilter />
          <br />
          {movs.length > 0 ? <TablaMovimientos /> : 'Loading...'}
        </div>
      </div>
    </>
  )
}
export default Dashboard