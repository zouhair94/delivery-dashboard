FROM nginx:latest

ADD ./dist /usr/share/nginx/html

EXPOSE 80

CMD ['nginx', '-g', 'daemon off;']