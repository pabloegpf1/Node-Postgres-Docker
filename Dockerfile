FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g
RUN npm install knex -g

COPY . .

EXPOSE 3000

CMD ["nodemon"]