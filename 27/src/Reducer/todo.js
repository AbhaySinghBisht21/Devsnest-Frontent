const todoReducer =(state =[]  ,action) =>{

    if(action.type==='Add_Item')
    {
        return [...state,action.payload]
    }
    else if (action.type==='Delete_Item')
    {
        return state.filter ((item,index) =>  (action.payload != index ));
    }
    return state
};

export  default todoReducer;