<html>
<head>
<title>Why you are here</title>
<link rel="stylesheet" href="process.css">
</head>
<body>

<?php
session_start();

$_SESSION["name"] = $_POST ["name"];
$_SESSION["number"] = $_POST ["number"];

echo $_POST ["name"];
echo "<br>";
echo $_POST ["number"];
echo "<br>";
echo $_POST ["email"];
echo "<br>";
echo $_POST ["studentid"];
echo "<br>";
echo $_POST ["school"];
echo "<br>";
echo $_SESSION["name"];



	
?>


</body>
</html>