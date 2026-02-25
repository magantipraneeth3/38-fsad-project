import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Header.css'

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🎓 EduWebinar
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          {isAuthenticated && (
            <>
              <Link to="/webinars" className="nav-link">Browse Webinars</Link>
              <Link to="/my-registrations" className="nav-link">My Registrations</Link>
              {user?.role === 'admin' && (
                <Link to="/admin" className="nav-link admin-link">Admin Panel</Link>
              )}
            </>
          )}
        </nav>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <>
              <span className="user-name">{user?.name}</span>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
