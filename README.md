<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======
# Hdm-test-backend
backend repo
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

---

Feel free to modify this as per your project specifics! Let me know if you need it in PDF format as well.
>>>>>>> d2c980db3f407275b0554a8eb2b17b02872507d4
