FROM ubuntu:latest
RUN apt update
Run apt -y install nodejs
RUN apt -y install npm
RUN apt -y install curl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]