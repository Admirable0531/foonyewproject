<?php 

// Include functions
include(__DIR__.'/functions/validate.php');
// Start session
session_start();
// match the token
if(matchToken('mailer')) {
    // do stuff
    echo true;
}

?>
<form action='index.php' method='post' class='contact-format'>
    <!-- You will echo here and also set the session variable here -->
    <!-- I would also use an array to contain my tokens, cleaner I think -->
    <input type="hidden" name="token[mailer]" value="<?php echo fetchToken('mailer'); ?>">
    <button type="submit" name='submit' class="btn btn-primary button">Send</button>
</form>
