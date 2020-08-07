<?php 
 header('Content-type:text/html; charset=utf-8');
 // 开启Session
 session_start();
 
 // 首先判断Cookie是否有记住了用户信息
 if (isset($_COOKIE['username'])) {
 # 若记住了用户信息,则直接传给Session
 $_SESSION['username'] = $_COOKIE['username'];
 $_SESSION['islogin'] = 1;
 }
 if (isset($_SESSION['islogin'])) {
 // 若已经登录
 echo "你好! ".$_SESSION['username'].' ,欢迎来到个人中心!<br>';
 echo "<a href='logout.php'>注销</a>";
 } else {
 // 若没有登录
 echo "您还没有登录,请<a href='login.html'>登录</a>";
 }
 ?>