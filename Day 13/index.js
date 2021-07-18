const a=document.querySelector(".button")
// a.addEventListener('click',async()=>{
//     fetch("https://api.quotable.io/random")

// .then(res => res.json)
// .then(data => console.log(data))
// })

a.addEventListener('click',()=>{
    getdata();

    })
    async function getdata(){
    let quotes=  await fetch("https://api.quotable.io/random")
    .then( quotes =>(quotes.json()))
    .then(data =>{
        console.log(data)
        show(data)})

  }
  

  function show(data){

    let z=document.querySelector(".box")
    let f=document.querySelector(".box2")
    let html=`<div class="quotes">"${data.content}"
    <div class="ht">~${data.author}</div></div>`


    // let ht=`<div class="ht">${data.author}</div>`
    z.innerHTML=html;
    console.log("z")
 
// f.innerHTML="~~"+ht;
//      console.log("ht")
     
  }
