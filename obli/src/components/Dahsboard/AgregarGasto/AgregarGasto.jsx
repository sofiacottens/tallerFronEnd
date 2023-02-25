import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { addTodo } from '../../../app/slices/todosSlice'
//import { createTodo } from '../../../services/todos'

const AgregarGasto = () => {
  <h1>Soy el btn de agregar gastos</h1>
/*   const user = useSelector(state => state.user.loggedUser)
  const [btnDisabled, setDisable] = useState(true)
  const inputRef = useRef()
  const dispatch = useDispatch()

  const validateInput = () => {
    if (inputRef.current.value !== '') {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const onAddClick = e => {
    e.preventDefault()
    const title = inputRef.current.value

    setDisable(true)

    if (title !== '') {
      onAddTodo({ title: title, completed: false, userId: user.id })
    } else {
      alert('Por favor complete los campos')
    }
    setDisable(false)
  }

  const onAddTodo = async todo => {
    try {
      const res = await createTodo(todo)
      dispatch(addTodo({ ...todo, id: res.data.id }))
    } catch (e) {}
  }
  return (
    <form className='row'>
      <div className='col'>
        <input
          type={'text'}
          className='form-control'
          id='todoInput'
          placeholder='Title...'
          ref={inputRef}
          onChange={validateInput}
        />
      </div>
      <div className='col-auto'>
        <button
          onClick={onAddClick}
          disabled={btnDisabled}
          className='btn btn-success'
        >
          + Create
        </button>
      </div>
    </form>
  ) */
}


export default AgregarGasto