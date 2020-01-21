# API-Auth-Node-Sequelize

A simple API for JWT user authentication.

### Requirements

- [Nodejs](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Start Server

- Clone the repository:

```
$ git clone https://github.com/jucelinodev/api-auth-node-sequelize.git
```

- Enter directory

```
$ cd /api-auth-node-sequelize
```

- To install all dependencies, you must run the following command:

```
$ npm install
```

- Change .env.exemple to .env and enter valid data for database connection and other settings:

```
APP_URL=
PORT=

# Auth

APP_SECRET=

# Database

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

```

- Create a database in your development environment:

```
$ npx sequelize db:create
```

- To run the migrations:

```
$ npx sequelize db:migrate
```

- Generate build:

```
$ npm run build
```

- To run project:

```
$ npm start
```