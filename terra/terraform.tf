terraform {
  required_version = ">= 1.16.1"
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
}
