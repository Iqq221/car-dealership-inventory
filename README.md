# 🚗 Car Dealership Inventory System

A full-stack **Car Dealership Inventory System** built using **React, Tailwind CSS, Node.js, Express.js, MySQL, and JWT Authentication**.

The application provides a seamless experience for both customers and administrators. Customers can browse available vehicles, search and filter inventory, and purchase vehicles, while administrators can securely manage inventory through a dedicated dashboard.

---

## ✨ Features

### 👤 Customer

- User Registration & Login
- Browse Available Vehicles
- Search Vehicles by Make, Model, or Category
- Filter Vehicles by Category and Price
- Purchase Vehicles
- Automatic Stock Updates
- Out of Stock Detection

### 👨‍💼 Admin

- Secure JWT Authentication
- Dashboard Overview
- Add New Vehicles
- Update Vehicle Details
- Delete Vehicles
- Restock Inventory
- Inventory Statistics

---

## 🛠 Tech Stack

### Frontend

- React
- Tailwind CSS
- React Router DOM
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- MySQL

### Database

- MySQL

### Tools

- Git & GitHub
- Postman
- Visual Studio Code

---

# 📂 Project Structure

```text
car-dealership-inventory/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
├── README.md
└── PROMPTS.md
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js
- MySQL
- Git

---

## Clone the Repository

```bash
git clone https://github.com/yourusername/car-dealership-inventory.git

cd car-dealership-inventory
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file (if applicable) or configure your database credentials.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=car_dealership

JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

Backend runs on

```
http://localhost:5000
```

---

# 📡 API Endpoints

## 🚗 Vehicle API

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| GET | `/api/vehicles` | Public | Retrieve all available vehicles |
| GET | `/api/vehicles/:id` | Public | Retrieve details of a specific vehicle |
| GET | `/api/vehicles/search?search=keyword` | Public | Search vehicles by make, model, or category |
| POST | `/api/vehicles` | Admin | Add a new vehicle |
| PUT | `/api/vehicles/:id` | Admin | Update an existing vehicle |
| DELETE | `/api/vehicles/:id` | Admin | Delete a vehicle |

---

## 📦 Inventory API

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| POST | `/api/vehicles/purchase/:id` | Authenticated User | Purchase a vehicle (decreases stock by 1) |
| POST | `/api/vehicles/restock/:id` | Admin | Restock a vehicle (increases stock) |

---

## 🔐 Authentication API

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive a JWT token |
---

# 📸 Application Screenshots

| Feature | Screenshot |
|----------|------------|
| Login | `screenshots/login.png` |
| Register | `screenshots/register.png` |
| Customer Dashboard | `screenshots/home.png` |
| Search & Filter | `screenshots/search-filter.png` |
| Admin Dashboard | `screenshots/admin-dashboard.png` |
| Add Vehicle | `screenshots/add-vehicle.png` |
| Purchase Vehicle | `screenshots/purchase.png` |

> Replace the placeholder image paths with actual screenshots from your project.

---

# 🧪 Testing

The project includes backend testing for core functionality.

To run the test suite:

```bash
npm test
```

Include a screenshot of the passing test results in the `screenshots/` folder and reference it here.

---

# 🤖 My AI Usage

### AI Tool Used

- ChatGPT

### How AI Assisted

AI was used responsibly throughout the development process to improve productivity while maintaining full understanding and ownership of the implementation.

It assisted with:

- Designing REST API endpoints
- Generating React component boilerplate
- Debugging backend and frontend issues
- Refactoring components for better code organization
- Implementing CRUD functionality
- Building search and filtering features
- Improving UI using Tailwind CSS
- Writing meaningful Git commit messages
- Preparing project documentation

### Reflection

AI significantly accelerated development by helping with debugging, code generation, and architectural suggestions. Every AI-generated solution was reviewed, adapted where necessary, manually integrated, and tested before becoming part of the final application. The project was developed with AI as a collaborative assistant rather than a replacement for understanding or implementation.

---

# 👩‍💻 Author

**Iqra Vadnagarwala**

---

# 📄 License

This project was developed as part of the **Incubyte Full Stack Developer Assessment** and is intended for educational and evaluation purposes.