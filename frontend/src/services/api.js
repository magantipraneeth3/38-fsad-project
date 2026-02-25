// Mock Data Service - Standalone Frontend Application
// All data stored in localStorage for persistence

// Mock Webinars Data
const MOCK_WEBINARS = [
  {
    _id: '1',
    title: 'Introduction to React',
    description: 'Learn the fundamentals of React including components, hooks, and state management.',
    instructor: 'Sarah Johnson',
    category: 'technology',
    scheduledDate: '2026-03-15T10:00:00Z',
    duration: 90,
    maxParticipants: 100,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  },
  {
    _id: '2',
    title: 'JavaScript ES6+ Mastery',
    description: 'Deep dive into modern JavaScript features and best practices for professional development.',
    instructor: 'Mike Chen',
    category: 'technology',
    scheduledDate: '2026-03-10T14:00:00Z',
    duration: 120,
    maxParticipants: 80,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  },
  {
    _id: '3',
    title: 'Business Analytics 101',
    description: 'Understand data-driven decision making and analytics strategies for business growth.',
    instructor: 'Emma Williams',
    category: 'business',
    scheduledDate: '2026-03-20T09:00:00Z',
    duration: 60,
    maxParticipants: 150,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  },
  {
    _id: '4',
    title: 'Python for Data Science',
    description: 'Master Python programming with libraries like Pandas, NumPy, and Matplotlib.',
    instructor: 'David Kumar',
    category: 'technology',
    scheduledDate: '2026-03-25T15:00:00Z',
    duration: 150,
    maxParticipants: 60,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  },
  {
    _id: '5',
    title: 'Digital Marketing Strategies',
    description: 'Learn effective digital marketing techniques including SEO, social media, and content marketing.',
    instructor: 'Lisa Anderson',
    category: 'business',
    scheduledDate: '2026-03-12T11:00:00Z',
    duration: 75,
    maxParticipants: 120,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  },
  {
    _id: '6',
    title: 'Health & Wellness Fundamentals',
    description: 'Explore the basics of nutrition, exercise, and mental health for holistic wellness.',
    instructor: 'Dr. Robert White',
    category: 'health',
    scheduledDate: '2026-03-18T10:30:00Z',
    duration: 90,
    maxParticipants: 200,
    status: 'upcoming',
    registrations: [],
    recordingUrl: null
  }
]

// Initialize localStorage with mock data
const initializeData = () => {
  if (!localStorage.getItem('webinars')) {
    localStorage.setItem('webinars', JSON.stringify(MOCK_WEBINARS))
  }
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]))
  }
}

initializeData()

// Mock Auth Service
export const authService = {
  register: async (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(u => u.email === userData.email)) {
      throw new Error('User already exists')
    }
    const newUser = {
      _id: Date.now().toString(),
      ...userData,
      createdAt: new Date()
    }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    const token = `token_${newUser._id}_${Date.now()}`
    return Promise.resolve({
      data: {
        token,
        user: { _id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role }
      }
    })
  },

  login: async (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password)
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const token = `token_${user._id}_${Date.now()}`
    return Promise.resolve({
      data: {
        token,
        user: { _id: user._id, name: user.name, email: user.email, role: user.role }
      }
    })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  getProfile: async () => {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('No token')
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users[0]
    return Promise.resolve({ data: user })
  }
}

// Mock Webinar Service
export const webinarService = {
  getAll: async (filters = {}) => {
    let webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    
    if (filters.search) {
      webinars = webinars.filter(w => 
        w.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        w.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
    if (filters.category && filters.category !== 'all') {
      webinars = webinars.filter(w => w.category === filters.category)
    }
    
    if (filters.status && filters.status !== 'all') {
      webinars = webinars.filter(w => w.status === filters.status)
    }
    
    return Promise.resolve({ data: webinars })
  },

  getById: async (id) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const webinar = webinars.find(w => w._id === id)
    return Promise.resolve({ data: webinar })
  },

  create: async (data) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const newWebinar = { _id: Date.now().toString(), ...data, registrations: [] }
    webinars.push(newWebinar)
    localStorage.setItem('webinars', JSON.stringify(webinars))
    return Promise.resolve({ data: { success: true, webinar: newWebinar } })
  },

  update: async (id, data) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const idx = webinars.findIndex(w => w._id === id)
    if (idx >= 0) {
      webinars[idx] = { ...webinars[idx], ...data }
      localStorage.setItem('webinars', JSON.stringify(webinars))
    }
    return Promise.resolve({ data: { success: true } })
  },

  delete: async (id) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const filtered = webinars.filter(w => w._id !== id)
    localStorage.setItem('webinars', JSON.stringify(filtered))
    return Promise.resolve({ data: { success: true } })
  },

  register: async (webinarId) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const webinar = webinars.find(w => w._id === webinarId)
    if (webinar) {
      webinar.registrations.push({ userId: Date.now() })
      localStorage.setItem('webinars', JSON.stringify(webinars))
    }
    return Promise.resolve({ data: { success: true } })
  },

  unregister: async (webinarId) => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    const webinar = webinars.find(w => w._id === webinarId)
    if (webinar) {
      webinar.registrations = []
      localStorage.setItem('webinars', JSON.stringify(webinars))
    }
    return Promise.resolve({ data: { success: true } })
  },

  getRegistrations: async () => {
    const webinars = JSON.parse(localStorage.getItem('webinars') || '[]')
    return Promise.resolve({ data: webinars })
  }
}

// Mock Resource Service
export const resourceService = {
  uploadResource: async () => ({
    data: { success: true }
  }),
  getResources: async () => ({
    data: []
  }),
  deleteResource: async () => ({
    data: { success: true }
  }),
  downloadResource: async () => ({
    data: new Blob()
  })
}

// Mock Streaming Service
export const streamingService = {
  getStreamToken: async () => ({
    data: { token: 'stream_token_' + Date.now() }
  }),
  startStream: async () => ({
    data: { success: true }
  }),
  stopStream: async () => ({
    data: { success: true }
  }),
  getStreamStatus: async () => ({
    data: { status: 'inactive' }
  })
}
