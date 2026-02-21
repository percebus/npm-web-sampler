terraform {
  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~>3.0"
    }
  }

  # Settings will be provided via -backend-config
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "JCystems"

    workspaces {
      prefix = "npm-web-sampler_"
    }
  }

  required_version = "~> 1.14.3"
}
