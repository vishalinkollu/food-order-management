# 🍔 Food Order Management System

A full-stack real-time Food Ordering Application built using React.js, Node.js, Express.js, MongoDB Atlas, and Socket.io.

The application allows users to browse food items, add items to cart, place orders, and track order statuses in real-time.

---

# 🚀 Live Demo

## Frontend

https://vishalinkollu-food-order-management.vercel.app/

## Backend

https://food-order-management-bn8s.onrender.com

---

# 📌 Features

## 🛒 Food Ordering Features

* Browse food menu items
* Add items to cart
* Increase / decrease quantity
* Remove items from cart
* Dynamic total calculation
* Beautiful responsive UI

---

## ✅ Validations

### Frontend Validations

* Empty field validation
* Phone number validation
* Cart empty validation
* Prevent negative quantities
* Real-time error removal while typing

### Backend Validations

* Request payload validation
* Empty field validation
* Invalid phone validation
* Empty cart validation

---

# ⚡ Real-Time Order Tracking

Implemented using Socket.io.

Order statuses update automatically in real time:

1. Order Received
2. Preparing
3. Out for Delivery
4. Delivered

Each status updates every 2 seconds.

After delivery completion:

* Success toast is shown
* User is redirected back to home page automatically

---

# 🎨 UI/UX Enhancements

* Beautiful responsive design
* Modern cart drawer UI
* Gradient buttons
* Toast notifications
* Loading states
* Smooth transitions
* Mobile responsive layout
* Auto cart updates

---

# 🧪 Testing

Implemented testing using:

* Jest
* React Testing Library
* Supertest

### Tested Features

* Component rendering
* Add to cart functionality
* Checkout validations
* API validation handling

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Context API
* React Router DOM
* Axios
* Socket.io Client
* React Hot Toast
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Socket.io
* CORS
* dotenv

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

food-order-management/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── socket/
│   │   ├── styles/
│   │   └── __tests__/
│   │
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── tests/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md


---

# ⚙️ Environment Variables

## Frontend (.env)

```env
REACT_APP_API_URL=https://food-order-management-bn8s.onrender.com
```

---

## Backend (.env)

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_URI
```

---

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/vishalinkollu/food-order-management.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# ▶️ Running Locally

## Start Backend

```bash
cd backend
npm run dev
```

---

## Start Frontend

```bash
cd frontend
npm start
```

---

# 🌐 Deployment

## Frontend Deployment

Deployed on Vercel.

## Backend Deployment

Deployed on Render.

## Database

MongoDB Atlas Cloud Database.

---

# 📱 Responsive Design

The application is fully responsive and supports:

* Mobile Devices
* Tablets
* Desktop Screens

---

# 🔄 Real-Time Workflow

## Order Placement Flow

1. User places order
2. Order saved in MongoDB Atlas
3. Socket.io emits order updates
4. Frontend listens to updates
5. Order status changes automatically
6. Delivery completion toast shown
7. User redirected to home page


# ⚠️ Note

Render free tier may take 30–60 seconds for the first API request if the server is sleeping.

This is expected behavior on free hosting plans.

---

# 👨‍💻 Author

## Vishal Inkollu

GitHub:
https://github.com/vishalinkollu

---

# ⭐ Conclusion

This project demonstrates:

* Full-stack development
* Real-time communication
* REST API integration
* MongoDB database handling
* Socket.io implementation
* Deployment workflows
* Frontend state management
* Responsive UI/UX
* Validation handling
* Testing practices

---
