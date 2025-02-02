# Step 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy all source files
COPY . .

# Install dependencies at root level
RUN pnpm install -r --frozen-lockfile

# Build
RUN pnpm run build

# Step 2: Serve stage
FROM nginx:alpine

# Install Node.js for the config generator
RUN apk add --no-cache nodejs

# Copy the config generator script
COPY scripts/generate-nginx-config.js /scripts/

# Copy static files from builder stage to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Generate nginx config
RUN node /scripts/generate-nginx-config.js

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
