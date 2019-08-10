# Node-Postgres-Docker

This is a template for future projects based on Node.js with Express and Postgres. 

The idea is to use docker-compose to create 2 microservices (Node server and Postgres db) and to connect both, all in a single command. 

The volumes defined in the .yml file make it possible to use nodemon to edit the code and see the chages in real time while the container runs. This is very useful during development.

## How to run

1. Install Docker.
2. Download or clone this repo.
3. cd into /Node-Postgres-Docker
4. Create a file and name it ".env" in the root directory
5. Add enviroment variables inside .env file in this format (set the credentials as you wish):

        DB_NAME=postgres
        DB_USER=postgres
        DB_PASSWORD=postgres

6. Run "docker-compose up"
7. The app will run in port 3000
