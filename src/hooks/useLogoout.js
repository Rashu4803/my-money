import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
 export const useLogout = ()=>
{   const [isCancelled,setIsCancelled] = useState(false)
    const [error,setError] = useState(null)
    const [isPending,setIspending] = useState(false)
    const {dispatch} = useAuthContext()

    const logout =  async () =>
    {
        setError(null)
        setIspending(true)
        try{
            await projectAuth.signOut()
            // dispatch logout action
            dispatch({type: 'LOGOUT' })
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
    return {logout,error,isPending}
}