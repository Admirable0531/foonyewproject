//JavaScript function that enables or disables a submit button depending
//on whether a checkbox has been ticked or not.
window.onload = function(){ 
	document.getElementById("button").disabled = true;
}


function disableSubmit() {
  document.getElementById("button").disabled = true;
 }

  function activateButton(element) {

      if(element.checked) {
        document.getElementById("button").disabled = false;
       }

       else  {
        document.getElementById("button").disabled = true;
      }

  }

function terms_changed(termsCheckBox){
    //If the checkbox has been checked
    if(termsCheckBox.checked){
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("button").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("button").disabled = true;
    }
}


