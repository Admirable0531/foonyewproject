<?php session_start(); ?>

<!DOCTYPE html>
<html lang="zh-Hans">

<head>                                                                                                                                                                              
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <title>抽奖</title>

    <!-- Icons font CSS-->
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/main.css" rel="stylesheet" media="all">
</head>

<body onload="disableSubmit()">
    <div class="page-wrapper bg p-t-180 p-b-100 font-robo"> <!--红色bg-->
        <div class="wrapper wrapper--w960"><!--左边图片 + 整个registration Info的box 整条-->
            <div class="card card-2"><!--左边图片 + 整个registration Info的box-->
                <div class="card-heading"></div><!--左边图片-->
                <div class="card-body"><!--整个registration Info的box-->
                    <h2 class="title">输入资料以参加抽奖</h2><br>
                    <h2 class="title">请在玩游戏前先给网站加载个几秒才玩。</h2><br>
                    <h2 class="title">请利用电脑来达到最好的效果</h2><br>

                    <form method="POST" action="./php/action.php">
                        <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="姓名" name="name" required >
                        </div>

                        <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="学号(没有的请放-）" name="student_id" required >
                        </div>

                        <div class="input-group">
                            <input class="input--style-2" type="number" placeholder="联络号码" name="contact" required >
                        </div>

                        <div class="row row-space">

                            <div class="col-2">

                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <select name="school" required>
                                            <option value="">学校</option>
                                            <!--<option disabled="disabled" selected="selected">学校</option>-->
                                            <option value="fy1">宽柔一小</option>
                                            <option value="fy2">宽柔二小</option>
                                            <option value="fy3">宽柔三小</option>
                                            <option value="fy4">宽柔四小</option>
                                            <option value="fy5">宽柔五小</option>
                                            <option value="fyjb">新山宽柔中学</option>
                                            <option value="fyk">宽柔中学古来分校</option>
                                        </select>
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>

                                <div class="input-group">
                                    <div class="rs-select2 js-select-simple select--no-search">
                                        <div class="select-dropdown"></div>
                                    </div>
                                </div>       
                            </div>
                        </div>
                    

                 
                        <div>
                            <a href="../../guide/redbrick/index.html">非宽柔在籍学生/校外人士请点击这里参观</a>
                            <br>
                            <br>
                            <label id="terms_and_conditions">我已经阅读并同意<a href="../terms/tnc.html" target="_blank">“条款与条件”</a></label>

                            <input type="checkbox" id="terms_and_conditions" value="1" onclick="terms_changed(this)" />
                        </div>
                        <div>
                            <br>
                            <button class="btn btn--radius btn--blue" type="submit" id="button" disabled>确认</button>
                        </div>
                   </form> 
                    

                </div>
            </div>
        </div>
    </div>



    <!-- Jquery JS-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    <!-- Main JS-->
    <script src="js/global.js"></script>
    
    <!--Checkbox JS-->
    <script src="js/checkbox.js"></script>

   



</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
