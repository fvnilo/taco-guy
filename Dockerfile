FROM node:10-alpine

RUN mkdir src
ADD src ./src

ADD package-lock.json .
ADD package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]