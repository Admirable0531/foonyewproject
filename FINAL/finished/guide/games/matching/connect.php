<?php
$servername = "128.199.221.94";
$username = "yhphdrqswp";
$password = "n5Cu5YgZYy";
$dbname = "yhphdrqswp";
// Create connection

$conn = mysqli_connect($servername, $username, $password, $dbname);
//Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
session_start();
$_SESSION['score'] = $_POST['score'];
$sql = "UPDATE mystudents SET matching = '{$_SESSION['score']}' WHERE random_id = '".$_SESSION['random_ids']."'";

if ($conn->query($sql) === TRUE) {
    header('Location: ../../library/index.html');
} else {
  echo "Error: " . $sql . $conn->error;
}

$conn->close(); 

?>
