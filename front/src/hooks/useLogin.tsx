import { useState } from "react";


import { useNavigate } from "react-router";
import { useDispatch} from "react-redux";


import { isAuth } from "../store/authSlice";

export const useLogin = () => {
     const [error, setError] = useState(null)
     const [isLoading, setIsLoading] = useState(false)

    
     const dispatch = useDispatch();

     const navigate = useNavigate()

    

     const login = async (email:any, password:any) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://jobspot-cc0j.onrender.com/api/user/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', email)

       
           navigate('/profile')
            setIsLoading(false)
            dispatch(isAuth(email))
                 // update redux
        }
     }

     return { login, isLoading, error }
}

