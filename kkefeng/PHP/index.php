<!DOCTYPE html>
<html>
<head>
	<title>Registration Page</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<div class="user">
    <header class="user__header">
        <img src="https://img.icons8.com/dotty/80/000000/queens-guard.png"/>
        <h1 class="user__title">We won't sell your data </h1>
    </header>
    
    <form  action="process.php" method="post" class="form">
       <div class="form__group"> 
            <input name="name" type="text" placeholder="Name" class="form__input" />
       </div>
<!--  
        <div class="form__group">
            <input name="number" type="text" placeholder="Phone Number" class="form__input" />
        </div>
      
        <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="number" placeholder="Student ID" class="form__input" />
        </div>

        <div class="form__group">
            <input type="text" placeholder="School" class="form__input" />
        </div>
       -->
        <button class="btn" type="button">Submit</button>
    </form>
    
</div>

<script type="text/javascript">
	
	const button = document.querySelector('.btn')
	const form   = document.querySelector('.form')

button.addEventListener('click', function() {
   form.classList.add('form--no') 
});

</script>


</body>
</html>