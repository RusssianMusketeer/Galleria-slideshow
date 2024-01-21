FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run" , "preview" ]