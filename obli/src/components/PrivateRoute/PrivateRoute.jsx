import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
  const user = useSelector(state => state.user.loggedUser)
  if (!user) {
    return <Navigate to='/login' replace={true} />
  }
  return children
}

export default PrivateRoute
