# Define the image we will use and version
# latest just means we need the latest nodejs image available
FROM node:latest

# Create an app directory to hold the application code
WORKDIR /usr/discount-calculator-server/src/app

# Duplicate the dependency file to the container's project root directory.
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Expose our app port inside the app and 
EXPOSE 3000:4000

# Define commands that will run the app
CMD ["npm", "start"]

