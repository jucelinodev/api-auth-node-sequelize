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

-To install all dependencies, you must run the following command:

```
$ npm install
```

- Create a database in your development environment


- Change .env.exemple to .env and enter valid data for database connection and other settings


- To run the migrations:

```
$ npx sequelize db:migrations
```

- Generate build:

```
$ npm run build
```

- To run project:

```
$ npm start
```