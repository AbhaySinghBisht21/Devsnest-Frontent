
import './App.css';
import {username,email} from "./action"
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const Usr = useSelector((state) => state.usr)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
<h1>Input</h1>
<input type="text" placeholder="Name" onChange={(event)=>{dispatch(username(event.target.value))}}/>
<input type="email" placeholder="Email" onChange={(event)=>{dispatch(email(event.target.value))}}/>
</div>
<div>
  <div>
    <p >Username: {Usr.name}</p> 
    <p>Email: {Usr.email}</p>

    </div>
  

</div>
    </div>
  );
}

export default App;
