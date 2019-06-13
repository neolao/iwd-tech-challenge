IWD Tech challenge
==================

Install [docker-composer](https://docs.docker.com/compose/install/) then run:

```bash
docker-compose up server
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The API is accessible on [http://localhost:3000/api](http://localhost:3000/api).

To run backend tests:

```bash
docker-compose run php vendor/bin/phpunit tests
```

To run frontend tests:

```bash
docker-compose run node npm test
```
