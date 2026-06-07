
run "local_true__equals__true" {
  module {
    source = "./testing/setup"
  }

  assert {
    condition     = local.true == true
    error_message = "local.true did not match expected value"
  }
}
