var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Smart device for sales</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobiles</li>"
        +"<li>Holo Lens</li>"
        +"<li>Holographic Device</li>"
        +"<li>Smart Watches</li>"
        +"<li>Gaming Console</li>"
        +"</ol>"
    );
});
app.get("/aboutus",(req, res)=>{
    res.send(
        "<h1>Vijay Sales</h1>"
        +"<hr/>"
        +"<h3>Smart PBCreateR</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>P</li>"
        +"<li>B</li>"
        +"<li>C</li>"
        +"</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(9000);
console.log("Vijay Sales Online shopping running on port 9000");