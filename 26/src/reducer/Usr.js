const initalState ={
    name :"",
    email:""
}


const usr=(state = initalState ,action) =>{
    if(action.type==="NAME"){
    
        return {...state,name:action.payload}
   
    }
    else if (action.type==="Email"){
   
        return {...state,email:action.payload}
    }
    return state;
};
export default usr;