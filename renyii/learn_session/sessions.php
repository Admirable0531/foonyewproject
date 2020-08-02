<?php

//引入sessions.inc.php文件，即上面的代码
require('sessions.inc.php');

?>

<!doctype html>
<html lang='en'>
<head>
    <meta charset="utf-8">
    <title>DB session test</title>
</head>
<body>

<?php

$name = $_POST['name'];
$id = $_POST['id'];

//创建会话数据
if(empty($_SESSION)){
    $_SESSION['name'] = "$name";
    $_SESSION['id'] = "$id";
    echo "<p>Session data stored</p>";
}else{
    echo "<p>Session data exists:<pre>".print_r($_SESSION,1)."</pre></p>";
}

if(isset($_GET['logout'])){
    //销毁会话数据
    session_destroy();
    echo "<p>session destroyed</p>";
}else{
    echo "<a href='sessions.php?logout=true'>log out</a>";
}


echo "<p>session data :<pre>".print_r($_SESSION,1)."</pre></p>";

echo '</body></html>';

session_write_close();  //下面重点解析
?>



</body>