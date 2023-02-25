import { useDispatch } from 'react-redux'
import {
  deleteMovimientoById
} from '../../../../app/slices/movimientosSlice'
import { deleteMovimiento } from '../../../../services/Api'

const Rows = ({ todoId, todoTitle, completed }) => {
  const dispatch = useDispatch()
  const onHandleDelete = () => {
    onDelete(todoId)
  }

  const onDelete = todoId => {
    deleteTodo(todoId)
      .then(res => {
        if (res.status === 200) {
          dispatch(deleteTodoById(todoId))
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  const onHandleComplete = async () => {
    try {
      await completeTodo(todoId)
      dispatch(completeTodoById(todoId))
    } catch (error) {}
  }

  return (
    <tr>
      <td>{todoId}</td>
      <td>{todoTitle}</td>
      <td>
        <button onClick={onHandleDelete} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default Rows
