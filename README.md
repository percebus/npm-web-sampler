# `npm-web-sampler`

[![Continuous Integration](https://github.com/percebus/npm-web-sampler/actions/workflows/actions.yml/badge.svg)](https://github.com/percebus/npm-web-sampler/actions/workflows/actions.yml)

A web sampler of technologies and tools that can be used to quickly scaffold a web-project

* npm
* pip
* bower
* grunt
* jest

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
