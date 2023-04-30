FROM node:18-slim
WORKDIR /app
COPY backend/package.json /app/backend/package.json
WORKDIR /app/backend
RUN npm install
WORKDIR /app
COPY . /app
RUN apt-get update && apt-get install -y procps
WORKDIR /app/backend
CMD ["npm", "run", "start:dev"]
