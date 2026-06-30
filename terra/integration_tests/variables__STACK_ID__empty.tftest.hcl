
variables {
  STACK_ID = ""
}

run "random_id_stack_hex__is_string" {
  command = apply
  assert {
    condition     = can(regex("^[a-f0-9]{8}$", random_id.stack.hex))
    error_message = "random_id.stack.hex is NOT a string."
  }
}

run "local_stack_id__is_string" {
  command = apply
  assert {
    condition     = can(regex("^[a-f0-9]{8}$", local.stack_id))
    error_message = "local.stack_id is NOT a string."
  }
}

run "local_stack_id__equals__random_id_stack_hex" {
  command = apply
  assert {
    condition     = local.stack_id == random_id.stack.hex
    error_message = "local.stack_id did not match expected value"
  }
}

run "local_tags_stack_id__equals__local_stack_id" {
  command = apply
  assert {
    condition     = local.tags.stack_id == local.stack_id
    error_message = "local.tags.stack_id did not match expected value"
  }
}

run "output_stack_hex__equals__random_id_stack_hex" {
  command = apply
  assert {
    condition     = output.stack.hex == random_id.stack.hex
    error_message = "output.stack.hex did not match expected value"
  }
}

run "output_stack_id__equals__random_id_stack_id" {
  command = apply
  assert {
    condition     = output.stack.id == random_id.stack.id
    error_message = "output.stack.id did not match expected value"
  }
}
