import './BtnSalir.css'
const ButtonLogout = ({ onLogout }) => {
    return (
      
        <button id="logout"
          onClick={onLogout}
          className='btn my-2 my-sm-3'

          
          type='submit'
        >
          Logout
        </button>
   
    )
  }
  
  export default ButtonLogout