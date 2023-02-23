import { useRef, useState } from 'react'
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { setLoginUser } from '../../app/slices/userSlice.js';
import { login } from '../../services/Api/Api';

const LoginForm = () => {
  const [error, setError] = useState(false)
  const [btnDisabled, setBtnDisable] = useState(true)

  const inputUsername = useRef()
  const inputPass = useRef()
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const user = useSelector(state => state.user.loggedUser)
  if (user) {
    return <Navigate to='/dashboard' replace={true} />
  }

  const showError = () => {
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 2000)
  }

  const validateForm = () => {
    const userName = inputUsername.current.value
    const pass = inputPass.current.value
    if (userName !== '' && pass !== '') {
      setBtnDisable(false)
    } else {
      setBtnDisable(true)
    }
  }

  const onSignInClick = () => {
    const userName = inputUsername.current.value
    const pass = inputPass.current.value

    if (userName !== '' && pass !== '') {
      setBtnDisable(true)
      login(userName, pass)
        .then(data => {
          // Disparo la action asociada al login del usuario desde redux
          dispatch(
            setLoginUser({
              id: data.id,
              apiKey: data.apiKey
            })
          )
          navigator('/dashboard')
        })
        .catch(e => {
          showError()
        })
    } else {
      showError()
    }
  }

  return (
    
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Iniciar Sesion</h5>
      <form>
          <div class='form-group'>
            <label>Username:</label>
            <br />
            <input
              className='form-control'
              type='text'
              placeholder='User name'
              ref={inputUsername}
              onChange={validateForm}
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <br />
            <input
              className='form-control'
              type='password'
              placeholder='Password'
              ref={inputPass}
              onChange={validateForm}
            />
          </div>
          <div className='form-group'>
            <button
              className='btn btn-primary'
              onClick={onSignInClick}
              disabled={btnDisabled}
            >
              Sign in
            </button>
          </div>

          {error ? (
            <div className='alert alert-danger' role='alert'>
              Ha ocurrido un error!
            </div>
          ) : (
            ''
          )}
       
        </form>
    

    </div>
</div>
  )
}

export default LoginForm