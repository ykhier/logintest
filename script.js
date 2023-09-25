function loginBtnClicked(){
    usrname = document.getElementById("login-username").value;
    pass = document.getElementById("login-password").value;

    // if user name is admin and the password is 12345 switch loc
    if (usrname == "admin" && pass == "12345")
        window.location.href = "index.html";
    else
        alert("username or password is not correct");

}
function showAndHidePassword(password,toggle){
    pass = document.getElementById(password);
    togglePassword = document.getElementById(toggle);
    
    if(pass.type == "password"){
        pass.type = "text";
        togglePassword.dataset.visible = "false";
    }else{
        pass.type = "password";
        togglePassword.dataset.visible = "true";
    }
}
