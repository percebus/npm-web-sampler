
variables {
  REPOSITORY_NAME = "some-repo"
}

run "local_repo_name__equals__REPOSITORY_NAME" {
  assert {
    condition     = local.repo_name == "some-repo"
    error_message = "local.repo_name did not match expected value"
  }
}

run "local_tags_created_by__equals__local_repo_name" {
  assert {
    condition     = local.tags.created_by == local.repo_name
    error_message = "local.tags.created_by did not match expected value"
  }
}
