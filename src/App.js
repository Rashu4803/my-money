
import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,NavLink,Link,Redirect} from 'react-router-dom'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login';
import Signup from './Page/Signup/Signup';
import Navbar from './Components/Navbar';
import {useAuthContext} from './hooks/useAuthContext' 
/*
  login => login,signup
  logged out => home 
*/

function App() {
  const {authIsReady,user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
       <BrowserRouter>
       <Navbar/>
       <Switch>
       <Route exact path='/'>
        {user &&<Home/> }
        {!user && <Redirect to="/login"/>}   
       </Route>
       <Route  path ='/signup'>
         {!user &&   <Signup/>}
         {
            user && <Redirect to="/"/>
         }
      
       </Route>
       <Route  path ='/login'>
       {!user && <Login/> }
       {user && <Redirect to="/"/>}
       </Route>
       </Switch>
       </BrowserRouter>
       )}
    </div>
  );
}

 export default App;

// import { useState,useEffect } from "react";
//  import Signup from './Page/Signup/Signup';
//  import {BrowserRouter,Route,Switch,NavLink,Link} from 'react-router-dom'

// import React from 'react'

// export default function App() {
//   const [data,setData] =useState(0);
  
//    const handleSubmit = () =>
//    {
    
//     console.log(data);
//     setData(data+1);
//    }
// //    useEffect(() => {
// //     return ()=>{
// //     console.log("run");
// //     }
// //  //   <h1>run !!</h1>
// //   }, [])
   
  // return (
  //   <div className="App">
  //     <button onClick={handleSubmit}>click me</button>
  //     <BrowserRouter>

  //   <Link to='/signup'>signup</Link>
  //   <Route path='/signup'><Signup/></Route>
  //   </BrowserRouter>

  //   </div>
  // )
 


// }
