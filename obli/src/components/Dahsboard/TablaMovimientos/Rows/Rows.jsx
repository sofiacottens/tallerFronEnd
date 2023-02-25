import { useDispatch } from 'react-redux'
import {
  deleteMovimientoById
} from '../../../../app/slices/movimientosSlice'
import { deleteMovimiento } from '../../../../services/Api/Api'

const Rows = ({ movId }) => {
  const dispatch = useDispatch()
  const onHandleDelete = () => {
    onDelete(movId)
  }

  const onDelete = movId => {
    deleteMovimiento(movId)
      .then(res => {
        if (res.status === 200) {
          dispatch(deleteMovimientoById(movId))
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <tr>
      <td>{movId}</td>
      <td>
        <button onClick={onHandleDelete} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default Rows
