FROM node:18-slim

# Setup frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 5173