FROM node:10-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . /home/node/app
EXPOSE 3000
CMD [ "node", "./bin/www" ]