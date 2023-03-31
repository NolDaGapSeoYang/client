FROM nginx

WORKDIR /app

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]