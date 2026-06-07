
run "local_tags_created_by__equals__this_repo" {
  assert {
    condition     = local.tags.created_by == "npm-web-sampler"
    error_message = "local.tags.created_by did not match expected value"
  }
}

run "local_tags_environment__equals__test" {
  assert {
    condition     = local.tags.environment == "test"
    error_message = "local.tags.environment did not match expected value"
  }
}

run "output_tags__equals__local_tags" {
  assert {
    condition     = output.tags == local.tags
    error_message = "output.tags did not match expected value"
  }
}
