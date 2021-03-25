
  //EMAIL VALIDATION
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    const $error =  $(".error");
    const $c = $(".c");
    const $input = $("input");
    $result.text("");

    if (!validateEmail(email)) {
      $result.text("Inserire un'email corretta");
      $result.css("color", "hsl(0, 36%, 70%)");
      $result.css("font-family", "Poppins, sans-serif");
      $result.css("font-size", "10px");
      $result.css("font-weight", "600");
      $result.css("font-style", "italic");
      $result.css("text-align", "right");
      $error.show();
      $c.css("border","2px solid hsl(0, 36%, 70%)");
      $input.css("color","hsl(0, 36%, 70%)");
    } else {
      $error.hide();
    }
    return false;
  }

  $("#validate").on("click", validate);

  //FIRST NAME VALIDATION
  function validateFirstName() {
    var x = document.forms["myForm"]["fname"].value;
    const $return = $("#return");
    const $errorFirstName= $(".errorFirstName");
    const $input = $("input");
    const $a = $(".a");
    $return.text("");

    if (x == "") {
      $return.text("Il campo non può essere vuoto");
      $return.css("color", "hsl(0, 36%, 70%)");
      $return.css("font-family", "Poppins, sans-serif");
      $return.css("font-size", "10px");
      $return.css("font-weight", "600");
      $return.css("font-style", "italic");
      $return.css("text-align", "right");
      $errorFirstName.show();
      $a.css("border","2px solid hsl(0, 36%, 70%)")
      $input.css("color","hsl(0, 36%, 70%)");
    } else {
      $errorFirstName.hide();
    }
    return false;
  }

  $("#validate").on("click", validateFirstName);


  //SECONDNAME VALIDATION
  function validateSecondName() {
    var x = document.forms["myForm"]["sname"].value;
    const $execute = $("#execute");
    const $errorSecondName= $(".errorSecondName");
    const $input = $("input");
    const $b = $(".b");
    $execute.text("");

    if (x == "") {
      $execute.text("Il campo non può essere vuoto");
      $execute.css("color", "hsl(0, 36%, 70%)");
      $execute.css("font-family", "Poppins, sans-serif");
      $execute.css("font-size", "10px");
      $execute.css("font-weight", "600");
      $execute.css("font-style", "italic");
      $execute.css("text-align", "right");
      $errorSecondName.show();
      $b.css("border","2px solid hsl(0, 36%, 70%)")
      $input.css("color","hsl(0, 36%, 70%)");
    } else {
      $errorSecondName.hide();
    }
    return false;
  }

  $("#validate").on("click", validateSecondName);


  //PASSWORD VALIDATION
  function validatePassword() {
    var x = document.forms["myForm"]["passw"].value;
    const $write = $("#write");
    const $errorPassword= $(".errorPassword");
    const $input = $("input");
    const $d = $(".d");
    $write.text("");

    if (x == "") {
      $write.text("Il campo non può essere vuoto");
      $write.css("font-style", "italic");
      $write.css("text-align", "right");
      $write.css("color", "hsl(0, 36%, 70%)");
      $write.css("font-family", "Poppins, sans-serif");
      $write.css("font-size", "10px");
      $write.css("font-weight", "600");
      $write.css("margin-bottom", "20px");
      $errorPassword.show();
      $d.css("border","2px solid hsl(0, 36%, 70%)");
      $input.css("color","hsl(0, 36%, 70%)");
    } else {
      $errorPassword.hide();

    }
    return false;
  }

  $("#validate").on("click", validatePassword);
