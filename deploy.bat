@echo off
echo Building and starting the application...

REM Stop existing containers
docker-compose down

REM Build and start containers
docker-compose up --build -d

echo Application is starting...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:4000

REM Show container status
docker-compose ps