<<<<<<< HEAD
<h1 align="center">RTRS Back-end</h1>

<p align="center">
    <a href="#project-structure">Project Structure</a> •
    <a href="#technologies">Technologies</a> •
    <a href="#Diagrams">Diagrams</a> •
    <a href="#api-documentation">API Documentation</a>
</p>

## Project Structure

```
back-end\
 |--config\            # Config module which calls given environment variables             
 |--logs\              # Log files             
 |--src\
    |--__tests__\         # Unit testing
    |--controllers\       # Route Handlers/Controllers for API endpoints
    |--DAOs\              # Data Access Objects (Layer for database querying)
    |--db\                # Sequelize ORM files (data layer)
       |--migrations\         # Sequelize database migrations
       |--models\             # Sequelize database models
       |--seeders\            # Sequelize database seeders
    |--middleware\        # Custom express middlewares
    |--routes\            # Definition of API endpoints
    |--services\          # Business logic
    |--utils\             # Helpers/Utility classes and functions
    |--app.js          # App entry point
 |--.env               # Environment variables
 |--.gitignore         # Tooling config file
 |--.sequelizerc       # Tooling config file
 |--package-lock.json  # Dependency managment
 |--package.json       # Dependency managment
 |--README.md          # About
 ```

 ## Technologies

 - **Relational Database**: [MySQL](https://mysql.com/)
 - **Runtime Environment**: [Node.js](https://nodejs.org/)
 - **Back-end Node.js framework**: [Express.js](https://expressjs.com/)
 - **Object-relational mapper (ORM)**: [Sequelize](https://sequelize.org/)
 - **Logging**: [winston](https://github.com/winstonjs/winston)
 - **Unit testing**: [Jest](https://jestjs.io/)
 - **Dependency managment**: [npm](https://npmjs.com/)
 - **Environment variables**: [dotenv](https://github.com/motdotla/dotenv)
 - **Cross-Origin Resource-Sharing**: [cors](https://github.com/expressjs/cors)


## Diagrams

### Entity Relationship Diagram

*Entity Relationship Diagram describes all relationships between tables within a database and also their column details.*

<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/erd-rtrs.png" />
<br>

The database has 3 tables.

Customers table holds all customers which have made reservations in the system. 
It has columns for: 
First Name, Last Name, Phone number, Email address.


Reservations table describes all registered reservations in the system.
It has columns for: 
Reservation Date, Reservation Time, Reservation Status,
Number of People and foreign key for customer.


Tables table describes all registered restaurant tables in the restaurant which the system manages.
It has columns for:
Table name, Table capacity (number of seats), Table status (is it occupied) and foreign key for reservation.


### Back-end Architecture

The system uses Three-tier architecture which divides the system into three main layers. 

The first one is the API Layer which handles all Application Programming Interface logic such as API endpoint definitions, middleware functions, API endpoint/route handlers etc..

The second layer named "Service layer" handles all business logic.

The third layer "Data Access Layer" handles all logic which accomplishes communication between the database and the system.

<img src="https://github.com/slavyanHristov/restaurant-table-reservation-system/blob/feature/readme/screenshots/backend-architecture.png" height="500"/>
<br>

## API Documentation

#### Entry Endpoint

<details>
<summary><code>GET</code> <code>http://localhost:5000/v1/api<b>/</b></code> <code>(Displays introduction about the API)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `text/html`           |`Welcome to Restaurant Table Reservation System's API! 🎉`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: text/html' http://localhost:5000/api/v1/
> ```
</details>

#### API Info

<details>
<summary><code>GET</code> <code>http://localhost:5000/v1/api<b>/info</b></code> <code>(Displays info about the API)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{message:"You can learn more about the API and the whole project in the github repo! 😀", link:"https://github.com/slavyanHristov/restaurant-table-reservation-system"}`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:5000/api/v1/info
> ```
</details>

#### Get All Tables

<details>
<summary><code>GET</code> <code>http://localhost:5000/v1/api<b>/tables</b></code> <code>(Displays all restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true, collection: [tables...]}`|
> | `404`         | `application/json`           |`{success: false, message: "No restaurant tables inserted in the database."}`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:5000/api/v1/info
> ```
</details>

#### Register Table

<details>
<summary><code>POST</code> <code>http://localhost:5000/v1/api<b>/tables</b></code> <code>(Inserts table in DB)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `201`         | `application/json`           |`{success: true, message:"Table successfully registered in the restaurant!", item: table,}`|
> | `400`         | `application/json`           |`{status: 400, message: "Please fill in all fields!",}`|

##### Example cURL
> ```javascript
>  curl -X POST http://localhost:5000/api/v1/tables -d @filename
> ```
</details>

#### Get All Reservations

<details>
<summary><code>GET</code> <code>http://localhost:5000/v1/api<b>/reservations</b></code> <code>(Displays all reservations)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true, collection: [reservations...]}`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:5000/api/v1/reservations
> ```
</details>

#### Register Reservation

<details>
<summary><code>POST</code> <code>http://localhost:5000/v1/api<b>/reservations</b></code> <code>(Registers reservation)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `201`         | `application/json`           |`{success: true, message: "Successfully registered the reservation!"}`|
> | `400`         | `application/json`           |`{success: false, message: "Please fill in all fields!"}`|
> | `400`         | `application/json`           |`{success: false, message: "ERROR: Given time is in the past!"}`|
> | `400`         | `application/json`           |`{success: false, message: "Reservation must be made at least an hour before closing time (12:00 AM)"}`|
> | `400`         | `application/json`           |`{success: false, message: "You can't make reservation before opening time! (11:00 AM)"}`|

##### Example cURL
> ```javascript
>  curl -X POST http://localhost:5000/api/v1/reservations -d @filename
> ```
</details>

#### Edit Reservation

<details>
<summary><code>PATCH</code> <code>http://localhost:5000/v1/api<b>/reservations/:id</b></code> <code>(Edits reservation details)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true,message:"Successfully updated the reservation!",item: reservation}`|
> | `400`         | `application/json`           |`{success: false, message: "ERROR: Given time is in the past!"}`|
> | `400`         | `application/json`           |`{success: false, message: "Reservation must be made at least an hour before closing time (12:00 AM)"}`|
> | `400`         | `application/json`           |`{success: false, message: "You can't make reservation before opening time! (11:00 AM)"}`|
> | `404`         | `application/json`           |`{success: false, message: "Reservation not found!",}`|

##### Example cURL
> ```javascript
>  curl -X PATCH http://localhost:5000/api/v1/reservations/1 -d @filename
> ```
</details>

#### Cancel Reservation

<details>
<summary><code>DELETE</code> <code>http://localhost:5000/v1/api<b>/reservations/:id</b></code> <code>(Deletes given reservation)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true, message:"Successfully canceled the reservation!", item: reservation}`|
> | `400`         | `application/json`           |`{success: false, message: "Given reservation doesn't exist!"}`|

##### Example cURL
> ```javascript
>  curl -X DELETE http://localhost:5000/api/v1/reservations/1
> ```
</details>

#### Free Table

<details>
<summary><code>DELETE</code> <code>http://localhost:5000/v1/api<b>/tables/:id</b></code> <code>(Deletes given reservation)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true, message: "Successfully freed the chosen table!", item: info,}`|
> | `404`         | `application/json`           |`{success: false,message: "Restaurant table not found!",}`|

##### Example cURL
> ```javascript
>  curl -X DELETE http://localhost:5000/api/v1/tables/1
> ```
</details>

#### Choose Table

<details>
<summary><code>POST</code> <code>http://localhost:5000/v1/api<b>/reservations/choose-table/:id</b></code> <code>(Selects table for reservation)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`{success: true, message: "Successfully chosen your table!", item: info}`|
> | `404`         | `application/json`           |`{success: false, message: "Reservation not found!"}`|
> | `400`         | `application/json`           |`{success: false, message: "Booking a table is only available on the reservation date!"}`|
> | `400`         | `application/json`           |`{success: false,message: "You've already reserved a table! Please make a new reservation."}`|
> | `400`         | `application/json`           |`{success: false, message: "You've missed the reservation date and time! Please make a new reservation.",}`|
> | `400`         | `application/json`           |`{success: false, message: "Given table is already reserved!",}`|
> | `400`         | `application/json`           |`{success: false, message: "Reservation's party size is too big for this table!"}`|

##### Example cURL
> ```javascript
>  curl -X POST http://localhost:5000/api/v1/reservations -d @filename
> ```
</details>
=======
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
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
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
>>>>>>> ac111adc27fa93221aeb6530397f02f54b70e7e9
