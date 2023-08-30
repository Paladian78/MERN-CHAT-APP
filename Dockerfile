FROM node:17-alpine as build
WORKDIR /app
COPY ./frontend ./frontend
COPY package.json .
RUN npm run build


FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/frontend/build ./frontend/build
COPY ./backend ./backend
COPY --from=build /app/package.json ./package.json
EXPOSE 5000
CMD ["npm", "start"]
