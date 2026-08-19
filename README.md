# 📚 StudyFlow

> **Study smarter. Know your progress.**

**StudyFlow** is a modern study-session tracking web application built with React. It helps users track focused study sessions, understand where their time goes, and maintain an organized history of their study habits.

Built as a practical React project to move beyond tutorials and apply frontend development concepts in a complete, polished application.

---

## 🎥 Preview

### StudyFlow in Action

<!-- Replace this section with your demo recording/GIF once it is ready. -->

A demonstration of StudyFlow's core experience, including creating a study session, using the stopwatch, viewing completed sessions, and managing study history.

> 🎬 **[Watch the StudyFlow Demo](demo/demo.mp4)** 

---

## ✨ Features

### ⏱️ Study Session Tracking
Create a study session by selecting a subject and start a live stopwatch to track exactly how long you study.

### 📚 Session History
Completed sessions are automatically added to your dashboard, showing:
- 📖 Subject studied
- 📅 Date of the session
- ⏱️ Total study duration

### 💾 Persistent Session Data
Study sessions are stored using the browser's `localStorage`, allowing your study history to remain available after refreshing or reopening the application.

### 🔎 Individual Session Views
Every completed session receives a unique ID and can be opened through its own dynamic route to view its details.

### 🗑️ Session Management
Delete completed sessions through a confirmation modal to help prevent accidental deletion.

### 📱 Responsive Interface
StudyFlow is designed to adapt across desktop, tablet, and mobile screen sizes.

### 🎨 Modern UI
The interface features a clean, minimal design with:
- ✦ Purple accent colours
- 🌈 Subtle gradients
- 🃏 Modern cards
- ✨ Hover animations
- 🌫️ Soft shadows
- 📐 Responsive layouts
- 🔤 Modern typography
- 🎯 Clear visual hierarchy

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Frontend UI and component architecture |
| 🧭 React Router | Client-side routing and dynamic session pages |
| 🟨 JavaScript | Application logic and state management |
| 🎨 CSS | Responsive styling and UI design |
| ⚡ Vite | Development server and build tooling |
| 💾 LocalStorage | Persistent browser-based session storage |
| 🐙 Git & GitHub | Version control and project hosting |

---

## 🧠 What I Learned

**StudyFlow** was built to strengthen my understanding of React by combining multiple frontend concepts into one complete application.

Through this project, I practised:
- Managing application state with `useState`
- Synchronising data with `useEffect`
- Using `useRef` for stopwatch timing
- Building reusable React components
- Passing data between components using props
- Creating client-side routes with React Router
- Working with dynamic URL parameters
- Generating unique IDs with `crypto.randomUUID()`
- Persisting application data with `localStorage`
- Handling user input and interactions
- Creating confirmation modals
- Building responsive layouts with CSS
- Designing interactive UI states
- Structuring a multi-page React application

---

## 🏗️ Project Structure

```plaintext
src/
├── components/
│   ├── Dashboard.jsx
│   ├── Home.jsx
│   ├── Landing.jsx
│   ├── Navbar.jsx
│   ├── Session.jsx
│   └── Sessions.jsx
├── App.jsx
├── main.jsx
└── index.css
```

The application is separated into focused React components, keeping navigation, dashboard content, session creation, session history, and individual session views organized.

---

## 🔄 How StudyFlow Works

- **Choose a Subject**  
  Enter the subject you want to study.

- **Start a Session**  
  Start the stopwatch and focus on your work.

- **Pause When Needed**  
  Pause the stopwatch whenever you need to take a break, then resume when you're ready.

- **End the Session**  
  When you're finished studying, end the session.

- **Review Your History**  
  The completed session is saved to the dashboard with its subject, date, and duration.

- **Manage Your Sessions**  
  Open individual sessions to view their details or delete sessions you no longer need.

---

## 🎯 Project Goals

The main goal of **StudyFlow** was to build a complete React application while developing a stronger understanding of how different frontend concepts work together.

Rather than building isolated tutorial exercises, the project combines:

- Components
- State management
- Routing
- Persistence
- User interaction
- UI design

into one working product.

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/HussBTWYT/studyflow.git
cd studyflow
npm install
npm run dev
```

Then open the local development URL provided by Vite.

---

## 🔮 Future Improvements

StudyFlow is intentionally focused on the core study-session experience, but there are several features that could be added in future versions:

- 📊 Study statistics and analytics
- 📈 Progress charts
- 📅 Calendar-based study history
- 🎯 Daily and weekly study goals
- 🔥 Study streaks
- 🏆 Achievements and milestones
- ⏰ Study reminders
- 🌓 Dark mode
- 🔐 User authentication
- ☁️ Cloud-based session storage
- 👤 Personal user profiles

---

## 📌 Project Status

🟢 **Initial Version — Completed**  
The core StudyFlow experience is implemented, including study session tracking, stopwatch functionality, persistent session history, dynamic session pages, session deletion, and responsive UI.  
Future versions may expand the application with analytics, goals, authentication, and cloud storage.

---

## 👨‍💻 Author

**Hussain Ahmed**  
StudyFlow was created as a personal learning project to practise React development, frontend engineering, application state management, and modern UI design.  
🐙 GitHub: @HussBTWYT

---

## ⭐ Support

If you found **StudyFlow** interesting, feel free to ⭐ the repository!

<p align="center"> Built with ⚛️ React, ⚡ Vite, and plenty of ☕ </p>
