# Microservices

**WIP.** Experimental sandbox of a fullstack web project with a microservice / microfrontend architecture.

Supported OS': Linux, MacOS 

## Preview

![Yarn](./preview.png)

## Setup

```
$ make init             -- update "/etc/hosts", run once
$ make install          -- install all dependencies
$ make seed             -- seed the database
$ make dev / make start -- run the whole system in dev/prod modes
```

## After Setup

```
"main" app
GET mydocker.local
GET mydocker.local/api/ping

"auth" app
GET mydocker.local/auth/
GET mydocker.local/auth/api/ping
```

## Tools

- Docker
- Docker-Compose
- ESlint
- JWT
- Make
- NextJS
- Next-Auth
- Nginx
- NodeJS
- React
- React-Query
- Yarn


## Features

- [x] Gateway proxy with Nginx
- [x] Working live reload
- [x] Multi-Stage Dockerfile builds
- [x] Authentication example with Next-Auth (`CredentialsProvider`)
- [x] Next-Auth session fetched by React-Query
- [ ] Prod deploy (DGO, AWS EC2)
- [ ] Gitlab CI/CD (move repo)
- [ ] "Scalable" version with K8s, etc.

---

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
