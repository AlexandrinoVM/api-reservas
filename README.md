# Booking API
This project is a booking system API built with Node.js, Express, and Sequelize. It allows users to create, manage, and view service bookings with payment integration using Stripe.

## Features
User authentication with JWT (JSON Web Token)
Booking creation and management
Stripe integration for payment processing
Time slot conflict checking between services
## Requirements
To run this project locally, you will need:

- Node.js
- MySQL
- Stripe Account

 ## Installation

1. Clone the repository:
```
git clone https://github.com/AlexandrinoVM/api-reservas.git
```
2. Navigate to the project directory:
```
cd booking-api
```
3. Install dependencies:
```
npm install
```
4. Create a .env file in the project root and add the following environment variables:
```
PORT=3000
JWT_SECRET=your_jwt_secret
DB_NAME=your_database_name
DB_USER=root
DB_PASSWORD=your_database_password
DB_HOST=localhost

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```
5. create database with mysql:
```
create database your-database-name;
```
6. Start the server:
```
npm run dev
```
The API will be available at http://localhost:3000.

## Api Documentation

```
http://localhost:Your-Port/api-docs
```

## API Endpoints
### user 
- **POST** `/user`: Register a new user.
- **POST** `/user/login`: Authenticate a user and return a JWT token.
- **GET** `/user`: get all infos about the user.
- **PUT** `/user`: update user data.
- **DELETE** `user/:id`: delete user.

### Bookings
- POST `/booking`: Create a new booking.
- DELETE `/bookings/:id`: Delete a booking.

### service
- **POST** `/service`: Create a new service.
- **GET** `/service`: get all services.
- **PUT** `/service`: update service.
- **DELETE** `service/:id`: delete service.


## Technologies Used
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JWT for authentication
- Stripe for payments

