workflow "New workflow" {
  on = "push"
  resolves = ["Your action name"]
}

action "Your action name" {
  uses = "./my-action"
  args = "hello moto"
  secrets = ["GITHUB_TOKEN"]
}

workflow "repo-permission-check" {
  on = "pull_request"
  resolves = ["check"]
}

action "check" {
  uses = "macklinu/repo-permission-check-action@5f8af32"
  secrets = ["GITHUB_TOKEN"]
  args = "[\"write\"]"
}
