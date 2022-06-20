let unvis=(x)=>{
    switch(x.className)
    {
        case "fas fa-eye-slash":
            x.className="far fa-eye";
            x.previousSibling.type="password";
            
            break;
        case "far fa-eye":
            x.className="fas fa-eye-slash";
            x.previousSibling.type="text";
            break;
    }
}

let verify=()=>{
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
if(username=="project" && password=="project123")
{
location.href="/htmldocs/homepage.html";
}
else{
    console.log(username,password)
    alert("Wrong Username or Password")
}
}