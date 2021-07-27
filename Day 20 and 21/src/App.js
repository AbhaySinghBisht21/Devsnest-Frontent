
import './App.css';
import { useState } from 'react';
import Calorie from './Calorie'
function App() {
  const [list,setList]=useState([
    {
      food:"Pizza",
      calorie:5
    },
    {
      food:"Burger",
      calorie:69
    },
    {
      food:"Coke",
      calorie:50
    },
    {
      food:"Browne",
      calorie:10
    },
    {
      food:"Fried Rice",
      calorie:90
    },
    {
      food:"Lassania",
      calorie:56
    },
    {
      food:"Pani Puri",
      calorie:10
    },
])
  return (
    <div className="App">
        <h1>Calorie Read Only</h1>
      <div className='card'>
        {list.map((item,indx)=>(
      <Calorie food={item.food} calorie={item.calorie} list={list} setList={setList} index={indx}/>
    ))}
      </div>
    </div>
  );
}

export default App;
