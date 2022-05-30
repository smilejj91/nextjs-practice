FROM node:14.19.2-bullseye

RUN mkdir -p /home/app
WORKDIR /home/app

# install nextjs
RUN npx create-next-app app-test

# install tailwindcss
RUN yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
RUN npx tailwindcss init -p
RUN yarn add @heroicons/react

# install swr
RUN yarn add swr

EXPOSE 3000

WORKDIR /home/app/app-test

CMD [ "yarn", "dev" ]
