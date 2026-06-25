# 🏥 Medicare - Doctor Appointment Booking System

A full-stack Doctor Appointment Booking System built using **HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and Nodemailer**. The application allows users to browse doctors, book appointments, store appointment details in MySQL, and receive email confirmations.

---

## 🚀 Features

* Browse doctor profiles
* View doctor details and consultation fees
* Book appointments online
* Store appointments in MySQL
* Email notifications for patients and doctors
* Responsive and modern UI

---

## 🛠️ Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript

**Backend**

* Node.js
* Express.js

**Database**

* MySQL

**Email Service**

* Nodemailer (Gmail SMTP)

---

## 📂 Project Structure

```
medicare/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── css/
├── js/
├── index.html
├── booking.html
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd medicare
```

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Configure MySQL

Create a database named **medicare** and import the required tables.

Update database credentials in:

```
backend/config/db.js
```

### 4. Configure Email

Create a `.env` file inside the `backend` folder:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
```

### 5. Run the Backend

```bash
npm start
```

or

```bash
npm run dev
```

Backend URL:

```
http://localhost:5000
```

### 6. Run the Frontend

Open `index.html` using **VS Code Live Server**.

---

## 📌 Project Workflow

```
Home Page
      ↓
Browse Doctors
      ↓
Select Doctor
      ↓
Book Appointment
      ↓
Submit Form
      ↓
Express API
      ↓
MySQL Database
      ↓
Email Confirmation
```

---

## ☁️ AWS Deployment

1. Launch an Ubuntu EC2 instance.
2. Install Node.js, npm, and MySQL.
3. Clone the repository.
4. Install dependencies using `npm install`.
5. Configure `.env` and MySQL.
6. Start the server using **PM2**.
7. Configure **Nginx** as a reverse proxy.
8. Access the application using your EC2 Public IP or domain.

---

## 🔮 Future Improvements

* User Authentication
* Admin Dashboard
* Doctor Dashboard
* Online Payment Integration
* Appointment History
* Video Consultation
* Patient Profile

---

## 👨‍💻 Author

**Deepanshu Bisht**

B.Tech – Artificial Intelligence & Machine Learning

Guru Gobind Singh Indraprastha University (GGSIPU)
