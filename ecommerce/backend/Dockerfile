FROM node:latest AS backend-build
WORKDIR /usr/src/app
COPY ./ ./backend/
RUN cd ecommerce && npm install

FROM node:latest
WORKDIR /usr/src/app/
COPY --from=backend-build /usr/src/app/backend/ ./
RUN ls
EXPOSE 4000
CMD ["/bin/sh", "-c", "cd /usr/src/app/ && npm start"]
# Test3
