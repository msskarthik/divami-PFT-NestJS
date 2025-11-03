# 💰 Personal Finance Tracker - Backend (NestJS + MongoDB)

This is the backend service for the **Personal Finance Tracker MVP**, built using **NestJS** and **MongoDB (Mongoose)**.  
It handles authentication, transaction management, and budgeting APIs.

---

## 🚀 Features

- Google OAuth-based authentication  
- CRUD operations for **Transactions**
- Budget creation and tracking
- Dashboard summary (total income, expenses, remaining budget)
- MongoDB with Mongoose
- CORS enabled for frontend communication

---

## 🧱 Tech Stack

- **NestJS** (framework)
- **Mongoose** (ODM)
- **PassportJS (Google OAuth)**
- **Express.js**
- **TypeScript**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/msskarthik/divami-PFT-NestJS.git
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in `/server` directory:
```env
MONGODB_URI=mongodb+srv://<your-db-connection-string>
PORT=3000

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/redirect
```

### 4️⃣ Start the Server
```bash
npm run start:dev
```

Server runs at **http://localhost:3000**

---

## 📦 Folder Structure

```
server/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── user.schema.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── google.strategy.ts
│   ├── transactions/
│   │   ├── transactions.controller.ts
│   │   ├── transactions.service.ts
│   │   └── transactions.schema.ts
│   │   └── transaction.module.ts
│   ├── budget/
│   │   ├── budget.controller.ts
│   │   ├── budget.service.ts
│   │   └── budget.schema.ts
│   │   └── budget.module.ts
├── package.json
└── .env
```

---

## 🧾 API Endpoints

### 🔐 Auth
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/auth/google` | Redirect to Google login |
| GET | `/auth/google/redirect` | Callback for Google login |

### 💸 Transactions
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/transactions/:userId` | Get all user transactions |
| POST | `/transactions` | Add new transaction |
| PUT | `/transactions/:id` | Update a transaction |
| DELETE | `/transactions/:id` | Delete transaction |

### 📊 Budgets
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/budget/:userId` | Get user budgets |
| POST | `/budget` | Create budget |

### 🧠 Dashboard
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/transactions/summary/:userId` | Get monthly income vs expense summary |

---

## 🧠 Notes

- CORS is **enabled globally** to connect with React frontend at `http://localhost:3001`.
- Replace `userId` with actual user fetched from JWT or session in production.
- You can use MongoDB Atlas free tier for database hosting.

---
