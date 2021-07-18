import React from 'react'
import styled from 'styled-components'

function Card({food,cal}) {
    return (
        <Calories>
           <h1>{food}</h1>
           <span>you have consumed {cal} cals today</span>
        </Calories>
    )
}

const Calories =styled.div`
width:100%;
height:auto;
background-color: rgb(22, 170, 22);

`




export default Card
