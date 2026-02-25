import React, { useState, useEffect } from 'react'
import { webinarService } from '../services/api'
import './WebinarList.css'

const WebinarList = () => {
  const [webinars, setWebinars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    status: 'all'
  })

  useEffect(() => {
    fetchWebinars()
  }, [filters])

  const fetchWebinars = async () => {
    try {
      setLoading(true)
      const response = await webinarService.getAll(filters)
      setWebinars(response.data)
      setError('')
    } catch (err) {
      setError('Failed to load webinars')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  if (loading) return <div className="loading"><div className="spinner"></div></div>

  return (
    <div className="webinar-list-container">
      <div className="container">
        <h1>Available Webinars & Workshops</h1>
        
        <div className="filters">
          <input
            type="text"
            name="search"
            placeholder="Search webinars..."
            value={filters.search}
            onChange={handleFilterChange}
            className="search-input"
          />
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="other">Other</option>
          </select>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">All Events</option>
            <option value="upcoming">Upcoming</option>
            <option value="live">Live Now</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <div className="webinars-grid">
          {webinars.length > 0 ? (
            webinars.map(webinar => (
              <WebinarCard key={webinar._id} webinar={webinar} />
            ))
          ) : (
            <div className="no-results">
              <p>No webinars found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const WebinarCard = ({ webinar }) => {
  const getStatusBadge = (status) => {
    const badges = {
      'upcoming': 'badge-info',
      'live': 'badge-danger',
      'completed': 'badge-success'
    }
    return badges[status] || 'badge-info'
  }

  return (
    <div className="webinar-card">
      <div className="webinar-header">
        <h3>{webinar.title}</h3>
        <span className={`badge ${getStatusBadge(webinar.status)}`}>
          {webinar.status.charAt(0).toUpperCase() + webinar.status.slice(1)}
        </span>
      </div>
      <p className="webinar-description">{webinar.description}</p>
      <div className="webinar-meta">
        <div className="meta-item">
          <span className="label">Date:</span>
          <span className="value">{new Date(webinar.scheduledDate).toLocaleDateString()}</span>
        </div>
        <div className="meta-item">
          <span className="label">Time:</span>
          <span className="value">{new Date(webinar.scheduledDate).toLocaleTimeString()}</span>
        </div>
        <div className="meta-item">
          <span className="label">Instructor:</span>
          <span className="value">{webinar.instructor}</span>
        </div>
        <div className="meta-item">
          <span className="label">Category:</span>
          <span className="value">{webinar.category}</span>
        </div>
      </div>
      <div className="webinar-footer">
        <span className="participants">{webinar.registrations?.length || 0} registered</span>
        <a href={`/webinar/${webinar._id}`} className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  )
}

export default WebinarList
