FROM node:18

# Setup frontend
WORKDIR /usr/src/frontend-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173 6006
CMD ["npm", "run", "dev"]