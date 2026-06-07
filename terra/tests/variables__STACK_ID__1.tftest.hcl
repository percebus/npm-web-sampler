
variables {
  STACK_ID = "1"
}

# TODO? Move to testing/ ?
mock_provider "random" {
  mock_resource "random_id" {
    defaults = {
      hex = "aabbccdd"
      dec = "2864434397"
      id  = "mocked-id"
    }
  }
}

run "random_id_stack_hex__equals__mocked_value" {
  command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
  assert {
    condition     = random_id.stack.hex == "aabbccdd"
    error_message = "The mocked hex value did not match."
  }
}

run "local_stack_id__equals__STACK_ID" {
  command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
  assert {
    condition     = local.stack_id == "1"
    error_message = "local.stack_id did not match expected value"
  }
}

run "local_tags_stack_id__equals__local_stack_id" {
  command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
  assert {
    condition     = local.tags.stack_id == local.stack_id
    error_message = "local.tags.stack_id did not match expected value"
  }
}

run "output_stack_hex__equals__random_id_stack_hex" {
  command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
  assert {
    condition     = output.stack.hex == random_id.stack.hex
    error_message = "output.stack.hex did not match expected value"
  }
}

run "output_stack_id__equals__random_id_stack_id" {
  command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
  assert {
    condition     = output.stack.id == random_id.stack.id
    error_message = "output.stack.id did not match expected value"
  }
}

# FIXME more values than mocked
# xrun "output_stack__equals__random_id_stack" {
#   command = apply # NOTE: Using apply with a mock_provider is safe and will not create real infrastructure.
#   assert {
#     condition     = output.stack == random_id.stack
#     error_message = "output.stack did not match expected value"
#   }
# }
