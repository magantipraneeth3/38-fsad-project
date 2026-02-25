import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const useRequireAuth = (requiredRole = null) => {
  const { user, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    } else if (requiredRole && user?.role !== requiredRole) {
      navigate('/')
    }
  }, [isAuthenticated, user, requiredRole, navigate])

  return isAuthenticated && (!requiredRole || user?.role === requiredRole)
}
