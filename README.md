# Microservices

**WIP.** Experimental sandbox of a fullstack web project with a microservice / microfrontend architecture.

## Setup

```
$ make init             -- update "/etc/hosts" on MacOS/Linux -- do manually on Windows! -- run once
$ make install          -- install all dependencies
$ make dev / make start -- run the whole system in dev/prod modes
```

## Main Tools

- Docker
- Docker-Compose
- Make
- NextJS
- Nginx
- NodeJS
- React

## Local Features

- Gateway proxy with Nginx
- Working live reload

## ToDo

- Test Prod deploy (DGO, AWS EC2).
- Multi-Stage Dockerfile builds.
- "Scalable" version with K8s, etc.
