# Quick Start Guide - EduWebinar Platform (Frontend Only)

## 🚀 Starting the Application

### Option 1: Direct Start
```bash
cd frontend
npm install  # if not already installed
npm run dev
```

Then open: **http://localhost:3000** in your browser

### Option 2: One Command
```bash
cd frontend && npm install && npm run dev
```

---

## 📊 Your First 5 Minutes

### 1️⃣ Start the App
```bash
npm run dev
```
Wait for: `VITE v5... ready in XXX ms`

### 2️⃣ Open in Browser
Go to: **http://localhost:3000**

### 3️⃣ Create an Account
- Click "Register"
- Fill in your details
- Select "User" role for regular user, or "Admin" for admin features
- Click "Register"
- You're logged in! 🎉

### 4️⃣ Explore
- **Users**: Click "Browse Webinars" to see 6 sample webinars
- **Admins**: Click "Admin Panel" to create and manage webinars

### 5️⃣ Test Features
- Search for webinars
- Filter by category
- Register/unregister for events
- (Admin) Create new webinars
- (Admin) View registrations

---

## 📝 Test Accounts

You can create unlimited test accounts:

### User Account
- Email: `user@test.com`
- Password: `password123`
- Role: User

### Admin Account
- Email: `admin@test.com`
- Password: `admin123`
- Role: Admin

---

## 6️⃣ Sample Webinars (Pre-loaded)

1. **Introduction to React** (Technology)
2. **JavaScript ES6+ Mastery** (Technology)
3. **Business Analytics 101** (Business)
4. **Python for Data Science** (Technology)
5. **Digital Marketing Strategies** (Business)
6. **Health & Wellness Fundamentals** (Health)

---

## ✨ Key Features

### Regular Users Can:
✅ Browse all webinars
✅ Search by title/description
✅ Filter by category
✅ View webinar details
✅ Register for webinars
✅ View my registrations

### Admin Users Can:
✅ All user features
✅ Create new webinars
✅ Edit existing webinars
✅ Delete webinars
✅ View all registrations
✅ Full admin dashboard

---

## 🔧 Build for Production

```bash
npm run build
```

This creates a `dist/` folder ready to deploy!

---

## 📱 Responsive Design

Works perfectly on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (< 768px)

---

## 💾 Data Storage

All data is stored in your browser's **localStorage**:
- User accounts
- Registered webinars
- All webinar information

**Data persists** in the same browser/device.
**Data resets** if you clear browser cache.

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | Vite auto-picks next port (shows in terminal) |
| npm install fails | Run `npm cache clean --force` then try again |
| Page not loading | Clear cache (Ctrl+Shift+Delete) and reload |
| Login not working | Check localStorage (F12 > Application > LocalStorage) |

---

## 📚 Files & Folders

```
frontend/
├── src/
│   ├── components/        # UI Components
│   ├── pages/             # 7 Page components
│   ├── services/          # Data layer
│   ├── context/           # Auth management
│   ├── hooks/             # Custom hooks
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── index.html
```

---

## 🎯 Admin Panel Walkthrough

1. **Login as Admin**
   - Register with "Admin" role

2. **Go to Admin Panel**
   - Click "Admin Panel" in header

3. **Manage Webinars Tab**
   - Create: Click "Create New Webinar"
   - Edit: Find webinar, click "Edit"
   - Delete: Find webinar, click "Delete"

4. **View Registrations Tab**
   - Select a webinar from dropdown
   - See all participants

---

## 🧪 Testing Scenarios

### Test User Registration & Login
1. Register new account
2. Logout
3. Login with same credentials
4. Verify you're logged in

### Test Webinar Browsing
1. Click "Browse Webinars"
2. Search for "React"
3. Filter by "Technology"
4. View details
5. Click back

### Test Registration (User)
1. Browse webinars
2. Click "View Details"
3. Click "Register Now"
4. Go to "My Registrations"
5. Verify it's there

### Test Admin Functions
1. Go to "Admin Panel"
2. Create a new webinar
3. View the new webinar in list
4. Edit it
5. Delete it

---

## 🚀 Deploy to Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Build locally: `npm run build`
3. Upload `dist` folder
4. Done! 🎉

---

## 📞 Need Help?

1. Check browser console (F12)
2. Read the full README.md
3. Check if localStorage is enabled
4. Try incognito mode

---

## 🎉 You're Ready!

Everything works out of the box. No backend needed!

```bash
npm run dev
# Open http://localhost:3000
```

**Happy coding!** 🚀

---

**Status:** ✅ Frontend Only
**Data:** localStorage
**Backend:** None needed
**Database:** Browser storage
