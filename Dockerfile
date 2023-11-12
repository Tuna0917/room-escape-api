FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g ts-node-dev

COPY . .

EXPOSE 8080

CMD ["ts-node-dev", "--poll", "--respawn", "--transpile-only", "index.ts"]