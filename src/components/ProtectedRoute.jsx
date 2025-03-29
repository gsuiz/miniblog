import { useAuthValue } from '../context/AuthContext'
import { Navigate } from 'react-router'

function ProtectedRoute({ children }) {
  const { user } = useAuthValue()

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute
