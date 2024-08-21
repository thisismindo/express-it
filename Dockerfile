FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g typescript

RUN npm run build

EXPOSE 8080

# CMD ["node", "dist/app.js"]
CMD ["npm", "run", "dev"]
