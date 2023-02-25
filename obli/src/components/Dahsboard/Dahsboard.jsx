import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredMovimientoss, setMovimientos } from '../../app/slices/movimientosSlice'
//import { getTodos } from '../../services/Api'
import AgregarGasto from './Agregar/AgregarGasto'
//import Charts from './Charts'
import './Dashboard.css'
//import TodosFilter from './Filter'
import Header from './Header/Header'
//import Metrics from './TablaMovimientos'
import TablaMovimientos from './TablaMovimientos/TablaMovimientos'

const Dashboard = () => {
  const user = useSelector(state => state.user.loggedUser)
  const todos = useSelector(state => state.todosSlice.todos)
  const dispatch = useDispatch()

  /*useEffect(() => {
    getTodos(user.id, user.apiKey)
      .then(data => {
        dispatch(setMovimientos(data))
        dispatch(setFilteredMovimientoss(data))
      })
      .catch(e => console.error('Ha ocurrido un error'))
  }, [])*/

  /*return (
    <>
      <Header />
      <Metrics />
      <Charts />
      <div className='card'>
        <div className='card-body'>
          <h5 class='card-title'>Agregar un nuevo gasto</h5>
          <AgregarGasto />
        </div>
      </div>
      <div className='card'>
        <div className='card-body'>
          <TodosFilter />
          <br />
          {todos.length > 0 ? <TablaMovimientos /> : 'Loading...'}
        </div>
      </div>
    </>
    
  )*/
  return(
    <>
    <div></div>
    </>
  )

}
export default Dashboard