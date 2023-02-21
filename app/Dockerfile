FROM node:lts as dependencies
WORKDIR /src
COPY . ./
RUN yarn install
RUN npm run build
EXPOSE 3000
CMD ["yarn", "dev"]
