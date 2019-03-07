FROM node:7
LABEL maintainer="godfrey_tutu@yahoo.com"
ARG port=9000
ENV PORT=$PORT
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ADD index.js /app
CMD node index.js
EXPOSE $PORT