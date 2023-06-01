FROM node:18-slim

# Setup backend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN apt-get update && apt-get install -y procps
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 3000