# Basic CRUD Service

## Description

The Basic CRUD Service is a simple implementation of Create, Read, Update, and Delete (CRUD) operations for a `User` entity using NestJS. This service is designed to demonstrate how to build and expose basic CRUD functionalities in a modular and scalable way using the NestJS framework.

## Features

- **Create:** Add a new user to the in-memory storage.
- **Read:** Retrieve all users or a specific user by ID.
- **Update:** Modify the details of an existing user.
- **Delete:** Remove a user from the in-memory storage.

## Structure

- **UserService:** Encapsulates all the logic for handling CRUD operations.
- **UserController:** Exposes the CRUD operations via HTTP endpoints.
- **Unit Tests:** Comprehensive tests for `UserService` and `UserController` to ensure functionality and error handling.

## API Endpoints

- **POST /users:** Create a new user.
  - Request Body: `{ "name": "John Doe", "email": "john@example.com" }`
  - Response: `200 OK` with the created user object.

- **GET /users:** Retrieve all users.
  - Response: `200 OK` with an array of users.

- **GET /users/:id:** Retrieve a specific user by ID.
  - Response: `200 OK` with the user object.

- **PUT /users/:id:** Update a user's details.
  - Request Body: `{ "name": "Jane Doe", "email": "jane@example.com" }`
  - Response: `200 OK` with the updated user object.

- **DELETE /users/:id:** Delete a user by ID.
  - Response: `200 OK`.

## Running the Service

1. **Install dependencies:**
   ```bash
   npm install
2. **Run the service:**
   ```bash
   npm run start basic-crud-service
3. ***Run tests:**
   ```bash
   npm run test