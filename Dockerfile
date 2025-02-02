# Step 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install Node.js for the config generator
RUN apk add --no-cache nodejs

# Copy all source files
COPY . .

# Install dependencies at root level
RUN pnpm install -r --frozen-lockfile

# Build
RUN pnpm run build

# Generate nginx config
RUN node /app/scripts/generate-nginx-config.mjs

# Step 2: Serve stage
FROM nginx:alpine

# Copy static files from builder stage to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the config generator script (ensure it exists in the source)
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "nginx.conf: $(cat /nginx.conf)"

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
