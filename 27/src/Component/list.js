import React from "react";
import {deleteItem} from '../Action/Index'
import { useDispatch,useSelector } from "react-redux";
function List() {
    const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <h4>{todo.title}</h4>
          <button onClick={()=>{
              dispatch(deleteItem(index))
          }}> Delete</button>
        </div>
      ))}
    </div>
  );
}

export default List;
