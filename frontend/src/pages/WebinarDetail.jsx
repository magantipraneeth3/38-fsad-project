import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { webinarService, resourceService } from '../services/api'
import { useAuth } from '../context/AuthContext'
import './WebinarDetail.css'

const WebinarDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [webinar, setWebinar] = useState(null)
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    fetchWebinarDetails()
  }, [id])

  const fetchWebinarDetails = async () => {
    try {
      setLoading(true)
      const webinarRes = await webinarService.getById(id)
      setWebinar(webinarRes.data)
      
      setIsRegistered(
        webinarRes.data.registrations?.includes(user?._id)
      )

      try {
        const resourcesRes = await resourceService.getResources(id)
        setResources(resourcesRes.data || [])
      } catch (err) {
        console.error('Error loading resources:', err)
      }
    } catch (err) {
      setError('Failed to load webinar details')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async () => {
    try {
      await webinarService.register(id)
      setIsRegistered(true)
      fetchWebinarDetails()
    } catch (err) {
      setError('Failed to register for this webinar')
    }
  }

  const handleUnregister = async () => {
    try {
      await webinarService.unregister(id)
      setIsRegistered(false)
      fetchWebinarDetails()
    } catch (err) {
      setError('Failed to unregister from this webinar')
    }
  }

  if (loading) return <div className="loading"><div className="spinner"></div></div>
  if (!webinar) return <div className="error">Webinar not found</div>

  return (
    <div className="webinar-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      
      <div className="webinar-header-detail">
        <h1>{webinar.title}</h1>
        <span className="status-badge">{webinar.status}</span>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      <div className="detail-grid">
        <div className="main-content">
          <div className="section">
            <h2>About This Webinar</h2>
            <p>{webinar.description}</p>
          </div>

          <div className="section">
            <h2>Details</h2>
            <div className="details-list">
              <div className="detail-item">
                <span className="label">Instructor:</span>
                <span className="value">{webinar.instructor}</span>
              </div>
              <div className="detail-item">
                <span className="label">Date:</span>
                <span className="value">{new Date(webinar.scheduledDate).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">Time:</span>
                <span className="value">{new Date(webinar.scheduledDate).toLocaleTimeString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">{webinar.duration} minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Category:</span>
                <span className="value">{webinar.category}</span>
              </div>
              <div className="detail-item">
                <span className="label">Registered Participants:</span>
                <span className="value">{webinar.registrations?.length || 0}</span>
              </div>
            </div>
          </div>

          {webinar.status === 'live' && (
            <div className="section streaming">
              <h2>Live Stream</h2>
              <div className="stream-player">
                <div className="placeholder">
                  🎥 Live streaming will be available here
                </div>
              </div>
            </div>
          )}

          {webinar.status === 'completed' && webinar.recordingUrl && (
            <div className="section recording">
              <h2>Recording</h2>
              <div className="stream-player">
                <video controls width="100%">
                  <source src={webinar.recordingUrl} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>
            </div>
          )}

          {resources.length > 0 && (
            <div className="section">
              <h2>Resources</h2>
              <div className="resources-list">
                {resources.map(resource => (
                  <div key={resource._id} className="resource-item">
                    <span className="resource-icon">📎</span>
                    <div className="resource-info">
                      <h4>{resource.title}</h4>
                      <p>{resource.description}</p>
                    </div>
                    <a
                      href={resource.fileUrl}
                      download
                      className="btn btn-secondary btn-small"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar">
          <div className="registration-card">
            <h3>Registration</h3>
            {isRegistered ? (
              <>
                <p className="success">✓ You are registered for this webinar</p>
                <button onClick={handleUnregister} className="btn btn-danger">
                  Unregister
                </button>
              </>
            ) : (
              <button onClick={handleRegister} className="btn btn-primary btn-block">
                Register Now
              </button>
            )}
          </div>

          <div className="info-card">
            <h3>Instructor</h3>
            <p className="instructor-name">{webinar.instructor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebinarDetail
