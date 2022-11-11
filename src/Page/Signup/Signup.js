import  styles from './Sign.module.css'
import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {

    const [dname,setDname]=useState('');
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const {error,isPending,signup} = useSignup();
    const handleSubmit = (e)=>
    {
          e.preventDefault();
       signup(dname,email,password);
          console.log(dname);
          console.log(email);
          console.log(password);
    }
  return (
  
   <form className={styles['signup-form']}>
    <h2>Signup</h2>
      <label>
        <span>
            display name:
            </span>
        <input 
        onChange={(e)=>setDname(e.target.value)}
        value={dname}
        type="name"
        />
    </label>
    <label>
        <span>
            email:
            </span>
        <input 
        type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
    </label>
    <label>
        <span>
          password:
        </span>
        <input
        type ="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
    </label>
   {
   !isPending && 
    <button onClick={handleSubmit} className='btn'>Signup</button>

   }
    {
        isPending && <button className="btn" disabled>loading</button>
    }
    {
        error && <p>{error}</p>
    }
   </form>
  )
}