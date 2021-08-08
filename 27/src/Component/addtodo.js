import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react'
import {addItem} from '../Action/Index'
function Addtodo() {
     
  const dispatch = useDispatch();
    const [item,setItem] = useState('')
    return (
        <div>
            <input type="text"  placeholder="Addd a todo"  value={item} onChange={(e)=>setItem(e.target.value) }/>
            <button onClick={()=>
                {
                    dispatch(addItem(
                        {
                            title:item,
                        done:false
                        }

                    ));
                setItem('');

                }
            }
                
                >Add</button>
           
        </div>
    )
}

export default Addtodo;
