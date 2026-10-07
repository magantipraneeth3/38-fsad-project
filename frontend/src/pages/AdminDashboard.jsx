import React, { useState } from 'react'
import { useRequireAuth } from '../hooks/useRequireAuth'
import './AdminDashboard.css'
import AdminWebinars from '../pages/AdminWebinars'
import AdminRegistrations from '../pages/AdminRegistrations'

const AdminDashboard = () => {
  useRequireAuth('admin')
  const [activeTab, setActiveTab] = useState('webinars')

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        
        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === 'webinars' ? 'active' : ''}`}
            onClick={() => setActiveTab('webinars')}
          >
            📺 Manage Webinars
          </button>
          <button
            className={`tab-btn ${activeTab === 'registrations' ? 'active' : ''}`}
            onClick={() => setActiveTab('registrations')}
          >
            👥 View Registrations
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'webinars' && <AdminWebinars />}
          {activeTab === 'registrations' && <AdminRegistrations />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
