<!-- I'm feeling curious-->
<!-- Is revenue credit or debit?-->
<!--Accounts Receivable is an asset account and is increased with a debit; -->
<!--Service Revenues is increased with a credit.-->
<!--Expenses and Losses are Usually Debited. -->
<!--Expenses normally have their account balances on the debit side (left side). -->
<!--A debit increases the balance in an expense account; a credit decreases the balance.-->
<!DOCTYPE html>
<html>
<head>
	<title>Registration Page</title>
	<link rel="stylesheet" href="reg.css">
</head>

<body>

	<div class="user">
    <header class="user__header">
        <img src="https://img.icons8.com/dotty/80/000000/queens-guard.png"/>
        <h1>We won't sell your data</h1>
        <h2>Work In Progess...</h2>
    </header>
    
    <form  action="process.php" method="post" class="form">
       <div class="form__group"> 
            <input name="name" type="text" placeholder="Name" class="form__input" />
       </div>
 
        <div class="form__group">
            <input name="number" type="number" placeholder="Phone Number" class="form__input" />
        </div>

        <div class="form__group">
            <input name="email" type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
            <input name="studentid" type="number" placeholder="Student ID" class="form__input" />
        </div>

        <div class="form__group">
            <input name="school" type="text" placeholder="School" class="form__input" />
        </div>
   
        <button class="btn" type="Submit">Submit</button>
    </form>
    
</div>

<script type="text/javascript">
	
	const submit = document.querySelector('.btn') //click button to submit 
	const form   = document.querySelector('.form') 

</script>   


</body>
</html>
<!--FoonYewProject-Front-end-->