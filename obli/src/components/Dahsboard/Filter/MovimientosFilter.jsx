import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredMovimientoss } from '../../../app/slices/movimientosSlice'

const MovimientosFilter = () => {
  const selectRef = useRef()
  const dispatch = useDispatch()
  const movs = useSelector(state => state.movimientosSlice.todos)

  const onSelectChange = () => {
    const filter = Number(selectRef.current.value)
    if (filter === 0) {
      // Ingresos
      const ingresos = movs.filter(movimiento => movimiento.value > 0)
      dispatch(setFilteredMovimientoss(ingresos))
    } else if (filter === 1) {
      // Gastos
      const gastos = movs.filter(movimiento => movimiento.value < 0)
      dispatch(setFilteredMovimientoss(gastos))
    } else {
      dispatch(setFilteredMovimientoss(movs))
    }
  }

  return (
    <>
      <div className='input-group'>
        <select
          className='form-control'
          onChange={onSelectChange}
          ref={selectRef}
        >
          <option value={0}>Ingresos</option>
          <option value={1}>Gastos</option>
          <option defaultValue={2}>
            All
          </option>
        </select>
      </div>
    </>
  )
}

export default MovimientosFilter