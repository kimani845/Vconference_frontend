FROM node:16-alpine
WORKDIR /the/workdir/Vconference_frontend

COPY package*.json ./the/workdir/Vconference_frontend/
RUN npm install

COPY . /the/workdir/Vconference_frontend/
CMD [ "npm", "start" ]