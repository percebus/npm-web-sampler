# `npm-web-sampler`

[`TODO`s](./TODO.md) | [`LICENSE`](./LICENSE)

[![verify](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/always.yml) [![dependency review](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml)

A web sampler of technologies and tools that can be used to quickly scaffold a web-project

- npm
- pip
- bower
- grunt
- jest

## Setup

### First time

```bash
$> npm run setup
```

### Dependencies

[![dependency review](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/pull_request.yml)

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
