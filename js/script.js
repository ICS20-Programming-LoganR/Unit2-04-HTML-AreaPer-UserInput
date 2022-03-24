// Created by: Logan Rodriguez
// Created on: Mar 2022
// This file contains the JS functions for index.html

function areaFound () {
  //function for finding the users home address for no particular reason

  //get their base from the text field
  let Base = parseInt(document.getElementById("tri-base").value)
	// get their height from the text field
  let Height = parseInt(document.getElementById("tri-height").value)

  // display name and age back to user
  document.getElementById('base-height').innerHTML = "Your triangle has an area of " + ((Base * Height) / 2) + "cm²"
}
