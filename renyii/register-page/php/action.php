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

$id = $_POST['id'];
$name = $_POST['name'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$school = $_POST['school'];
$type = $_POST['type'];

$sql = "INSERT INTO mystudents (id,name,contact,email,school,type) VALUES ('$id','$name','$contact','$email','$school','$type')";

//创建会话数据
if(empty($_SESSION)){
    $_SESSION['name'] = "$name";
    $_SESSION['id'] = "$id";
    echo "<p>您的资料已经提交成功。</p>";
}else{
    echo "<p>Session data exists</p>";


}

if ($conn->query($sql) === TRUE) {
	//submit表单之后直接跳转趣味导览
  //echo "<script>window.open('xxxx.html','_self')</script>";
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

session_write_close(); 
$conn->close();
?>