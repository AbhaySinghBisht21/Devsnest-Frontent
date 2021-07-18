
const boxs =document.querySelectorAll('.column')
let a=document.getElementById("available")
let alb=0;
a.textContent=alb;


let b=document.getElementById("left")
let lft=88;
b.textContent=lft



boxs.forEach((box)=> {

    
    box.addEventListener('click' , () => {
        if (box.classList.contains('columnclick')){
            box.classList.remove('columnclick');
            alb--;
            a.textContent=alb
            lft++;
            b.textContent=lft
        }
        else{
            box.classList.add('columnclick');
   
            alb++;
            a.textContent=alb;
            lft--;
            b.textContent=lft;
            
        }
    })
})




