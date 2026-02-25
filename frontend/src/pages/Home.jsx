import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

const Home = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduWebinar</h1>
          <p>Your platform for hosting and attending educational webinars and workshops</p>
          {!isAuthenticated && (
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary btn-large">
                Sign In
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <div className="hero-buttons">
              <Link to="/webinars" className="btn btn-primary btn-large">
                Browse Webinars
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📺</div>
              <h3>Live Streaming</h3>
              <p>Host live webinars with real-time engagement and participant interaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Easy Registration</h3>
              <p>Simple registration process for participants to join webinars and workshops.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Resource Sharing</h3>
              <p>Share and access materials, slides, and resources before and after events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Recordings</h3>
              <p>Archive webinars for later viewing and on-demand access by registered users.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Participant Management</h3>
              <p>Manage registrations, attendance, and participant interactions efficiently.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Admin Dashboard</h3>
              <p>Complete control over webinars, schedules, and platform management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Account</h3>
              <p>Register as a user or admin to get started with EduWebinar.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Browse Webinars</h3>
              <p>Explore available webinars and workshops suited to your interests.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Register & Attend</h3>
              <p>Register for events and join live sessions or access recordings.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Access Resources</h3>
              <p>Download materials and resources shared during the webinar.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
