function check() {
    var inputs = document.getElementsByClassName("input--style-2");
    var select = document.getElementsByTagName("select");
    var filled = true;
    var oneChecked = false;
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" && !inputs[i].value) {
            filled = false;
        }
        
        if (inputs[i].type === "radio" && inputs[i].checked) {
            oneChecked = true;
        }

    }

    if (!oneChecked) {
        filled = false;
    }

    for (var j = 0; j < textareas.length; j++) {
        if (!textareas[j].value) {
            filled = false;
        }
    }
    
    if (filled) {
        document.getElementById("button").disabled = false;
    } else {
        document.getElementById("button").disabled = true;
    }
}

window.addEventListener("keyup", check);
window.addEventListener("click", check);