
output "stack" {
  value = {
    id  = random_id.stack.id
    hex = random_id.stack.hex
  }
}

output "tags" {
  value = local.tags
}
