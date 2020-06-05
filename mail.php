<?php 
if (isset($_POST['btn-submit'])) {
    $name = $_POST['name'];
    $name = $_POST['email'];
    

    $errorEmpty = false:
    $errorEmail = false:

    if(empty($name) || empty($email)) {
        echo "<span class = 'form-error'>Fill in the fields!</span>";
        $errorEmpty = true;

    }
    elseif (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<span class = 'form-error'>Write a valid e-mail address!</span>"
    }
    else {
        echo "<span class = 'form-success'>Fill in all the fields! </span>";
        $errorEmail = true;
    }

}
else{
    echo "There was an error!"
}
?>

<script>
$(#name, #email).removeClass("input-error");

    let errorEmpty = "<?php echo $errorEmpty; ?>"
    let errorEmail = "<?php echo $errorEmail; ?>"

    if(errorEmpty == true){
        $(#name, #email).addClass("input-error");
    }
    if(errorEmail == true){
        $(#email).addClass("input-error");
    }
    if(errorEmpty == false && errorEmail == false){
        $("#name,#email").val("");
    }
    </script>