const frame = document.querySelector(".frame");
for(i=0;i<400;i++){
    frame.innerHTML+='<div class="box"></div>';

}

const defaultWhite = [
    129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
    190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
    250, 252, 266, 268, 271, 273
];
const frames=document.querySelectorAll(".box")
for(let i=0;i<400;i++){
        if(defaultWhite.includes(i)){
            
        }
        else{
            frames[i].classList.add("boxclick");
        }
    }
frames.forEach((i)=> {
i.addEventListener("click",() =>{
    if (i.classList.contains('boxclick')){
        i.classList.remove('boxclick');

    }
    else{
        i.classList.add('boxclick');
    }
})})
