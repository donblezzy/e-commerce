FROM node:latest AS ui-build
WORKDIR /usr/src/app
COPY frontend/ ./frontend/
RUN cd frontend && npm install && npm run build

FROM node:latest AS server-build
WORKDIR /usr/src/app
COPY backend/ ./backend/
RUN cd backend && npm install

FROM node:latest
WORKDIR /usr/src/app/
COPY --from=server-build /usr/src/app/backend/ ./
COPY --from=ui-build /usr/src/app/frontend/dist ./frontend/dist
RUN ls
EXPOSE 3000
EXPOSE 4000
CMD ["/bin/sh", "-c", "cd /usr/src/app/ && npm start"]
