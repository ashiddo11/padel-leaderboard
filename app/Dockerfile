FROM node:lts as dependencies
WORKDIR /src
COPY . ./
RUN rm -rf node_modules
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["yarn", "dev"]
