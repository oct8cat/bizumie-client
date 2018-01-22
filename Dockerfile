FROM nginx

ENV NODE_ENV production

RUN apt-get update
RUN apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

WORKDIR /etc/nginx/conf.d
COPY etc/nginx.conf default.conf

WORKDIR /opt/eek-client
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ./docker-entrypoint
