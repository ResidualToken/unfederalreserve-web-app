# stage1 - build react app first
FROM cr.webdevelop.us/yarn:latest as build

ADD . /unfederalreserve

WORKDIR /unfederalreserve

RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.17.8-alpine

COPY --from=build /unfederalreserve/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
