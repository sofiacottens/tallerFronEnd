import { useDispatch, useSelector } from 'react-redux'
import { deleteMovimientoById } from '../../../../app/slices/movimientosSlice'
import { deleteMovimiento } from '../../../../services/Api/Api'

const Rows = ({ movId, concepto, categoria, medio, total, fecha, idUsuario}) => {
  const user = useSelector(state => state.user.loggedUser)
  const dispatch = useDispatch()
  const onHandleDelete = () => {
    onDelete(movId, user.apiKey)
    window.location.reload()
  }

  const onDelete = (movId, auth) => {
    deleteMovimiento(movId, auth)
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
      <td>{concepto === undefined ? concepto : ' '}</td>
      <td>{categoria}</td>
      <td>{medio}</td>
      <td>{total}</td>
      <td>{fecha}</td>
      <td>{idUsuario}</td>
      <td>
        <button onClick={onHandleDelete} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  )
}
export default Rows
