FROM node:18

# COPY the package.json file, update any deps and install them
COPY package.json .
COPY package-lock.json .

#install python3 and make
RUN apt-get update && apt-get install -y python3 build-essential

RUN npm ci

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

CMD [ "npm", "run", "start" ]