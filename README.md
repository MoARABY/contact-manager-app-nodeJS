<h1>Contact Management System - Backend</h1>  
This repository contains the backend code for a contact management system built using Node.js, Express, and MongoDB.

<h2>Features</h2> 
CRUD operations for managing contacts
User authentication and authorization using JWT and bcrypt
Middleware for request validation and error handling
Separation of concerns using controllers, models, and routes

<h2>Technologies Used</h2> 
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
  <li>JSON Web Tokens (JWT) for authentication</li>
  <li>bcrypt for password hashing</li>
  <li>dotenv</li>
  <li>express-async-handler</li>
  <li>mongoose</li>
  <li>nodemon</li>
</ul>

<h2>Setup Instructions</h2>

<ul>
  <li> >Clone the repository:</li>
  <li> >> bash</li>
  <li> >> git clone https://github.com/your-username/contact-management-backend.git</li>
</ul>

Install dependencies:
<ul>
  <li> > bash</li>
  <li> > cd contact-management-backend</li>
  <li> > npm install</li>
</ul>

<ul>
  <li> > Create a .env file in the root directory.</li>
  <li> > Add the following environment variables:</li>
  <li> >> makefile</li>
  <li> >> PORT=3000</li>
  <li> >> MONGODB_URI=your-mongodb-connection-string</li>
  <li> >> JWT_SECRET=your-jwt-secret</li>
</ul>
Configure environment variables:
<ul>
  <li> > Start the server:</li>
  <li> >> bash</li>
  <li> >> npm start</li>
</ul>

<h2>API Endpoints</h2>
<ul>
  <li>POST /api/users/register: Register a new user.</li>
  <li>POST /api/users/login: Login with email and password to get JWT token.</li>
  <li>GET /api/contacts: Get all contacts.</li>
  <li>POST /api/contacts: Create a new contact.</li>
  <li>GET /api/contacts/:id: Get a contact by ID.</li>
  <li>PUT /api/contacts/:id: Update a contact by ID.</li>
  <liDELETE /api/contacts/:id: Delete a contact by ID.></li>
</ul>

<h2>Folder Structure</h2>
<ul>
  <li>middlewares/: Custom middleware functions.</li>
  <li>controllers/: Request handlers for each route.</li>
  <li>models/: Mongoose schemas and models.</li>
  <li>routes/: Express routes for different endpoints.</li>
</ul>

<h2>Contributing</h2> 
Contributions are welcome! Please fork the repository and submit a pull request.

<h2>License</h2> 
This project is licensed under the MIT License.
