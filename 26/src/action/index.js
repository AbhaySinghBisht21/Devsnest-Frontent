const username=(data)=>{
    return{
        type:"NAME",
        payload:data,
    };
}

const email =(data)=>{
    return{
        type:"Email",
        payload:data,
    };
}

export {username,email}