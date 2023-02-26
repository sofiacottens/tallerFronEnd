import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogoutUser } from '../../../app/slices/userSlice'
import ButtonLogout from './BtnSalir/BtnSalir'
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
    <header >

        <ButtonLogout onLogout={onLogout} />
    </header>
  )
}

export default Header