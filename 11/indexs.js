var x=document.querySelectorAll(".ans")
var corr=document.querySelector("#a")
var crr=corr.id
// console.log(crr)
function  asd (){

x.forEach((ans)=>{
    
  if(ans.checked){
    
    if(ans.id==crr){
      document.querySelector(".sub").innerHTML="correct answer"
    }

   
 else{
  document.querySelector(".sub").innerHTML="Incorrect answer"
 }





  } 
})
}
