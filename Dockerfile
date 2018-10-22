FROM node:alpine

RUN mkdir -p /app/src
WORKDIR /app

RUN npm config set unsafe-perm true && \
 npm install -g yarn

ADD package.json yarn.lock /app/

RUN yarn install

COPY . .

EXPOSE 4321

CMD [ "yarn", "server" ]
