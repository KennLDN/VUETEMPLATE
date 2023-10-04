FROM node:lts

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy local files to container
COPY . .

# Build the project
RUN npm run build

# The command to run the app when the docker container starts
CMD ["npm", "run", "prod"]
