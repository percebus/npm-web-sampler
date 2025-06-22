/* global alert */

import pkg from "../../package.json"
import _ from "lodash"

function loadVersion() {
  console.debug("Loading version " + pkg.version)

  // NOTE only for demo purposes
  const variables = {
    SCOPE: process.env.SCOPE,
    ENVIRONMENT: process.env.ENVIRONMENT
  }

  console.debug(".env variables: ", variables)

  document.getElementById("version").innerText =
    `${pkg.version}-${process.env.NODE_ENV}`
}

// TODO move to events.js
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

      const secondClass = button.classList[1] // ['btn', 'btn-primary'] -> btn-primary
      const buttonType = secondClass.split("-")[1] // 'btn-primary' -> 'primary'

      console.debug(buttonType)
      alert(`Button type: ${buttonType}`)
    })
  })
}

function main() {
  console.debug("main()")
  loadVersion()
  addOnClickEvents()
}

main()
