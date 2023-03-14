function myForm(){

    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Pnum = document.getElementById("num").value;
    let Email = document.getElementById("email").value;
    let BirthDate = document.getElementById("birthdate").value;
    let App_Time = document.getElementById("app_time").value;
    let favcolor = document.getElementById("favcolor").value;
    let Pyement = document.getElementsByName("pyement").value;
    let Age = document.getElementById("age").value;



    let firstname = localStorage.setItem("FirstName",FirstName);    
    let lastname = localStorage.setItem("LastName",LastName);    
    let phonenumber = localStorage.setItem("Pnum",Pnum);    
    let email = localStorage.setItem("Email",Email);    
    let birthdate = localStorage.setItem("BirthDate",BirthDate);
    let app_time = localStorage.setItem("App_Time",App_Time);
    let favColor = localStorage.setItem("favcolor",favcolor);
    let age = localStorage.setItem("Age",Age);

    let ;
    let i;
    for(i=0; i<=Pyement.length; i++){
        if(Pyement[i].checked){
            let py = localStorage.setItem("Pyement",Pyement[i].value);
        }
    }

}

function valiData(){


    if(firstname.value.trim()=="")
    {
        alert("First Name Is Blank");
        firstname.style.border = "solid 1px aqua";
        document.getElementById("invalid_fname").style.visibility="visible";
        return false;
    }
    else if(lastname.value.trim()=="")
    {
        alert("Last Name Is Blank");
        lastname.style.border = "solid 1px aqua";
        document.getElementById("invalid_lname").style.visibility="visible";
        return false;
    }
    else if(num.value.trim().length<10)
    {
        alert("Enter 10 Number");
        num.style.border = "solid 1px aqua";
        document.getElementById("invalid_num").style.visibility="visible";
        return false;
    }
    else if(email.value.trim()=="")
    {
        alert("Email Is Blank");
        email.style.border = "solid 1px aqua";
        document.getElementById("invalid_email").style.visibility="visible";
        return false;
    }
}