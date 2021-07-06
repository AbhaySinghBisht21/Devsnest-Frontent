

var aftrprint=document.querySelector(".keydown")
aftrprint.addEventListener("keydown",()=>{
    alert("fhg")
})

window.onafterprint = (event) => {

    console.log("printing done")
    alert("Your HTML file print successfully")
}

var x=document.querySelector(".keyup")
x.addEventListener("keydown",()=>{
  
    x.value = x.value.toUpperCase();
})
var q=document.querySelector(".q")
q.addEventListener("mouseover",()=>{
    q.style.height = "64px";
  q.style.width = "64px";
  
})
var q=document.querySelector(".q")
q.addEventListener("mouseout",()=>{
    q.style.width = "595px";
  q.style.height = "800px";
  
})