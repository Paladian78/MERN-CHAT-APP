FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 5000

# Use script specified in package,json
CMD ["npm", "start"]
