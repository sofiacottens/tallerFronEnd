import { useSelector } from 'react-redux'
import Rows from './Rows/Rows'
import './TablaMovimientos.css'

const TablaMovimientos = () => {
  const todos = useSelector(state => state.todosSlice.filteredTodos)
  return (
    <>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Completed</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, completed }) => (
            <Rows
              todoId={id}
              todoTitle={title}
              completed={completed}
              key={id}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default TablaMovimientos