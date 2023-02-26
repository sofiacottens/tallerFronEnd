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
  //if (user) {
    //return <Navigate to='/dashboard' replace={true} />
  //}

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
    
    <>  
            <h1 className="container col-3 mt-4 mb-4 mx-auto text-center">Login</h1>
            <form className="container col-5">
                <div className="form-outline mb-4">
                    <label className="form-label my-2 my-sm-3" htmlFor="usuarioLogin">Usuario</label>
            <input
              className='form-control'
              type='text'
              placeholder='User name'
              ref={inputUsername}
              onChange={validateForm}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="passwordLogin">Password</label>
            <input
              className='form-control'
              type='password'
              placeholder='Password'
              ref={inputPass}
              onChange={validateForm}
            />
          </div>
          <div className="form-outline d-grid">
            <button
              className="btn" type="button" 
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

        <div className="form-outline d-grid">
          <nav class="nav" >
              <a className=" my-2 my-sm-3"  href="/registro">Registrarse</a>
           </nav>
            
          </div>
       
        </form>

</>
  )
}

export default LoginForm