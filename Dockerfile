FROM node:alpine

WORKDIR /usr/local/app

COPY . .

EXPOSE 3020

RUN cd web && \
    npm install && \
    npm run build


RUN cd server && \
    npm install && \
    npm run build

RUN cp -r web/dist server/web

CMD [ "cd", "server"  ,"&&",,"npm", "run", "start" ]