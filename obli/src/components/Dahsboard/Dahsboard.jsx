import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredTodos, setTodos } from '../../app/slices/todosSlice'
//import AddTodoForm from './AddForm/AddTodoForm'
//import Charts from './Charts'
//import './Dashboard.css'
//import TodosFilter from './Filter'
//import Header from './Header'
//import Metrics from './Metrics'
//import TodosTable from './TodosTable'

const Dashboard = () => {
  //const user = useSelector(state => state.user.loggedUser)
  //const todos = useSelector(state => state.todosSlice.todos)
  //const dispatch = useDispatch()

  //useEffect(() => {
    //getTodos(user.id, user.apiKey)
      //.then(data => {
        //dispatch(setTodos(data))
        //dispatch(setFilteredTodos(data))
      //})
      //.catch(e => console.error('Ha ocurrido un error'))
  //}, [])

  return (
    <>
    <div className='card'>
        <div className='card-body'>
          <h5 class='card-title'>Soy el Dashboard</h5>
        </div>
    </div>
    </>
  )
}

export default Dashboard