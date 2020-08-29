<?php
$servername = "128.199.221.94";
$username = "yhphdrqswp";
$password = "n5Cu5YgZYy";
$dbname = "yhphdrqswp";

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
session_start();
$_SESSION['random_ids'] = random_str(10);
$_SESSION['student_ids'] = $_POST['student_id'];
$_SESSION['names'] = $_POST['name'];
$_SESSION['contacts'] = $_POST['contact'];
$_SESSION['schools'] = $_POST['school'];
echo $_SESSION['random_ids'];
$sql = "INSERT INTO mystudents (random_id,student_id,name,contact,school) VALUES ('".$_SESSION['random_ids']."','".$_SESSION['student_ids']."','".$_SESSION['names']."','".$_SESSION['contacts']."','".$_SESSION['schools']."')";

if ($conn->query($sql) === TRUE) {
    //submit表单之后直接跳转趣味导览
  //echo "<script>window.open('xxxx.html','_self')</script>";
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


//创建会话数据
if(empty($_SESSION)){
    echo "<p>您的资料已经提交成功。</p>";
    header('Location: ../../../guide/redbrick/index.html');
    session_write_close(); 
}else{
    header('Location: ../../../guide/redbrick/index.html');
    echo "<p>Session data exists</p>";


 }

$conn->close();
//header('Location: http://www.google.com');
?>