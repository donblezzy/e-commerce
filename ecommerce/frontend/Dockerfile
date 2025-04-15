FROM node:latest AS web-build
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./ ./frontend
RUN cd frontend && npm install && npm run build --prod

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=web-build /home/node/app/frontend/dist/frontend/ /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4200
EXPOSE 3000