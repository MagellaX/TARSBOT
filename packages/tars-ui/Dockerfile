# Base image
FROM node:20-alpine

# Declare build arguments
ARG TARS_AGENT_BASE_URL
ARG TARS_DESKTOP_VNC_URL

# Set environment variables for the build process
ENV TARS_AGENT_BASE_URL=${TARS_AGENT_BASE_URL}
ENV TARS_DESKTOP_VNC_URL=${TARS_DESKTOP_VNC_URL}

# Create app directory
WORKDIR /app

# Copy app source
COPY ./shared ./shared
COPY ./tars-ui/ ./tars-ui

WORKDIR /app/tars-ui

# Install dependencies
RUN npm install

RUN npm run build

# Run the application
CMD ["npm", "run", "start"] 


