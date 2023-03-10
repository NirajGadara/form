function myForm(){

    let FirstName = document.getElementById("firstname").value;
    let LastName = document.getElementById("lastname").value;
    let Pnum = document.getElementById("num").value;
    let Email = document.getElementById("email").value;
    let BirthDate = document.getElementById("birthdate").value;
    let App_Time = document.getElementById("app_time").value;
    let favcolor = document.getElementById("favcolor").value;
    let Cash = document.getElementById("cash").value;
    let Card = document.getElementById("card").value;
    let Upi = document.getElementById("upi").value; 
    let Age = document.getElementById("age").value;



    let firstname = localStorage.setItem("FirstName",FirstName);    
    let lastname = localStorage.setItem("LastName",LastName);    
    let phonenumber = localStorage.setItem("Pnum",Pnum);    
    let email = localStorage.setItem("Email",Email);    
    let birthdate = localStorage.setItem("BirthDate",BirthDate);
    let app_time = localStorage.setItem("App_Time",App_Time);
    let favColor = localStorage.setItem("favcolor",favcolor);
    let cash = localStorage.setItem("Cash",Cash);
    let card = localStorage.setItem("Card",Card);
    let upi = localStorage.setItem("Upi",Upi);
    let age = localStorage.setItem("Age",Age);


}
