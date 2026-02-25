import React, { useState, useEffect } from 'react'
import { webinarService, resourceService } from '../services/api'
import './AdminWebinars.css'

const AdminWebinars = () => {
  const [webinars, setWebinars] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    category: '',
    scheduledDate: '',
    duration: '',
    maxParticipants: ''
  })

  useEffect(() => {
    fetchWebinars()
  }, [])

  const fetchWebinars = async () => {
    try {
      setLoading(true)
      const response = await webinarService.getAll()
      setWebinars(response.data)
    } catch (err) {
      setError('Failed to load webinars')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        await webinarService.update(editingId, formData)
      } else {
        await webinarService.create(formData)
      }
      resetForm()
      fetchWebinars()
      setError('')
    } catch (err) {
      setError('Failed to save webinar')
    }
  }

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this webinar?')) {
      try {
        await webinarService.delete(id)
        fetchWebinars()
      } catch (err) {
        setError('Failed to delete webinar')
      }
    }
  }

  const handleEdit = (webinar) => {
    setFormData(webinar)
    setEditingId(webinar._id)
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      instructor: '',
      category: '',
      scheduledDate: '',
      duration: '',
      maxParticipants: ''
    })
    setEditingId(null)
    setShowForm(false)
  }

  if (loading) return <div className="loading"><div className="spinner"></div></div>

  return (
    <div className="admin-webinars">
      {error && <div className="alert alert-error">{error}</div>}

      <button
        onClick={() => setShowForm(!showForm)}
        className="btn btn-primary"
      >
        {showForm ? 'Cancel' : '+ Create New Webinar'}
      </button>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? 'Edit Webinar' : 'Create New Webinar'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="instructor">Instructor</label>
                <input
                  type="text"
                  id="instructor"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="scheduledDate">Scheduled Date & Time</label>
                <input
                  type="datetime-local"
                  id="scheduledDate"
                  name="scheduledDate"
                  value={formData.scheduledDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="duration">Duration (minutes)</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="maxParticipants">Max Participants</label>
                <input
                  type="number"
                  id="maxParticipants"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update' : 'Create'} Webinar
              </button>
              <button type="button" onClick={resetForm} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="webinars-table-container">
        <h2>All Webinars</h2>
        <table className="webinars-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Instructor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Registrations</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {webinars.map(webinar => (
              <tr key={webinar._id}>
                <td>{webinar.title}</td>
                <td>{webinar.instructor}</td>
                <td>{new Date(webinar.scheduledDate).toLocaleDateString()}</td>
                <td><span className="status-badge">{webinar.status}</span></td>
                <td>{webinar.registrations?.length || 0}</td>
                <td>
                  <button
                    onClick={() => handleEdit(webinar)}
                    className="action-btn edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(webinar._id)}
                    className="action-btn delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminWebinars
