import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogoutUser } from '../../../app/slices/userSlice'
import ButtonLogout from './BtnSalir/BtnSalir'
import logo from '../Header/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  const onLogout = () => {
    // Disparo la action asociada al logout del usuario
    dispatch(setLogoutUser())
    navigator('/login')
  }
  return (
    <header >
        <img src={logo} height="30" width="40" alt=''/>
        <ButtonLogout onLogout={onLogout} />
    </header>
  )
}

export default Header