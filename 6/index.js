
function isarry(input)
{
    if (toString.call(input) === "[object Array]")
    {
      return true;
    }
    return false;   
      
      };
console.log(isarry('w3resource'))


function clone(nu){
    b=[]
    for (let i=0;i<number.length();i++){
        b[i]=nu[i]
    console.log(b)
    }
    console.log(b);
}
clone([1, 2, [4, 0]])

function first(array, n){
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));


const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));




