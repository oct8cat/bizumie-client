FROM nginx

ENV SERVER_URL http://bizumie.redroach.es:3000
ENV OAUTH_URL http://oauth.bizumie.redroach.es:3001

RUN apt-get update
RUN apt-get install -y curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

WORKDIR /opt/bizumie-client
COPY package.json package-lock.json ./
RUN npm install

WORKDIR /etc/nginx/conf.d
COPY etc/nginx.conf default.conf

WORKDIR /opt/bizumie-client
COPY . .
RUN npm run build

CMD ./docker-entrypoint
