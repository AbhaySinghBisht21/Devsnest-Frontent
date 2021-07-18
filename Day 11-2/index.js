var boxs=document.querySelectorAll(".ans")
let lock=false
let crr="a"
var id =
boxs.forEach(box => {
    box.addEventListener('click', () => {
       console.log(box.id)
        if(lock) return;
        
        // box.classList.toggle("show")
        if (box.id==crr){  
        
            document.getElementById("a").innerHTML="Correct"
        }
        else{
            box.classList.add('show');
        }
        lock=true;
        
        console.log("sfdg");
        
    })
    
})
