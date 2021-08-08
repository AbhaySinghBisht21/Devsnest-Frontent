const addItem = (item)=>{
return{
    type:"Add_Item",
    payload: item,
};

};


const deleteItem = (id)=>{
    return{
        type:"Delete_Item",
        payload:id,
    };
    
    };
    export {addItem,deleteItem}
    