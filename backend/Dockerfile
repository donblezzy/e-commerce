# Stage 1: Build dependencies
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Copy source and run
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY . .

EXPOSE 4000
CMD ["node", "server.js"]
