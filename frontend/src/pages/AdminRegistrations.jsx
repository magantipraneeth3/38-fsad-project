import React, { useState, useEffect } from 'react'
import { webinarService } from '../services/api'
import './AdminRegistrations.css'

const AdminRegistrations = () => {
  const [webinars, setWebinars] = useState([])
  const [selectedWebinar, setSelectedWebinar] = useState('')
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchWebinars()
  }, [])

  const fetchWebinars = async () => {
    try {
      const response = await webinarService.getAll()
      setWebinars(response.data)
    } catch (err) {
      console.error('Failed to load webinars:', err)
    }
  }

  const handleWebinarSelect = async (e) => {
    const webinarId = e.target.value
    setSelectedWebinar(webinarId)

    if (webinarId) {
      try {
        setLoading(true)
        const response = await webinarService.getById(webinarId)
        const registeredUsers = response.data.registrations || []
        setRegistrations(registeredUsers)
      } catch (err) {
        console.error('Failed to load registrations:', err)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="admin-registrations">
      <div className="selection-card">
        <label htmlFor="webinar-select">Select a Webinar:</label>
        <select
          id="webinar-select"
          value={selectedWebinar}
          onChange={handleWebinarSelect}
        >
          <option value="">Choose a webinar...</option>
          {webinars.map(webinar => (
            <option key={webinar._id} value={webinar._id}>
              {webinar.title} - {new Date(webinar.scheduledDate).toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>

      {selectedWebinar && (
        <div className="registrations-card">
          <h2>Registrations ({registrations.length})</h2>
          {loading ? (
            <div className="loading"><div className="spinner"></div></div>
          ) : registrations.length > 0 ? (
            <table className="registrations-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg, idx) => (
                  <tr key={idx}>
                    <td>{reg.name || 'N/A'}</td>
                    <td>{reg.email || 'N/A'}</td>
                    <td>{new Date(reg.registeredAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">No registrations for this webinar yet.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default AdminRegistrations
