var answer=document.querySelectorAll(".ans")
const corr="c"

answer.forEach((ans)=>{
ans.addEventListener('click',()=>{
    if (document.getElementById("a")){
        document.getElementById("a").innerHTML = "Correct answer";
    }
//     if (document.getElementById("b")==corr){
//         document.getElementById("b").innerHTML = "inCorrect answer";
//     }
//    if (document.getElementById("c")==corr){
//         document.getElementById("c").innerHTML = "inCorrect answer";
//     }
//     if (document.getElementById("d")==corr){
//         document.getElementById("d").innerHTML = "inCorrect answer";
//     }

})
ans.addEventListener('click',()=>{
    if (document.getElementById("b")){
                document.getElementById("b").innerHTML = "inCorrect answer";



            }})
ans.addEventListener('click',()=>{
    if (document.getElementById("c")){
                document.getElementById("c").innerHTML = "inCorrect answer";



            }})
ans.addEventListener('click',()=>{
    if (document.getElementById("d")){
                document.getElementById("d").innerHTML = "inCorrect answer";



            }})
})







// var answer=document.querySelectorAll(".ans")
// let q=document.getElementById("a").value;
// console.log(q)
// answer.forEach((ans)=>{
// ans.addEventListener('click',()=>{
//     if (document.querySelector("#a").value==q){
//         document.querySelector("#a").innerHTML = "Correct answer";
//         console.log("a")   
//     }
//     ans++;
//     if (document.querySelector("#b").value==q){
//         document.querySelector("#b").innerHTML = "inCorrect answer";
//         console.log("b")
//     }

//     if (document.querySelector("#c").value==q){
//         document.querySelector("#c").innerHTML = "inCorrect answer";
//         console.log("c")
//     }

//     if (document.querySelector("#d").value==q){
//         document.querySelector("#d").innerHTML = "inCorrect answer";
//         console.log("d")
//     }})
// })