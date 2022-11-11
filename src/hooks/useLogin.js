import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
 export const useLogin = ()=>
{   const [isCancelled,setIsCancelled] = useState(false)
    const [error,setError] = useState(null)
    const [isPending,setIspending] = useState(false)
    const {dispatch} = useAuthContext()

    const login =  async (email,password) =>
    {
        setError(null)
        setIspending(true)
        try{
           const res =  await projectAuth.signInWithEmailAndPassword(email,password)
            // dispatch logout action
            dispatch({type: 'LOGIN' ,payload: res.user })
            if(!isCancelled)
            {setIspending(false);
            setError(null);
            }
        }
        catch(err)
        {
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
    return {login,error,isPending}
}