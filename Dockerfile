FROM node:10-alpine

RUN mkdir -p tacoguy/src
ADD src /tacoguy/src

ADD package-lock.json /tacoguy
ADD package.json /tacoguy

WORKDIR /tacoguy

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]