FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm

RUN npm install -g ts-node-dev

RUN pnpm i

COPY . .

EXPOSE 8080

CMD ["ts-node-dev", "--poll", "--respawn", "--transpile-only", "index.ts"]