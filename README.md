# Node-Postgres-Docker [![Build Status](https://travis-ci.org/pabloegpf1/Node-Postgres-Docker.svg?branch=master)](https://travis-ci.org/pabloegpf1/Node-Postgres-Docker)

This is a template for future projects based on Node.js with Express and Postgres. 

The idea is to use docker-compose to create 2 microservices (Node server and Postgres db) and connect both, all in a single command. 

The volumes defined in the .yml file makes it possible to use nodemon to edit the code and see the chages in real time while the container is running. This is very useful during development.

## How to run

1. Install [Docker](https://docs.docker.com/install/) and [Docker-Compose](https://docs.docker.com/compose/install/).
2. Download or clone this repo.
3. cd into /Node-Postgres-Docker
4. Create a file and name it ".env" in the root directory
5. Add enviroment variables inside .env file in this format (set the credentials as you wish):

        DB_NAME=postgres
        DB_USER=postgres
        DB_PW=postgres
        DB_PORT=5432 // Optional - defaults to 5432

6. run:
```
docker-compose run web npm run migrate
```
7. Type 'y' when asked to remove a container. This will run all the migrations and must be done only the first time. 
Then:
```
docker-compose up -d
```
8. The app will run in port 3000
