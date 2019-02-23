workflow "New workflow" {
  on = "push"
  resolves = ["Your action name"]
}

action "Your action name" {
  uses = "./my-action"
  args = "hello moto"
}
