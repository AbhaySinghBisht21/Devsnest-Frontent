// var first = prompt("Please enter your name");
// var second = prompt("Please enter your name");

function sum() {
    var a,b,res;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    res=a+b;
    console.log(res)
    document.getElementById("result").value=res;
 }
 
 function sub() {
     var a,b,res;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    res=a-b;
    console.log(res)
    document.getElementById("result").value=res;
 }
 
 
 function mlt() {
     var a,b,res;
     a=Number(document.getElementById("first").value);
     b=Number(document.getElementById("second").value);
     res=a*b;
     console.log(res)
     document.getElementById("result").value=res;
 }
 
 
 function did() {
     var a,b,res;
     a=Number(document.getElementById("first").value);
     b=Number(document.getElementById("second").value);
     res=a/b;
     console.log(res)
     document.getElementById("result").value=res;
}


