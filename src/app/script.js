/* global alert */

import pkg from "../../package.json"

function loadVersion() {
  console.debug("Loading version " + pkg.version)
  document.getElementById("version").innerText = pkg.version
}

function addOnClickEvents() {
  // Prompt
  // "I have some buttons.
  //  I want to implement a feature that when I click each one,
  //  it shows an alert showing its respective bootstrap type:
  //  primary, secondary, success, etc."
  console.debug("Adding .btn click event listeners")
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function onClick(e) {
      console.info("click")
      console.debug(e)

      const type = button.classList.contains("btn-link")
        ? "link"
        : button.classList[1].split("-")[1]

      console.debug(type)

      alert(`Button type: ${type}`)
    })
  })
}

function main() {
  loadVersion()
  addOnClickEvents()
}

main()
