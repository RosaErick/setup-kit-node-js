FROM node:18.13.0 as BUILDER
LABEL maintainer="Erick Rosa"


WORKDIR  /usr/src/app

COPY package*.json ./
RUN npm install


COPY src ./src

FROM node:18.13.0

ARG NODE_ENV


WORKDIR  /usr/src/app


COPY --from=BUILDER /usr/src/app/ ./ 

EXPOSE 3000

CMD [ "npm", "start" ]

