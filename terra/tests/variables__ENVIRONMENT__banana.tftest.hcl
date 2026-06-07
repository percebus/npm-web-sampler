
variables {
  ENVIRONMENT = "banana"
}

run "local_environment__equals__ENVIRONMENT" {
  assert {
    condition     = local.environment == "banana"
    error_message = "local.environment did not match expected value"
  }
}

run "local_tags_environment__equals__local_environment" {
  assert {
    condition     = local.tags.environment == local.environment
    error_message = "local.tags.environment did not match expected value"
  }
}
