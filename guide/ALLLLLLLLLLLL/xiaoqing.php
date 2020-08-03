<?php
session_start();
header('Location:/./link/front/countdown.html');

$place = $_POST['place'];

echo $place;

?>
