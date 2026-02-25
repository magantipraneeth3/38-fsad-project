# EduWebinar - Educational Webinars & Workshops Platform

A modern, responsive web-based platform for discovering and managing educational webinars and workshops. This is a **frontend-only application** with all data stored locally using localStorage for persistence.

## ✨ Features

### User Features
- **Browse Webinars** - View all available webinars and workshops
- **Search & Filter** - Search by title/description, filter by category, sort by date
- **View Details** - See comprehensive webinar information
- **Register** - Register for webinars you're interested in
- **Track Registrations** - View your registered webinars
- **Download Resources** - Access materials shared during webinars

### Admin Features
- **Manage Webinars** - Create, edit, and delete webinars
- **View Registrations** - See all participants registered for events
- **Schedule Events** - Set dates, times, and durations
- **Dashboard** - Complete control panel for platform management

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite 5** - Fast build tool and dev server
- **React Router 6** - Client-side routing
- **CSS3** - Responsive design
- **localStorage** - Client-side data persistence

## 📋 System Requirements

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

## 🚀 Installation & Setup

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will be available at **http://localhost:3000**

### Step 3: Build for Production
```bash
npm run build
```

Output files will be in the `dist/` directory.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── WebinarList.jsx
│   │   ├── WebinarDetail.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminWebinars.jsx
│   │   └── AdminRegistrations.jsx
│   ├── services/          # API/Data services
│   │   └── api.js         # Mock data service
│   ├── context/           # React context
│   │   └── AuthContext.jsx
│   ├── hooks/             # Custom hooks
│   │   └── useRequireAuth.js
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── index.html
```

## 🎯 How to Use

### For Users

1. **Register** - Click "Register" and create an account
2. **Browse** - Go to "Browse Webinars" to see available events
3. **Filter** - Use search and category filters
4. **Register** - Click "Register Now" for webinars
5. **View** - Access your registered webinars anytime

### For Admins

1. **Login as Admin** - Register with "Admin" role
2. **Go to Admin Panel** - Click "Admin Panel" in header
3. **Create Webinars** - Click "Create New Webinar"
4. **View Registrations** - Switch to "View Registrations" tab
5. **Manage** - Edit or delete webinars as needed

## 💾 Data Storage

All data is stored locally in your browser's **localStorage**:
- **User accounts** - Persisted in localStorage
- **Webinars** - Come with 6 sample webinars
- **Registrations** - Stored locally per user

**Note:** Data will persist in the same browser. Clearing browser cache will reset the data.

## 🎓 Sample Webinars

The application comes pre-loaded with 6 sample webinars:

1. **Introduction to React** - Technology (Sarah Johnson)
2. **JavaScript ES6+ Mastery** - Technology (Mike Chen)
3. **Business Analytics 101** - Business (Emma Williams)
4. **Python for Data Science** - Technology (David Kumar)
5. **Digital Marketing Strategies** - Business (Lisa Anderson)
6. **Health & Wellness Fundamentals** - Health (Dr. Robert White)

## 🔐 Security

- Client-side authentication
- Password stored in localStorage (demo purposes)
- Role-based access control
- Secure session handling

## 🎨 Features Overview

### Home Page
- Hero section with call-to-action
- Feature cards highlighting platform benefits
- Step-by-step walkthrough
- Professional design

### Webinar Browsing
- Grid layout with webinar cards
- Real-time search functionality
- Category filtering
- Status badges (upcoming/completed)
- Quick view details

### Registration System
- One-click registration
- Capacity management
- Participant tracking
- Easy unregistration

### Admin Dashboard
- Complete webinar management
- Create, update, delete operations
- View all registrations
- Beautiful dashboard interface

## 📱 Responsive Design

- Mobile-optimized (< 768px)
- Tablet-friendly (768px - 1024px)
- Desktop-optimized (> 1024px)
- Flexible layouts
- Touch-friendly buttons

## 🧪 Testing

### Test User Account
- Email: test@example.com
- Password: test123

### Test Admin Account
- Create via registration with "Admin" role
- Use for testing admin features

### Test Webinars
- 6 sample webinars pre-loaded
- Create additional webinars in Admin Panel
- Register and unregister as needed

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Upload 'dist' folder to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push to gh-pages branch
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 already in use | Vite will use next available port |
| Dependencies not installing | Run `npm cache clean --force` then `npm install` |
| Page not loading | Clear browser cache and reload |
| Data not persisting | Check if localStorage is enabled in browser |

## 💡 Tips

- Use **Incognito/Private** mode to test multiple user sessions
- Use **Browser DevTools (F12)** for debugging
- Data is stored in browser's localStorage (visible in DevTools)
- Create multiple test accounts to test different scenarios

## 🎁 What's Included

- ✅ 8+ React components
- ✅ 7 complete pages
- ✅ Modern, responsive design
- ✅ Search and filter functionality
- ✅ User authentication
- ✅ Admin dashboard
- ✅ 6 sample webinars
- ✅ localStorage integration
- ✅ Professional styling
- ✅ Full documentation

## 📚 Documentation

- **README.md** - This file
- **QUICK_START.md** - Quick start guide
- **PROJECT_SUMMARY.md** - Project overview
- **INDEX.md** - Documentation index

## 🔄 State Management

- **AuthContext** - Manages user authentication and state
- **localStorage** - Persists all application data
- **React Hooks** - useState for component state

## 📞 Support

For questions or issues:
1. Check the documentation files
2. Review browser console (F12) for errors
3. Verify localStorage is enabled
4. Clear cache and reload

## 🎉 Ready to Use!

The application is ready to run immediately with no backend setup required!

```bash
npm install
npm run dev
```

Visit **http://localhost:3000** and start exploring!

---

**Created:** February 2026
**Status:** ✅ Production Ready
**Frontend Only:** No backend required

