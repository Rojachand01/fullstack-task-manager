# Fullstack Task Manager

A production-ready full-stack task management application.

## Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Swagger API Docs

Frontend:
- React.js
- Axios
- Protected Routes

Deployment:
- Backend → Render
- Frontend → Vercel

---

## Live Links

Frontend:
https://fullstack-task-manager-mocha.vercel.app/

Backend API:
https://fullstack-task-api-roja.onrender.com/

Swagger Docs:
http://localhost:5000/api-docs/

---

## Features

- User Registration & Login
- JWT-based Authentication
- Full CRUD for Tasks
- Protected API Routes
- Cloud Database (MongoDB Atlas)
- Production Deployment

---

## Run Locally

### Backend
### 1. Clone Repository
git clone https://github.com/Rojachand01/fullstack-task-manager.git

cd fullstack-task-manager


---

### 2. Setup Backend
cd backend
npm install

Create `.env` file inside **backend**:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Run backend:

node server.js


---

### 3. Setup Frontend
cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000/


---

## API Documentation

Swagger UI available at:
/api-docs
http://localhost:5000/api-docs/


---

## Scalability Notes

This application can scale using:

- **Microservices architecture** for separating auth, tasks, and users
- **Redis caching** to reduce database load
- **Load balancing & horizontal scaling** in cloud environments
- **Cloud storage services** for handling large assets
- **Containerization (Docker/Kubernetes)** for production orchestration

---

## Author

**Roja**





