
run "local_false__equals__false" {
  module {
    source = "./testing/setup"
  }

  assert {
    condition     = local.false == false
    error_message = "local.false did not match expected value"
  }
}
