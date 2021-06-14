FROM node:alpine

ENV CI=true

WORKDIR /app

COPY package.json ./
RUN npm install
copy ./ ./

CMD ["npm", "start"]