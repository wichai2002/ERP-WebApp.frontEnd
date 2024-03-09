FROM node:lts-alpine

ENV NODE_ENV=developmemt
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --developmemt --silent && mv node_modules ../
COPY . .
EXPOSE 80
EXPOSE 8082

RUN chown -R node /usr/src/app
USER node

CMD ["npm", "run", "serve"]