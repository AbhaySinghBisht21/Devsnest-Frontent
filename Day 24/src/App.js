import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './Home'
import './App.css';
import Nav from './Nav'
import About from './About'
import Dashboard from './Dashboard'
import Profile from './Profile'
import {useState } from 'react'


function App() {
  const [login,setLogin] = useState(false)


  return (
    <Router>
{/*         
        <Nav login ={login} />
        <Switch>
          <Route exact path="/" >
            <Home  setLogin ={setLogin} login={login}   />
          </Route>

          <Route path="/about">
            <About/>
          </Route>



          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/dashboard">
            <Dashboard/> 
          </Route>



        </Switch> */}

             <Nav login={login} />
           
        <Switch>
          <Route exact path="/">
                   <Home login={login} setLogin={setLogin}/>
          </Route>
          <Route exact path="/about">
                   <About/>
          </Route>

           <Route path='/dashboard'>
             <Dashboard />
          </Route>
          
          <Route path='/profile'>
             <Profile />
          </Route>

          
        </Switch>
      </Router>
  );
  }

export default App;
