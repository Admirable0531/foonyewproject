<?php
if(empty($_POST['agree']) || $_POST['agree'] != 'agree') {
    echo 'Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy';
}

?>