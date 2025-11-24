# -----------------------------
# 1. Build Stage
# -----------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install --production=false

# Copy source code
COPY . .

# Build (optional — remove if not using a build step, e.g., pure backend)
# RUN npm run build

# -----------------------------
# 2. Runtime Stage
# -----------------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary artifacts
COPY package*.json ./
RUN npm install --production

# Copy built app (remove "dist" if not using a build step)
COPY --from=builder /app ./

# Set a non-root user for security
USER node

EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
