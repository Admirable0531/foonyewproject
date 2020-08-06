<script>

    (function() {
    $('form > input,textarea').keyup(function() {

        var empty = false;
        $('form > input,textarea').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#button').attr('disabled', 'disabled');
        } else {
            $('#button').removeAttr('disabled');
        }
    });
})()
    </script>