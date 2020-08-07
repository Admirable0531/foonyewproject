<?php 

function fetchToken($form)
    {
        $token  =   md5(uniqid(microtime(), true));
        $_SESSION['token'][$form]   =   $token; 

        // Just return it, don't echo and return
        return $token;
    }

function matchToken($form)
    {
        if(!isset($_POST['token'][$form]))
            return false;
        // I would clear the token after matched
        if($_POST['token'][$form] === $_SESSION['token'][$form]) {
            $_SESSION['token'][$form]   =   NULL;
            return true;
        }
        // I would return false by default, not true
        return false;
    }




 ?>