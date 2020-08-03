<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fyp-db";

require('sessions.inc.php');

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$student_id = $_POST['student_id'];
$name = $_POST['name'];
$contact = $_POST['contact'];
$school = $_POST['school'];
$type = $_POST['type'];

$sql = "INSERT INTO mystudents (student_id,contact,name,school,type) VALUES ('$student_id','$name','$contact','$school','$type')";

//创建会话数据
if(empty($_SESSION)){
    $_SESSION['name'] = "$name";
    $_SESSION['id'] = "$student_id";
    echo "<p>您的资料已经提交成功。</p>";
}else{
    echo "<p>Session data exists</p>";


}

if ($conn->query($sql) === TRUE) {
	//submit表单之后直接跳转趣味导览
  echo "<script>window.open('http://localhost/link/guide/redbrick/index.html','_self')</script>";
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

session_write_close(); 
$conn->close();
?>