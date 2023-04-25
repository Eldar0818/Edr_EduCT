### Edr_EduCT

Edr_EduCT is a backend application built with Express.js that handles CRUD operations for students, teachers, staffs, and courses in our school. It also implements JSON Web Token (JWT) authentication and authorization for secure access to the application.

### Features

1. Create, read, update, and delete (CRUD) operations for students, teachers, staffs, and courses
2. Secure authentication and authorization with JSON Web Tokens (JWT)
3. Custom middleware for verifying JWT tokens and handling errors
4. Modular design for easy maintainability and scalability

### Technologies Used

1. Node.js
2. Express.js
3. Mysql
4. JSON Web Tokens (JWT)

### Getting Started

1. Clone the repository to your local machine: git clone https://github.com/Eldar0818/Edr_EduCT.git

2. Install the dependencies: npm install

3. Set up your environment variables by creating a .env file in the root directory with the following variables:

DEV_PORT=
DEV_HOST=

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

### CRUD Operations

The following routes are available for performing CRUD operations:

/api/students: CRUD operations for students
/api/teachers: CRUD operations for teachers
/api/staffs: CRUD operations for staffs
/api/courses: CRUD operations for courses
Each route supports the following HTTP methods:

GET: Retrieve all records or a single record by ID
POST: Create a new record
PUT: Update an existing record by ID
DELETE: Delete a record by ID
For example, to retrieve all students, send a GET request to /api/students with the JWT token in the Authorization header.