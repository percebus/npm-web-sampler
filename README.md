# npm-web-sampler

[`TODO`s](./TODO.md) | [`LICENSE`](./LICENSE.md) | [`CONTRIBUTING`](./CONTRIBUTING.md) | [`CODE_OF_CONDUCT`](./CODE_OF_CONDUCT.md) | [`SECURITY`](./SECURITY.md)

[![verify](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml) [![dependency review](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml)

## Summary

A web sampler of technologies and tools that can be used to quickly scaffold a web-project

- `npm`
- `bower`
- `pip` ( & `pipx`)
- `grunt`
- `jasmine`: `jest`, `testem` & `frisby`

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
