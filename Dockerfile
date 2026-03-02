FROM --platform=${BUILDPLATFORM} node:22 AS build

WORKDIR /opt/node_app


FROM build as production_buildstage

COPY package.json yarn.lock ./
COPY excalidraw-app/package.json ./excalidraw-app/
COPY packages/excalidraw/package.json ./packages/excalidraw/

# do not ignore optional dependencies:
# Error: Cannot find module @rollup/rollup-linux-x64-gnu
RUN --mount=type=cache,target=/root/.cache/yarn \
    npm_config_target_arch=${TARGETARCH} yarn --network-timeout 600000

COPY . .


ARG NODE_ENV=production

RUN npm_config_target_arch=${TARGETARCH} yarn build:app:docker


FROM nginxinc/nginx-unprivileged:1.29-alpine3.22-slim as production

COPY docker/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=production_buildstage /opt/node_app/excalidraw-app/build /usr/share/nginx/html

HEALTHCHECK CMD wget -q -O /dev/null http://localhost || exit 1

FROM build as development
