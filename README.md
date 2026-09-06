# 📚 StudyFlow

> **Study smarter. Know your progress.**

**StudyFlow** is a modern full-stack study-session tracking web application designed to help students track focused study sessions, review their study history, and understand where their time is going.

The project started as a React learning project and has evolved into a complete application using **React, Express, and SQLite**, with a REST API connecting the frontend to persistent backend data.

---

## 🎥 Preview

### StudyFlow in Action

A demonstration of StudyFlow's core experience, including creating a study session, using the stopwatch, viewing completed sessions, and managing study history.

https://github.com/user-attachments/assets/cb592cb0-489d-4d35-bc80-0befd82cfd64

---

## ✨ Features

### ⏱️ Study Session Tracking

Create a study session by selecting a subject and start a live stopwatch to track exactly how long you study.

### 📚 Session History

Completed sessions are automatically added to the dashboard, showing:

- 📖 Subject studied
- 📅 Date of the session
- ⏱️ Total study duration

### 💾 Persistent Database Storage

Study sessions are stored in a **SQLite database** through the Express backend, allowing data to persist independently of the browser's React state.

### 🔎 Individual Session Views

Every completed session receives a unique database ID and can be opened through its own dynamic route to view its details.

### ✏️ Session Management

Study sessions can be created, viewed, updated, and deleted through the backend REST API.

### 🗑️ Delete Confirmation

Completed sessions can be deleted through a confirmation modal to help prevent accidental deletion.

### 📊 Study Statistics

The dashboard provides automatically calculated statistics, including:

- Total number of study sessions
- Total study time
- Most studied subject

Statistics are calculated from the database rather than being manually stored.

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
| 🟢 Node.js | Backend JavaScript runtime |
| 🚂 Express | REST API and backend server |
| 💾 SQLite | Persistent application database |
| 🗃️ better-sqlite3 | SQLite database integration |
| 🔗 REST API | Communication between frontend and backend |
| 🐙 Git & GitHub | Version control and project hosting |

---

## 🧠 What I Learned

StudyFlow was originally built to strengthen my understanding of React, but the project has since expanded into a full-stack application.

Through this project, I practised:

### Frontend

- Managing application state with `useState`
- Synchronising data with `useEffect`
- Using `useRef` for stopwatch timing
- Building reusable React components
- Passing data between components using props
- Creating client-side routes with React Router
- Working with dynamic URL parameters
- Handling user input and interactions
- Creating confirmation modals
- Building responsive layouts with CSS
- Designing interactive UI states
- Keeping shared application state in a parent component

### Backend

- Creating an Express server
- Creating REST API endpoints
- Handling `GET`, `POST`, `PUT`, and `DELETE` requests
- Reading JSON request bodies with `express.json()`
- Validating incoming data
- Returning appropriate HTTP status codes
- Connecting Express to SQLite
- Preparing SQL statements with `db.prepare()`
- Executing SQL using `.get()`, `.all()`, and `.run()`
- Using SQL placeholders for safer queries
- Using SQL aliases
- Calculating statistics from stored data
- Connecting a React frontend to an Express backend

### Full-Stack Development

- Connecting frontend and backend applications
- Sending data between React and an API
- Updating frontend state after backend operations
- Keeping UI state synchronised with persistent database data
- Structuring a project with separate frontend and backend applications
- Using Git for version control and development checkpoints

---

## 🏗️ Project Structure

```plaintext
studyflow/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Session.jsx
│   │   │   ├── Sessions.jsx
│   │   │   └── Stats.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── database.js
│   ├── server.js
│   ├── package.json
│   └── studyflow.db
│
├── README.md
└── ...
```

The application is separated into two main parts:

- **Frontend** — React/Vite application responsible for the user interface.
- **Backend** — Express server responsible for the REST API and SQLite database.

---

## 🔄 How StudyFlow Works

### 1. Choose a Subject

Enter the subject you want to study.

### 2. Start a Session

Start the stopwatch and focus on your work.

### 3. Pause When Needed

Pause the stopwatch whenever you need to take a break, then resume when you're ready.

### 4. End the Session

When you're finished studying, end the session.

### 5. Save the Session

The React frontend sends the completed session to the Express API.

### 6. Store the Data

Express validates the data and stores it in the SQLite database.

### 7. Review Your History

The completed session appears on the dashboard with its subject, date, and duration.

