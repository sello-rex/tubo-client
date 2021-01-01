FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm install react-scripts -g --silent
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM mhart/alpine-node:11 AS builder
# WORKDIR /app
# COPY . .
# RUN yarn run build

# FROM mhart/alpine-node
# RUN npm i -g serve
# WORKDIR /app
# COPY --from=builder /app/build .
# CMD ["serve", "-p", "80", "-s", "."]