const ButtonLogout = ({ onLogout }) => {
    return (
      <form className='form-inline my-2 my-lg-0'>
        <button
          onClick={onLogout}
          className='btn btn-outline-success my-2 my-sm-0'
          type='submit'
        >
          Logout
        </button>
      </form>
    )
  }
  
  export default ButtonLogout