### 8. View or Delete Sessions

Open individual sessions to view their details or delete sessions you no longer need.

### 9. Calculate Statistics

StudyFlow queries the database to calculate overall study statistics such as total sessions, total study time, and the most studied subject.

---

## 🔌 API Endpoints

StudyFlow currently uses the following backend endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api` | Check that the API is running |
| `GET` | `/api/sessions` | Retrieve all study sessions |
| `GET` | `/api/sessions/:id` | Retrieve one study session |
| `POST` | `/api/sessions` | Create a new study session |
| `PUT` | `/api/sessions/:id` | Update a study session |
| `DELETE` | `/api/sessions/:id` | Delete a study session |
| `GET` | `/api/stats` | Retrieve calculated study statistics |

---

## 🗄️ Database

StudyFlow currently uses SQLite with a `sessions` table containing:

| Column | Type | Purpose |
|---|---|---|
| `id` | INTEGER | Unique session ID |
| `subject` | TEXT | Subject studied |
| `duration` | INTEGER | Session duration in milliseconds |
| `date` | TEXT | Date the session was completed |

The database is accessed from the Express backend using `better-sqlite3`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/HussBTWYT/studyflow.git
cd studyflow
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Start the Frontend

```bash
npm run dev
```

### Start the Backend

Open a **separate terminal** and run:

```bash
cd studyflow/backend
npm install
node server.js
```

The frontend and backend run separately during local development.

Typically:

```plaintext
Frontend → http://localhost:5173
Backend  → http://localhost:3000
```

Then open the local development URL provided by Vite.

---

## 🌐 Deployment

StudyFlow is being prepared for production deployment with a separate frontend and backend architecture.

The planned production structure is:

```plaintext
                    StudyFlow
                        │
             ┌──────────┴──────────┐
             ↓                     ↓
      React Frontend          Express API
       GitHub Pages             Backend Host
             │                     │
             └────── HTTPS ────────┘
                       │
                    SQLite
```

The frontend can be deployed as a static React application, while the Express backend requires a server capable of running Node.js.

---

## 🎯 Project Goals

The main goal of StudyFlow is to build a complete application while developing a deeper understanding of full-stack web development.

Rather than building isolated tutorial exercises, the project combines:

- Components
- State management
- Routing
- REST APIs
- Backend development
- Databases
- CRUD operations
- Data persistence
- Statistics
- User interaction
- Responsive UI design

into one working product.

---

## 🔮 Future Improvements

StudyFlow currently focuses on the core study-session experience. Future versions may introduce:

### Authentication

- 🔐 User registration and login
- 🔑 Secure password hashing
- 👤 Individual user accounts
- 🔒 User-specific sessions
- 🛡️ Protected API routes

### Study Features

- 📊 Advanced study analytics
- 📈 Progress charts
- 📅 Calendar-based study history
- 🎯 Daily and weekly study goals
- 🔥 Study streaks
- 🏆 Achievements and milestones
- ⏰ Study reminders

### Product Features

- 👤 Personal profiles
- 🌓 Dark mode
- ☁️ Cloud-based data storage
- 📤 Data export
- 📱 Improved mobile experience

### Monetisation

Once StudyFlow has a useful multi-user experience, future versions could explore optional premium features and other sustainable ways of supporting the project.

---

## 📌 Project Status

🟢 **Version 2.0 — Full-Stack MVP Completed**

StudyFlow's current MVP includes:

- React frontend
- Express backend
- SQLite database
- REST API
- Study session creation
- Live stopwatch
- Session history
- Individual session pages
- Session deletion
- Session updating
- Dashboard statistics
- Responsive UI
- Persistent backend data

The next major stage is preparing the application for production deployment.

Future versions may expand StudyFlow with authentication, advanced analytics, cloud infrastructure, and potentially monetisation.

---

## 👨‍💻 Author

**Hussain Ahmed**

StudyFlow was created as a personal learning project to practise frontend development, backend engineering, databases, REST APIs, full-stack application architecture, and modern UI design.

🐙 GitHub: [@HussBTWYT](https://github.com/HussBTWYT)

---

## ⭐ Support

If you found **StudyFlow** interesting, feel free to ⭐ the repository!

<p align="center">
  Built with ⚛️ React, ⚡ Vite, 🟢 Express, 💾 SQLite, and plenty of ☕
</p>