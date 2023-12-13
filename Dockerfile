FROM node:20

WORKDIR /app

RUN npm install -g pnpm@8.6.1 @nestjs/cli

COPY package.json pnpm-lock.yaml ./

RUN mkdir -p /app/.pnpm-store

RUN pnpm install --frozen-lockfile --cache /app/.pnpm-store

COPY . .
RUN npx prisma generate
RUN npm run build
COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh
ENTRYPOINT [ "/bin/bash", "-c" ]

CMD [ "./wait-for-it.sh" , "localhost:5433" , "--strict" , "--timeout=300" , "--" ,"npm", "run", "start:dev" ]