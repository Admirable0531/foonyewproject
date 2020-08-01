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

$student_id = $_POST['student_id'];
$name = $_POST['name'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$school = $_POST['school'];
$type = $_POST['type'];

$sql = "INSERT INTO mystudents (student_id,name,contact,email,school,type) VALUES ('$student_id','$name','$contact','$email','$school','$type')";

if ($conn->query($sql) === TRUE) {
	//submit表单之后跳转回来form.html
  //echo "<script>window.open('form.html','_self')</script>";
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>