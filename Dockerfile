# Use Node LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose backend port (e.g., 5000)
EXPOSE 4000

# Start the backend
CMD ["npm", "start"]
