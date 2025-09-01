# MERN Online Examination System

A *full-stack Online Examination System* built with the *MERN stack (MongoDB, Express, React, Node.js). This platform enables a seamless online examination experience for both **examinees* and *administrators*, supporting secure authentication, exam management, and result tracking.

---

## *Key Features*

### *Examinee/User*
- *User Registration & Authentication:* Secure sign-up and login with encrypted passwords.  
- *Take Exams:* Participate in scheduled exams with a real-time timer.  
- *View Results:* Check scores immediately after completing exams.  
- *Download Reports:* Export results in PDF format for personal records.  
- *Account Management:* Change password and update profile information securely.  

### *Administrator*
- *Exam Management:* Create and schedule exams with configurable duration and questions.  
- *Question Bank Management:* Add, edit, or remove questions dynamically.  
- *Result Publication:* Evaluate exams and post results for examinees.  
- *User Monitoring:* Track user activity and manage registered examinees.  
- *Secure Access:* Admin login with role-based authentication ensures authorized access only.  

---

## *Technology Stack*
- *Frontend:* React.js, React Router, Axios  
- *Backend:* Node.js, Express.js  
- *Database:* MongoDB (Atlas or local)  
- *Authentication:* JWT-based secure authentication  
- *Other Tools:* npm, Git, GitHub  

---

## *Project Structure*

root/ ├─ client/       # React frontend ├─ server/       # Node/Express backend ├─ .gitignore ├─ README.md └─ package.json

---

## *Setup & Run Instructions*

1. *Clone the repository*
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo

2. Install dependencies for both frontend and backend



# Backend
cd server
npm install

# Frontend
cd client
npm install

3. Configure environment variables

Create a .env file in the server/ directory with your MongoDB connection:


MONGO_URL=your-mongodb-connection-string
PORT=5000


4. Start the application

# Backend
cd ../server
npm start
# or with nodemon
nodemon index.js

# Frontend
cd ../client
npm start

Frontend runs on http://localhost:3000

Backend API runs on http://localhost:5000


---

Usage:

1. Open the frontend in a browser.


2. Examinee: Register, login, take exams, view/download results, and manage account.


3. Admin: Login, create exams, manage questions, evaluate and post results.


---

Note:

MongoDB connection string in .env is required.

This project does not include the actual database, users need to configure their own MongoDB.

.env is included in .gitignore to keep credentials safe.

Compatible with modern browsers and responsive design.

---

License:

This project is open-source and free to use for learning and demonstration purposes.
