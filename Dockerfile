FROM node:20

WORKDIR /app

RUN npm install -g pnpm@8.6.1 @nestjs/cli

COPY package.json pnpm-lock.yaml ./

RUN mkdir -p /app/.pnpm-store

RUN pnpm install --frozen-lockfile --cache /app/.pnpm-store

COPY . .
RUN npx prisma generate
RUN npm run build

CMD ["npm", "run", "start:dev" ]