FROM node:alpine
WORKDIR '/app'
COPY . .
RUN npm install
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html