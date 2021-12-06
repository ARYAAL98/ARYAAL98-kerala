let email = document.getElementById("email");
let error = document.getElementById("error");
function validateEmail()
{
    let mailformat = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?+$/;
        if(mailformat.test(email.value)){
            error.innerhtml = "Valid";
            error.style color = "green";
            return true;
        }
        else{
            error.innerhtml="Invald";
            error.style.color = "red";
            return false;
        }
}