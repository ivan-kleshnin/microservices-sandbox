# Microservices

**WIP.** Experimental sandbox of a fullstack web project with a microservice / microfrontend architecture.

Supported OS': Linux, MacOS 

## Setup

```
$ make init             -- update "/etc/hosts", run once
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
- Multi-Stage Dockerfile builds.

## ToDo

- Test Prod deploy (DGO, AWS EC2).
- Gitlab CI/CD (move repo).
- "Scalable" version with K8s, etc.
