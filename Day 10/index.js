
var click=document.querySelectorAll('.box')
let flipped=false
let first,second
let lock= false

const imgs=['ang',
   'aur',
   'react',
    'js',
    'vue',
    "green","blue","yellow"
    ];

    // const imgs=["pink","yellow","green","white","blue"]
    const cards=[...document.querySelectorAll(".box")]

    for (let img of imgs)
    {
    const cardAIndex =Math.floor(Math.random()*cards.length);
    const cardA =cards[cardAIndex]
    cards.splice(cardAIndex,1);
    cardA.classList.add(img)
    cardA.setAttribute('data-framework',img);


    const cardBIndex =Math.floor(Math.random()*cards.length);
    const cardB =cards[cardBIndex];
    cards.splice(cardBIndex,1);
    cardB.classList.add(img);
    cardB.setAttribute('data-framework',img);
}


function flipping(){
    if(lock) return;
    this.classList.remove("hidden")
    if(!flipped){
        flipped=true;
        first=this;

    }
    else{
        flipped=false
        second=this
    if(first.dataset.framework === second.dataset.framework){
        first.removeEventListener("click",flipping);
        second.removeEventListener("click",flipping);
        lock=false;
    }
    else{
        lock=true;
        setTimeout(()=>{
        first.classList.add("hidden");
        second.classList.add("hidden");
        lock=false;
        },500);
    }


    }
}



click.forEach(block => block.addEventListener('click',flipping));




// // click.forEach((block)=>{
// // block.addEventListener('click',()=>{
// //     block.classList.toggle('hidden');
    
// // })

// // })
