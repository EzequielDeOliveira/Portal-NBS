function copyUrlToClipboard() {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.URL);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

  fadePopUp();

}

function fadePopUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  //setTimeout(function(){ 
  //    popup.classList.toggle("hidden"); 
  //  }, 3000);
}