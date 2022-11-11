import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [isCancelled,setIsCancelled] = useState(false)
  const {dispatch} =useAuthContext()
  const signup = async (dname, email, password) => {
    setError(null);
    setIspending(true);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);
      console.log(res.user)
      if (!res) {
        throw new Error('could not complete signup')

      }
      // add display name to user
      await res.user.updateProfile({ displayName: dname });
    // dispatch login action
    dispatch({ type: 'LOGIN', payload: res.user })
      if(!isCancelled)
      {setIspending(false);
      setError(null);
      }
    }
    catch (err) {
      if(!isCancelled)
            {
            console.log(err.message);
            setError(err.message)
            setIspending(false)
            }
    }

  }
  useEffect(() => {
    return ()=>setIsCancelled(true)

   
}, [])
  return { error, isPending, signup }
}