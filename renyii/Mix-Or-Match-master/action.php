<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fyp-db";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$add = 1;

$sql = "INSERT INTO mom (add) VALUES ('$add')";

?>