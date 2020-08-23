FROM node:14.8 as build-deps

WORKDIR /usr/src/app
COPY package.json ./

RUN npm install
RUN npm install serve -g
COPY . ./
RUN npm run build

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]