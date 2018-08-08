<img src="./images/logo.svg" alt="Logo" />

<div><strong>A simple website to display a list news getting from free NYTimes API</strong></div>

<br />

<div align="left">
  <!-- Build Status -->
  <a href="https://travis-ci.org/hdnha11/news-demo">
    <img src="https://travis-ci.org/hdnha11/news-demo.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/hdnha11/news-demo">
    <img src="https://coveralls.io/repos/github/hdnha11/news-demo/badge.svg" alt="Test Coverage" />
  </a>
</div>

<br />

[Live Demo](https://nha-news-demo.herokuapp.com)

## Table of Contents

- [User Stories](#user-stories)
- [Check list](#check-list)
- [Development](#development)
    - [Using Docker](#using-docker)
    - [Using local Node.js](#using-local-nodejs)
- [Production](#production)
    - [Docker image build](#docker-image-build)
    - [NPM build script](#npm-build-script)
- [Deployment](#deployment)

## User Stories

- As a user, I want to see a list of news which support pagination and each news
item contains: `snippet`, `multimedia`, `pub_date`, `source` fields.
- As a user, I want to see a specific news item as modal view by clicking on it.

## Check list

- [x] Home Page, Detail Page
- [x] Redux
- [x] Docker
- [x] Styled Components
- [x] Unit & UI Tests
- [x] Call NYTimes API to get list of news
- [x] Beautiful design, responsive & well displayed on mobile screen

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

### Docker image build

#### Build the image

```
$ docker image build -f Dockerfile.prod -t news-demo:v1 .
```

#### Run the app

```
$ docker container run -d -p 8080:8080 -e PORT=8080 news-demo:v1
```

Visit `localhost:8080` on your browser.

### NPM build script

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

## Deployment

```
$ docker image build -f Dockerfile.prod -t news-demo:v1 .
$ docker image tag news-demo:v1 registry.heroku.com/nha-news-demo/web
$ docker image push registry.heroku.com/nha-news-demo/web
$ heroku container:release web
```
