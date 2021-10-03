FROM node:16.7.0-alpine3.14
WORKDIR /app
COPY package*.json /app/
RUN [ "npm", "i" ]
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]