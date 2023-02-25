import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredTodos, setTodos } from '../../app/slices/todosSlice'
import { getTodos } from '../../services/Api'
import AgregarGasto from './AgregarGasto/AgregarGasto'
import Charts from './Charts'
import './Dashboard.css'
import TodosFilter from './Filter'
import Header from './Header'
import Metrics from './Metrics'
import TablaMovimientos from './TablaMovimientos/TablaMovimientos'

const Dashboard = () => {
  const user = useSelector(state => state.user.loggedUser)
  const todos = useSelector(state => state.todosSlice.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    getTodos(user.id, user.apiKey)
      .then(data => {
        dispatch(setTodos(data))
        dispatch(setFilteredTodos(data))
      })
      .catch(e => console.error('Ha ocurrido un error'))
  }, [])

  return (
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
  )
}
export default Dashboard