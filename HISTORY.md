# npm-web-sampler

## Docker

### Registry

From: [How to Use Your Own Registry](https://www.docker.com/blog/how-to-use-your-own-registry-2/)

## helm

From: [Getting Started](https://helm.sh/docs/chart_template_guide/getting_started/)

### create

1. `$> helm create web-app`.
1. `$> rm -rf web-app/templates`.
1. `$> mv web-app helm`.

### install

1. `$> helm install full-coral ./helm`
1. `$> helm get manifest full-coral`
