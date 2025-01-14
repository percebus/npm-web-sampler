# npm-web-sampler

[`CHANGELOG`](./CHANGELOG.md) | [`TODO`s](./TODO.md) | [`LICENSE`](./LICENSE.md) | [`CONTRIBUTING`](./CONTRIBUTING.md) | [`CODE_OF_CONDUCT`](./CODE_OF_CONDUCT.md) | [`SECURITY`](./SECURITY.md)

[![verify](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml) [![dependency review](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml)

## Summary

A web sampler of technologies and tools that can be used to quickly scaffold a web-project

- `npm`
- `bower`
- `pip` ( & `pipx`)
- `grunt`
- `jasmine`: `jest`, `testem` & `frisby`
- `semantic-release`: To automagically create releases
- `docker` ( & `docker-compose` )
- `helm`: To Deploy to Kubernetes

## Motivation

This project goes to great lengths to prove all the DevOps & CI/CD work needed for something like simple static `index.html`.

This is ALL THE BELLS AND WHISTLES, but WITHOUT the Christmass tree 🎄.

## Purpose

Demonstrate the ammount of code and overhead needed for devops, even without having an actual project.

## Setup

### First time

```bash
$> npm run setup
```

### Dependencies

```bash
$> npm install
```

## Development

[![verify](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml)

### Build

#### `dist/`

```bash
$> npm run dist
```

### Test

#### Unit

```bash
$> npm test
```

#### Browsers

```bash
$> npm run testem:ci
```

#### Integration

```bash
$> npm run validate
```

### Verify

Build + Test

```bash
$> npm run verify
```

#### w/ Docker

```bash
$> npm run verify:docker
```

## Resources

### Medium

- [Container Security: A Complete Overview of GitHub Actions Integrated Image Scanning Tools](https://medium.com/@anshumaansingh10jan/container-security-a-complete-overview-of-github-actions-integrated-image-scanning-tools-832e6406ec23)
- [Using dotenv with Jest](https://lusbuab.medium.com/using-dotenv-with-jest-7e735b34e55f)
- [Deploy Your Programs onto Minikube with Docker and Helm](https://siweheee.medium.com/deploy-your-programs-onto-minikube-with-docker-and-helm-a68097e8d545)
- [Docker + Kubernetes + Helm: A comprehensive step-by-step using Java](https://ignaciocicero.medium.com/docker-kubernetes-helm-a-comprehensive-step-by-step-using-java-df83f6780d80)

### Container-ization

- [How to Use Your Own Registry](https://www.docker.com/blog/how-to-use-your-own-registry-2/)
- [Deploying a Docker Container to Kubernetes using Helm and Helm Charts](https://aahil13.hashnode.dev/deploying-a-docker-container-to-kubernetes-using-helm-and-helm-charts)
