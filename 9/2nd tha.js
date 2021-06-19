const s = {
    firstName:"Nikky"
}

const s2 = {
    firstName:"Noob"
}


function ab(a,b){
    console.log(this);
    console.log(a+b);

}

ab.call(s2,1,2);
ab.apply(s,[1,2]);
const n=ab.bind(s2,1,2);
console.log(n)
n()