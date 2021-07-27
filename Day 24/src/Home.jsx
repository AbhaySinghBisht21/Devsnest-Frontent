
const Home =({login,setLogin})=>{

return (
 <div className="home">
     <h1>Home</h1>
     <span>If not logged in cant access, Profile & Dashboard</span>


     { login ? 
         <button onClick={() =>setLogin(false)}>
         Logout
     </button>
         :
             <button onClick={() =>setLogin(true)}>
                 Login
             </button>
         
     }
 </div>

);

}
export default Home;
