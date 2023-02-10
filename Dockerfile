FROM node:18-alpine AS build

WORKDIR /opt/node_app

FROM build as production_buildstage

COPY package.json yarn.lock ./
RUN yarn --ignore-optional --network-timeout 600000

COPY . .

ARG NODE_ENV=production
RUN yarn build:app:docker

FROM nginx:1.21-alpine as production

COPY --from=production_buildstage /opt/node_app/build /usr/share/nginx/html

HEALTHCHECK CMD wget -q -O /dev/null http://localhost || exit 1

FROM build as development