# Node-Postgres-Docker

This is a template for future projects based on Node.js with Express and Postgres. 

The idea is to use docker-compose to create 2 microservices (Node server and Postgres db) and to connect both, all in a single command. 

The volumes defined in the .yml file make it possible to use nodemon to edit the code and see the chages in real time while the container runs. This is very useful during development.

## How to run

1. Install Docker.
2. Download or clone this repo.
3. cd into /Node-Postgres-Docker
4. Run "docker-compose up"
5. The app will run in port 3000
