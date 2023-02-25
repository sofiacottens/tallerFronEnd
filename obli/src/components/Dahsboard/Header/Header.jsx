import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogoutUser } from '../../../app/slices/userSlice'
import ButtonLogout from './BtnSalir/BtnSalir'
import './Header.css'
import logo from './logo.svg'

const Header = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const onLogout = () => {
    // Disparo la action asociada al logout del usuario
    dispatch(setLogoutUser())
    navigator('/login')
  }
  return (
    <header className='App-header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='#'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
            />
            React to-do app
          </a>
        </div>
        <ButtonLogout onLogout={onLogout} />
      </nav>
    </header>
  )
}

export default Header