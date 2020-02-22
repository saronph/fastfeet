FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules

WORKDIR /home/node/api

COPY package.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]
