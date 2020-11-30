FROM node:14.5

ENV NPM_CONFIG_LOGLEVEL info

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY . /home/node/app/

USER node

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "bin/www" ]

EXPOSE 3000
