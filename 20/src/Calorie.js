import React from 'react'
import styled from 'styled-components'
function Calorie({food,calorie,list,setList,index}){
    function Delete(){
        const newList=list.filter((item,indx)=>{

            if(index!=indx){
                return item
            }

        })
        setList(newList)
    }

    return(
        <Calories>
            <span>{food}</span>
            <button onClick={Delete}>Delete</button>
            <p>you have consumed {calorie} cals today</p>
        </Calories>
    )

}
const Calories =styled.div`
width:100%;
height:auto;
background-color: rgb(22, 170, 22);

`
export default Calorie