<?php

    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username =='admin' and $password =='Parthurnax')
    {
        include 'test.html';
    }
    else
    {
        echo 'you are not the admin';
    }
?>