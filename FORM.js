function validateForm() {
    var r = true;
    var x = document.getElementById('fname').value;
    var y = document.getElementById('uname').value;
    var z = document.getElementById('pass').value;
    var cp = document.getElementById('Cp').value;
    var pattren1 = /^[A-Za-z]+$/;
    var pattren2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

    if (x == "") {
        document.getElementById('m1').innerHTML = " *Name must be fill out";
        document.getElementById('fname').style.borderColor = "red";
        r = false;
    } else if (!(x.match(pattren1))) {
        document.getElementById('m1').innerHTML = " *ONLY LETTERS Allowed";
        document.getElementById('fname').style.borderColor = "red";
        r = false;
    } else {
        document.getElementById('m1').innerHTML = "";
        document.getElementById('fname').style.borderColor = "black";
    }



    if (y == "") {
        document.getElementById('m2').innerHTML = " *Username must be fill out";
        document.getElementById('uname').style.borderColor = "red";
        r = false;
    } else {
        document.getElementById('m2').innerHTML = "";
        document.getElementById('uname').style.borderColor = "black";
    }



    if (z.length < 6 || z.length > 10) {
        document.getElementById('m3').innerHTML = " *Password Should be 6 - 10 length";
        document.getElementById('pass').style.borderColor = "red";
        r = false;
    }  else if (!z.match(pattren2)) {
            document.getElementById('m3').innerHTML = " *Password Should be at least one small letter and one capital letter and one digit";
            document.getElementById('pass').style.borderColor = "red";
        r = false;
    } else if (z == y) {
        document.getElementById('m3').innerHTML = " *Password should does not match with username";
        document.getElementById('pass').style.borderColor = "red";
    } else {
        document.getElementById('m3').innerHTML = "";
        document.getElementById('pass').style.borderColor = "black";
    }


    if (cp !== z) {
        document.getElementById('m4').innerHTML = " *Your Password does not match";
        document.getElementById('Cp').style.borderColor = "red";
        r = false;
    } 

    return r;
}