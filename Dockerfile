# THAT gateway Dockerfile

FROM node:12-alpine3.14

# Create and change to app directory
WORKDIR /usr/src/that

# Copy build artifacts into image
COPY build ./

# install production node_modules
RUN npm install --production

CMD [ "npm", "start" ]
