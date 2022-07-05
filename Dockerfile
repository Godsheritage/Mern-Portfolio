FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN npm run CLIENT_INSTALL 

# may or may not remove the only production flag

COPY server/package*.json server/
RUN npm run SERVER_INSTALL 

COPY client/ client/
RUN npm run BUILD_CLIENT

COPY server/ server/

# COPY server/dists/ server/public/


# to set this user to have least privilledges
USER node

CMD ["npm", "start"]

EXPOSE 1234