Here’s a structured `README.md` file for the backend part of your **Todo List** project.

---

# Todo List Backend (NestJS)

This repository contains the backend for the **Todo List** application, built using **NestJS**, **Prisma ORM**, and **MySQL**. It provides REST API endpoints for managing tasks (Create, Read, Update, Delete).

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development Notes](#development-notes)
- [Troubleshooting](#troubleshooting)

---

## Technologies Used

- **NestJS**: Framework for building efficient and scalable server-side applications.
- **Prisma ORM**: Database ORM to work with MySQL for managing the database.
- **MySQL**: Relational database used to store task information.
- **Docker**: (Optional) Used to run MySQL container if not installed locally.

---

## Prerequisites

Before setting up the backend, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) >= 14.x
- [Yarn](https://yarnpkg.com/) (Package Manager)
- [MySQL](https://www.mysql.com/) (Or use Docker to run MySQL container)
- [Docker](https://www.docker.com/) (If you want to run MySQL using Docker)

---

## Environment Setup

1. **Clone the Repository**:

   ```bash
   git clone <backend-repo-url>
   cd backend
   ```

2. **Install Dependencies**:

   After cloning the repository, install the necessary packages using **Yarn**:
   ```bash
   yarn install
   ```

3. **Set up Environment Variables**:

   Copy the `.env.example` file to `.env` and update the MySQL database credentials as needed.
   
   ```bash
   cp .env.example .env
   ```

   **.env example**:
   ```env
   MYSQL_DATABASE=todo_db
   MYSQL_USER=root
   MYSQL_PASSWORD=yourpassword
   MYSQL_ROOT_PASSWORD=yourpassword
   ```

---

## Database Setup

### Option 1: Using Docker for MySQL

If you don’t have MySQL installed locally, you can use Docker to run MySQL with the provided credentials.

1. **Run MySQL in Docker**:
   ```bash
   docker-compose up -d
   ```

2. **Confirm the MySQL container is running**:
   ```bash
   docker ps
   ```

### Option 2: Using Local MySQL

If you have MySQL installed locally, make sure it's running and configure the database according to the `.env` file. You may need to create the database manually:

```sql
CREATE DATABASE todo_db;
```

---

## Running the Application

1. **Run Prisma Migrations**:

   After setting up the database, run the Prisma migration to create the required tables.

   ```bash
   yarn prisma migrate dev
   ```

2. **Start the Development Server**:

   Once the migration is complete, start the NestJS backend server:
   ```bash
   yarn start:dev
   ```

The backend will be available at `http://localhost:3000`.

---

## API Endpoints

Here are the key API endpoints provided by the backend:

- **GET /tasks**: Fetch all tasks.
- **POST /tasks**: Create a new task.
- **PATCH /tasks/:id**: Edit an existing task.
- **DELETE /tasks/:id**: Delete a task.

---

## Development Notes

1. **Prisma ORM**: Prisma handles all the database interactions. Migrations must be run whenever there are changes to the schema.

2. **Folder Structure**:
   - `src/tasks/`: Contains the logic for the `Task` entity, including services, controllers, and data access.
   - `src/prisma/`: Handles Prisma setup and database connection.

3. **Task Features**:
   - **Create Task**: Add functionality in `tasks.service.ts` and `tasks.controller.ts` for creating new tasks.
   - **Edit Task**: Implement update logic in `PATCH /tasks/:id` endpoint.
   - **Delete Task**: Already implemented, wired to frontend.

---

## Troubleshooting

1. **Database Connection Issues**:
   - Ensure that MySQL credentials in the `.env` file are correct.
   - Make sure MySQL is running, either locally or via Docker.
   
2. **Prisma Migration Errors**:
   - Ensure that the database is properly set up.
   - Run `yarn prisma generate` if migration-related errors appear.

3. **NestJS Server Not Starting**:
   - Check for any missing dependencies by running `yarn install` again.
   - Ensure that the `.env` file is correctly set up with valid database credentials.

---

## License

This project is licensed under the MIT License.
