FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# COPY package*.json ./
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run prisma-generate

EXPOSE 4001

# ENV NODE_ENV="DEV"
# ENV DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ddd-template?schema=public"

CMD ["npm", "run", "dev"]
