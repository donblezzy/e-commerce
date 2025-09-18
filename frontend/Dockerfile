# Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port (React app default is 80 when using nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
