# BASE #############################################################################################
FROM node:16.13-alpine AS base

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN echo 'Finished @base step'

# BASE2 ############################################################################################
# FROM base AS base2

# RUN echo 'Finished @base2 step'

# BUILD ############################################################################################
FROM base AS build

RUN yarn build

RUN echo 'Finished @build step'
