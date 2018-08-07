FROM node:8-alpine

WORKDIR /var/news-demo

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "run", "dev"]
