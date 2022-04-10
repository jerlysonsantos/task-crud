FROM node:14-alpine as builder

WORKDIR /usr/task-crud

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
