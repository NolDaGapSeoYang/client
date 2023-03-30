FROM node:16 as build

ARG VITE_API_URL=${VITE_API_URL}
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN export VITE_API_URL=${VITE_API_URL} && npm run build

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]