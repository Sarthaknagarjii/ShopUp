# SHOPUP - E-commerce Website for Watches

## Introduction

**SHOPUP** is a full-featured e-commerce platform dedicated to selling watches, developed using the **MERN stack**. It provides an intuitive shopping experience and includes secure payment integration.

## Features

1. User authentication and authorization (JWT-based login/signup).
2. Admin dashboard for managing product inventory (CRUD operations).
3. Product catalog with filtering and search functionalities.
4. Shopping cart with add/remove items and real-time updates.
5. Integrated secure payment gateway for seamless transactions.
6. Responsive design, optimized for mobile and desktop.

## Technologies Used

- **Frontend:** React.js, Material-UI, Redux
- **Backend:** Node.js, Express.js, MongoDB
- **Payment Gateway:** Stripe/PayPal

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed or access to MongoDB Atlas
- Stripe/PayPal API credentials (for payment gateway)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/SHOPUP.git
   cd SHOPUP
   ```

2. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `backend` directory with the following:
     ```
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     PAYPAL_CLIENT_ID=your_paypal_client_id
     ```

5. Start the backend server:

   ```bash
   cd ../backend
   npm run dev
   ```

6. Start the frontend server:

   ```bash
   cd ../frontend
   npm start
   ```

7. The application should now be running on:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Usage

- Access the application at `http://localhost:3000`.
- Use the admin dashboard to manage products.
- Test the payment gateway using Stripe or PayPal sandbox credentials.

