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

function random_str(
    int $length = 64,
    string $keyspace = '0123456789SabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
): string {
    if ($length < 1) {
        throw new \RangeException("Length must be a positive integer");
    }
    $pieces = [];
    $max = mb_strlen($keyspace, '8bit') - 1;
    for ($i = 0; $i < $length; ++$i) {
        $pieces []= $keyspace[random_int(0, $max)];
    }
    return implode('', $pieces);
}

$random_id = random_str(10);
$student_id = $_POST['student_id'];
$name = $_POST['name'];
$contact = $_POST['contact'];
$school = $_POST['school'];
$type = $_POST['type'];

$sql = "INSERT INTO mystudents (random_id,student_id,name,contact,school,type) VALUES ('$random_id','$student_id','$name','$contact','$school','$type')";

//创建会话数据
if(empty($_SESSION)){

    $_SESSION['name'] = "$name";
    $_SESSION['id'] = "$student_id";
    echo "<p>您的资料已经提交成功。</p>";
    session_write_close(); 
}else{
    header('Location: http://www.google.com');
    echo "<p>Session data exists</p>";
    die();


}

if ($conn->query($sql) === TRUE) {
	//submit表单之后直接跳转趣味导览
  //echo "<script>window.open('xxxx.html','_self')</script>";
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
//header('Location: http://www.google.com');
?>