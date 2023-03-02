FROM node:lts as dependencies
WORKDIR /src
COPY . ./
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
EXPOSE 3000
CMD ["yarn", "dev"]
