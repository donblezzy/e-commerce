# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose backend port (e.g., 4000)
EXPOSE 4000

# Increase memory to 2GB using --max-old-space-size
CMD ["node", "--max-old-space-size=2048", "server.js"]

