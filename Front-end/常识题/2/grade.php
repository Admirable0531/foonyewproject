<!DOCTYPE html>
<html lang="zh-Hans">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>分数总结</title>

	<link rel="apple-touch-icon" sizes="180x180" href="../Favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../Favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../Favicon/favicon-16x16.png">
	<link rel="manifest" href="../Favicon/site.webmanifest">
	<link rel="mask-icon" href="../Favicon/safari-pinned-tab.svg" color="#000000">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="../Favicon/mstile-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	
	<link rel="stylesheet" type="text/css" href="bs.css" />
</head>

<body>


	<div id="page-wrap">

		<h1>分数总结</h1>
		<hr>
		
        <?php
            
            $answer1 = $_POST['question-1-answers'];
            $answer2 = $_POST['question-2-answers'];
            $answer3 = $_POST['question-3-answers'];
            $answer4 = $_POST['question-4-answers'];
            $answer5 = $_POST['question-5-answers'];
        
            $totalCorrect = 0;
            
            if ($answer1 == "A") { $totalCorrect++; }
            if ($answer2 == "C") { $totalCorrect++; }
            if ($answer3 == "B") { $totalCorrect++; }
            if ($answer4 == "C") { $totalCorrect++; }
            if ($answer5 == "A") { $totalCorrect++; }
            
            echo "<div id='results'>$totalCorrect / 5 correct</div>";
      
        ?>
        <br>
        <a href="#">回到趣味导览</a>
	
	</div>

	
	<script>
	var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
	document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
	</script>
	<script>
	var pageTracker = _gat._getTracker("UA-68528-29");
	pageTracker._initData();
	pageTracker._trackPageview();
	</script>

</body>

</html>