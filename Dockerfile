FROM node:22-alpine

WORKDIR /app
RUN apk add --no-cache curl
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "80"]
