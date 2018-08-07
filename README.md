# News Demo

## Development

### Using Docker

#### Get Docker

Get [Docker Community Edition](https://www.docker.com/community-edition) for your platform *(Linux, Mac, Windows)*.

#### Spin up the app

```
$ docker-compose up -d
```

#### Stop the server

```
$ docker-compose down
```

#### Rebuild image

```
$ docker-compose up -d --build
```

Visit `localhost:9000` on your browser.

#### View logs

```
$ docker-compose logs -f web
```

### Using local Node.js

#### Install Node.js dependencies

```
$ npm install
```

#### Start dev server

```
$ npm run dev
```

## Production

### Using Docker

#### Build the image

```
$ docker image build -f Dockerfile.prod -t news-demo:v1 .
```

#### Run the app

```
$ docker container run -d -p 8080:80 news-demo:v1
```

Visit `localhost:8080` on your browser.

### Using local Node.js

#### Install Node.js dependencies

```
$ npm install
```

#### Build the app

```
$ npm run build
```

#### Run the app

```
$ npx http-server -p 8080 dist
```
