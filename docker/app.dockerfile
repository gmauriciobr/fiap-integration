FROM nginx:1.21.3-alpine
COPY ./webpack /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
# CMD [“nginx”, “-g”, “daemon off;”]