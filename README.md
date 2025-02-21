# MERN Stack User CRUD

This project is a study repository for the MERN (MongoDB, Express, React, Node.js) stack, based on the YouTube course by AngeloDev. It implements a simple CRUD (Create, Read, Update, Delete) application for managing users.

## Technologies Used

* **MongoDB**: NoSQL database to store user data

* **Express.js**: Backend framework for handling API requests

* **React.js**: Frontend library for building the user interface

* **Node.js**: Runtime environment for executing JavaScript on the backend

* **Docker**: Containerization for easy deployment and dependency management
* **Bootstrap**: UI fra
mework for styling the frontend

* **Axios**: HTTP client for making API requests

# Project Structure
```
MernProjectUsers/
│-- backend/      # Express.js backend with API routes
│-- frontend/     # React.js frontend with user management interface
│-- docker-compose.yml  # Docker configuration file
```

## Prerequisites

* **Docker** and Docker Compose installed

* **Node.js** and npm installed (if running outside Docker)

## Installation & Setup

### Using Docker (Recommended)

1. Clone the repository:
    ```
    git clone https://github.com/Julian0399/MernProjectUsers.git
    cd MernProjectUsers
    ```
2. Clone the repository:
    ```
    docker-compose up --build
    ```
3. The application will be available at:

* **Backend**: http://localhost:4000

* **Frontend**: http://localhost:5173

* **MongoDB**: mongodb://localhost:27017/datausers

## Running Manually (Without Docker)

1. Start MongoDB locally or using a cloud provider (e.g., MongoDB Atlas).

2. Install and run the backend:
    ```
    cd backend
    npm install
    npm run dev
    ```
3. Install and run the frontend:
    ```
    cd frontend
    npm install
    npm run dev
    ```
## API Endpoints (Backend)
| Method  | Endpoint       | Description       |
| --------| ---------------|-------------------|
| GET     | /api/users     | Get all users     |
| POST    | /api/users     | Create a new user |
| GET     | /api/users/:id | Get user by ID    |
| PUT     | /api/users/:id | Update user by ID |
| DELETE  | /api/users/:id | Delete user by ID |

## Environment Variables

The backend requires a .env file in the backend/ directory. Example:
```
MONGODB_URI = mongodb://mongodb:27017/datausers
```
### Contributors

This project is based on the MERN stack course by AngeloDev. Feel free to contribute by improving the code, adding features, or reporting issues.
