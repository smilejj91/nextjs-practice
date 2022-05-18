FROM node:14.19.2-bullseye

RUN mkdir -p /home/app
WORKDIR /home/app

RUN yarn add react react-dom next

COPY app/package.json /home/app/package.json
COPY app/pages /home/app/pages

EXPOSE 3000

CMD [ "yarn", "dev" ]
