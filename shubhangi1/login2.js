function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user")
    {
        alert("login successful");
        console.log("Your username is " +username+ ". Your password  " +password);
        return false;
    }
    else
    {
        alert("login failed");
    }
}