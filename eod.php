<?php
$from=$_POST['Email'];
$title=$_POST['Title'];
$name=$_POST['Name'];
$number=$_POST['Number'];
$email="soesoanse312@gmail.com";
$message=$_POST['Message'];

$all=

"Title: “.$title.”\r
".
"Name: “.$name.”\r
".
"Message: “.$message.”\r
".
"Number: “.$number.”\r
";

mail ( $email,$all, "From:".$from);

  
    $theResults = <<<EOD
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link href="https://fonts.googleapis.com/css2?family=Vibes&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Harmattan&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="css/style.css">
		<link rel="shortcut icon" type="image/png" href="img/favicon.png">
		<title>تجربه</title>
	</head>
	<body>
		<section class="row-container">
			<div class="row">
				<div class="information thanks">
						<h1>شكر لك </h1>
						<h1> لقد تم ارسال طلبك </h1>
						<h1> سنقوم بالاتصال بك في اقرب وقت </h1>
						<a href="index.html" class="btn btn-white">إنهاء</a>
				</div>            
				
			</div>
		</section>
	</body>
	</html>
EOD;
echo "$theResults";

?>