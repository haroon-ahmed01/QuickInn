# QuickInn - MERN Stack Room Booking App

## Overview

QuickInn is a full-stack room booking application built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to browse rooms, filter based on features like bed type and AC, book rooms with online payment (via Razorpay), and receive email confirmations. Images are stored in S3, and emails are sent using Nodemailer and Gmail's App Password service.

---

## Features

### User-Side
- Browse and view available rooms
- Filter rooms by:
  - Bed type: Single / Double
  - AC / Non-AC
- Room images and dynamic pricing
- Online booking and payment using Razorpay
- Email booking confirmation

### Admin-Side
- Add, update, delete room listings
- View booking history
- Send emails or notifications to customers

---

## Tech Stack

### Frontend (React)
- React.js
- Tailwind CSS (for utility-based styling)
- Axios (for API calls)
- React Router (for routing)

### Backend (Node.js & Express)
- Express.js
- MongoDB (database)
- Mongoose (ODM for MongoDB)
- Razorpay API (payment gateway integration)
- S3 (image storage)
- Nodemailer + Gmail App Password (mail service)

---

## How It Works

1. **Frontend (React)**
   - `RoomsList.jsx`: Displays room data with filters
   - `BookingPage.jsx`: Handles booking details and payment initiation
   - `PaymentSuccess.jsx`: Displays confirmation after Razorpay payment

2. **Backend (Node.js + Express)**
   - `/api/rooms`: CRUD routes to get and manage rooms
   - `/api/bookings`: Stores booking data in MongoDB
   - `/api/payment`: Razorpay integration (create orders and verify payment)
   - `/api/mail`: Sends booking confirmation email using Nodemailer

3. **Database (MongoDB)**
   - Stores room data, user bookings, and payment information

4. **S3 API**
   - Room images are uploaded to S3 and stored with public URLs

5. **Razorpay Integration**
   - Payment is initiated from frontend
   - Backend verifies payment using Razorpay’s secret key

6. **Nodemailer + Gmail App Password**
   - Email is sent to user with booking details after successful payment

---

## Setup Instructions

```bash 
1. Clone the Repository
git clone https://github.com/your-username/quickinn.git
cd quickinn

Set up the Backend:
cd server
npm install

Create .env file inside /server:

PORT=5000
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_s3_bucket_name
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

then Run:
npm run dev

3. Set up the Frontend:

cd client
npm install
npm run dev

I'm currently working on QuickInn, a full-stack room booking application built using the MERN stack, 
Tailwind CSS, Razorpay for payments, Nodemailer with Gmail for email services, and WhatsApp Cloud API.
The app lets users browse, filter, and book rooms with online payment and confirmation. 
It will also generate invoices during check-in and checkout for detailed payment records. 
This is an ongoing project, and I’m actively working to integrate AWS services 
and WhatsApp Cloud API for enhanced functionality and communication. Updates will be released soon.
