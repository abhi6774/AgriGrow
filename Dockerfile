FROM node:alpine

WORKDIR /usr/local/app

COPY . .

RUN cd web

RUN npm install

RUN npm run build

RUN cp -r dist ../server

RUN cd ../server

RUN npm install

RUN npx tsc

CMD [ "npm", "run", "start" ]