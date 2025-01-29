# Step 1: Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Generate static files
RUN pnpm run build

# Step 2: Serve stage
FROM nginx:alpine

# Copy static files from builder stage to nginx
COPY --from=builder /dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
