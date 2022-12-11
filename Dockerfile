FROM node:19
WORKDIR /src/
COPY package.json /src/
COPY . /src/
RUN npm i 
RUN npm i @vue/cli@3.7.0 -g vue vue-router@4 vuex
EXPOSE 8080
CMD ["npm", "run", "serve"]